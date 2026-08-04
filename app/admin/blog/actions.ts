'use server'

import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import { uploadImageToCloudinary } from '@/utils/cloudinary';

export async function createBlogPost(formData: FormData) {
  const supabase = await createClient();
  
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;
  const category = formData.get('category') as string;
  const tagsString = formData.get('tags') as string;
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()) : [];
  const metaDescription = formData.get('metaDescription') as string;
  const date = new Date().toISOString().split('T')[0];
  const readTime = Math.ceil(content.length / 1000) + ' min read'; // rough estimate

  let coverImageUrl = formData.get('existingCoverImage') as string || '';
  
  const coverImageFile = formData.get('coverImage') as File;
  if (coverImageFile && coverImageFile.size > 0) {
    const buffer = Buffer.from(await coverImageFile.arrayBuffer());
    coverImageUrl = await uploadImageToCloudinary(buffer, 'safinterior/blog');
  }

  const { error } = await supabase.from('blog_posts').insert({
    title, slug, excerpt, content, author, category, tags, meta_description: metaDescription,
    cover_image: coverImageUrl, date, read_time: readTime
  });

  if (error) {
    console.error("Error creating post:", error);
    return { error: error.message };
  }

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  return { success: true };
}

export async function updateBlogPost(id: string, formData: FormData) {
  const supabase = await createClient();
  
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;
  const category = formData.get('category') as string;
  const tagsString = formData.get('tags') as string;
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()) : [];
  const metaDescription = formData.get('metaDescription') as string;

  let coverImageUrl = formData.get('existingCoverImage') as string || '';
  
  const coverImageFile = formData.get('coverImage') as File;
  if (coverImageFile && coverImageFile.size > 0) {
    const buffer = Buffer.from(await coverImageFile.arrayBuffer());
    coverImageUrl = await uploadImageToCloudinary(buffer, 'safinterior/blog');
  }

  const { error } = await supabase.from('blog_posts').update({
    title, slug, excerpt, content, author, category, tags, meta_description: metaDescription,
    cover_image: coverImageUrl, updated_at: new Date().toISOString()
  }).eq('id', id);

  if (error) {
    console.error("Error updating post:", error);
    return { error: error.message };
  }

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  return { success: true };
}

export async function deleteBlogPost(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);

  if (error) {
    console.error("Error deleting post:", error);
    return { error: error.message };
  }

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  return { success: true };
}
