import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY || process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImageToCloudinary(fileBuffer: Buffer, folder: string = "safinterior"): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result!.secure_url);
      }
    );
    uploadStream.end(fileBuffer);
  });
}

export async function deleteImageFromCloudinary(url: string) {
  // Extract public_id from Cloudinary URL
  // Example URL: https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg
  // public_id: sample
  
  if (!url.includes('cloudinary.com')) return;
  
  try {
    const parts = url.split('/');
    // Get everything after the upload/v.../ folder
    const uploadIndex = parts.findIndex(p => p === 'upload');
    if (uploadIndex === -1) return;
    
    const relevantParts = parts.slice(uploadIndex + 2);
    const publicIdWithExt = relevantParts.join('/');
    const publicId = publicIdWithExt.substring(0, publicIdWithExt.lastIndexOf('.'));
    
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
    }
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
  }
}
