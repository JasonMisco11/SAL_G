import { createClient } from "@/utils/supabase/server";
import BlogForm from "@/components/Admin/BlogForm";
import { notFound } from "next/navigation";

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Blog Post</h1>
      <BlogForm initialData={post} />
    </div>
  );
}
