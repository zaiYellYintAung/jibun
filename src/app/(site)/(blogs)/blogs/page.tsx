import { Blog, connectMongoDB } from "@/lib/mongodb";
import BlogCard from "./_components/BlogCard";
import BlogFilter from "./_components/BlogFilter";

export default async function BlogsPage() {
  connectMongoDB();
  const blogs = await Blog.find();
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold py-8">Our Blogs</h1>
        <BlogFilter />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
        {blogs.map((blog, index) => (
          <div key={index} className="mb-4 cursor-pointer">
            <BlogCard item={blog} />
          </div>
        ))}
      </div>
    </>
  );
}
