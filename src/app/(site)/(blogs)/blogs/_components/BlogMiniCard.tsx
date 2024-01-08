import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  blog: any;
}

const BlogMiniCard: FC<Props> = ({ blog }) => {
  return (
    <>
      <Link
        href={`/blogs/${blog._id}`}
        key={blog._id}
        className="block space-y-3">
        <AspectRatio ratio={16 / 8} className="bg-muted">
          <Image
            src={blog.image}
            alt="Blog Cover"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <h1 className="text-base font-medium">{blog.title}</h1>
      </Link>
    </>
  );
};

export default BlogMiniCard;
