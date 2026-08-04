'use server'

import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import { uploadImageToCloudinary, deleteImageFromCloudinary } from '@/utils/cloudinary';

export async function uploadGalleryImage(formData: FormData) {
  const file = formData.get('image') as File;
  if (!file || file.size === 0) return { error: 'No file provided' };

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const imageUrl = await uploadImageToCloudinary(buffer);

    const supabase = await createClient();
    
    // Get highest display order
    const { data: latestImg } = await supabase
      .from('gallery_images')
      .select('display_order')
      .order('display_order', { ascending: false })
      .limit(1)
      .single();
      
    const nextOrder = (latestImg?.display_order ?? 0) + 1;

    const { error: dbError } = await supabase
      .from('gallery_images')
      .insert({
        url: imageUrl,
        alt_text: file.name,
        display_order: nextOrder
      });

    if (dbError) throw dbError;

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    revalidatePath('/');
    
    return { success: true };
  } catch (error: any) {
    console.error("Upload error:", error);
    return { error: error.message || 'Failed to upload image' };
  }
}

export async function deleteGalleryImage(id: string, url: string) {
  try {
    // Delete from Cloudinary
    await deleteImageFromCloudinary(url);

    // Delete from Supabase
    const supabase = await createClient();
    const { error } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', id);

    if (error) throw error;

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    revalidatePath('/');
    
    return { success: true };
  } catch (error: any) {
    console.error("Delete error:", error);
    return { error: error.message || 'Failed to delete image' };
  }
}
