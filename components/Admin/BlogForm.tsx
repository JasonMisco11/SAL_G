'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBlogPost, updateBlogPost } from '@/app/admin/blog/actions';
import Image from 'next/image';

interface BlogFormProps {
  initialData?: any; // To be typed properly later if needed
}

export default function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isEditing = !!initialData;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    
    try {
      let res;
      if (isEditing) {
        res = await updateBlogPost(initialData.id, formData);
      } else {
        res = await createBlogPost(formData);
      }

      if (res.error) {
        setError(res.error);
      } else {
        router.push('/admin/blog');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm">
          {error}
        </div>
      )}
      
      {initialData && (
        <input type="hidden" name="existingCoverImage" value={initialData.cover_image || ''} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input type="text" name="title" required defaultValue={initialData?.title} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input type="text" name="slug" required defaultValue={initialData?.slug} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
        <textarea name="excerpt" required rows={2} defaultValue={initialData?.excerpt} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Content (HTML)</label>
        <textarea name="content" required rows={10} defaultValue={initialData?.content} className="w-full border border-gray-300 rounded-md px-4 py-2 font-mono text-sm focus:ring-blue-500 focus:border-blue-500" />
        <p className="text-xs text-gray-500 mt-1">For now, you can write basic HTML here (e.g. &lt;p&gt;, &lt;h2&gt;).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input type="text" name="author" required defaultValue={initialData?.author || "SAF Interior Team"} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <input type="text" name="category" required defaultValue={initialData?.category} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
          <input type="text" name="tags" defaultValue={initialData?.tags?.join(', ')} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
        <textarea name="metaDescription" required rows={2} defaultValue={initialData?.meta_description} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
        {initialData?.cover_image && (
          <div className="mb-4 relative w-64 h-32 rounded-md overflow-hidden bg-gray-100 border border-gray-200">
            <Image src={initialData.cover_image} alt="Cover" fill className="object-cover" />
          </div>
        )}
        <input type="file" name="coverImage" accept="image/*" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
        <p className="text-xs text-gray-500 mt-1">Leave empty to keep existing image (if editing).</p>
      </div>

      <div className="pt-4 flex justify-end gap-3 border-t border-gray-200">
        <button type="button" onClick={() => router.push('/admin/blog')} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
          Cancel
        </button>
        <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium disabled:opacity-50">
          {loading ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
        </button>
      </div>
    </form>
  );
}
