import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { uploadGalleryImage, deleteGalleryImage } from "./actions";
import { Trash2, UploadCloud } from "lucide-react";

export const revalidate = 0;

export default async function GalleryAdminPage() {
  const supabase = await createClient();
  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Upload New Image</h2>
        <form action={async (formData) => {
          'use server'
          await uploadGalleryImage(formData)
        }} className="flex items-center gap-4">
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors whitespace-nowrap"
          >
            <UploadCloud className="w-5 h-5" />
            Upload
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images?.map((img) => (
          <div key={img.id} className="relative group rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            <div className="relative aspect-square">
              <Image
                src={img.url}
                alt={img.alt_text || "Gallery image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <form action={async () => {
                'use server'
                await deleteGalleryImage(img.id, img.url)
              }}>
                <button 
                  type="submit"
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  title="Delete Image"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        ))}
        
        {(!images || images.length === 0) && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No images found. Upload some to get started.
          </div>
        )}
      </div>
    </div>
  );
}
