import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BlogType } from "@/lib/mongodb";
import Link from "next/link";
interface Props {
  item: any;
}

const BlogCard: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/blogs/${item._id}`} className="space-y-4">
      <AspectRatio ratio={16 / 10} className="bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <h1>{item.title}</h1>
    </Link>
  );
};

export default BlogCard;
