import BlogForm from "@/components/Admin/BlogForm";

export default function NewBlogPostPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Blog Post</h1>
      <BlogForm />
    </div>
  );
}
