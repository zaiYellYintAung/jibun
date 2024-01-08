"use client";

import { BlogType } from "@/lib/mongodb";
import BlogCard from "./BlogCard";

interface Props {
  blogs: any[];
}

const BlogList: React.FC<Props> = ({ blogs }) => {
  const categories = [
    { label: "Real Estate", key: "", visible: true },
    { label: "Technology", key: "", visible: true },
    { label: "News", key: "", visible: true },
    { label: "Educational", key: "", visible: true },
  ];
  console.log("blogs", blogs);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold py-8">Our Blogs</h1>
        {categories.map((item) => (
          <button
            key={item.label}
            className="border rounded-md mr-4 text-sm py-2 px-4 mb-4 md:mb-0">
            {item.label}
          </button>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
        {blogs.map((blog, index) => (
          <div key={index} className="mb-4 cursor-pointer">
            <BlogCard item={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
