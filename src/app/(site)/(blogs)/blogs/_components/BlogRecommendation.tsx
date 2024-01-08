import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import BlogMiniCard from "./BlogMiniCard";

interface Props {
  recommendedBlogs: any[];
}

const BlogRecommendation: FC<Props> = ({ recommendedBlogs }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">You might also like</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {recommendedBlogs.map((blog, index) => (
          <React.Fragment key={index}>
            <BlogMiniCard blog={blog} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default BlogRecommendation;
