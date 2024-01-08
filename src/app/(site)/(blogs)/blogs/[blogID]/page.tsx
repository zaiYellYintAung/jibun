import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import BlogDisplay from "../_components/BlogDisplay";
import demoBlog from "../_components/constant";
import { Separator } from "@/components/ui/separator";
import BlogRecommendation from "../_components/BlogRecommendation";
import { Blog, connectMongoDB } from "@/lib/mongodb";
import BlogFilter from "../_components/BlogFilter";

export default async function SingleBlogPage({
  params,
}: {
  params: { blogID: string };
}) {
  connectMongoDB();
  const blog = await Blog.findById(params.blogID);

  const recommendedBlogs = await Blog.find({
    topic: { $in: blog.topic }, // Assuming "topics" is an array field
    _id: { $ne: blog._id }, // Exclude the current blog
  })
    .sort({ date: -1 }) // Sort by date in descending order (newest first)
    .limit(3);

  return (
    <main className="py-4 space-y-12">
      <AspectRatio ratio={16 / 7} className="bg-muted">
        <Image
          src={blog.image}
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <section className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 lg:border-r pr-0 lg:pr-6 space-y-4 lg:space-y-6 leading-loose">
          {/* <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            What is Personalized Marketing? How to Create an AI Agent for
            Personalized Marketing
          </h1>
          <p>
            Creating an AI agent for personalized marketing involves using AI to
            learn about customer preferences and specific demographic data on a
            detailed, personalized level. AI agents are computer programs or
            systems that perceive their environment, make decisions, and act to
            achieve specific goals. These agents operate autonomously, not
            requiring direct control from a human operator. AI agents can be
            used to automate vague tasks, making them ideal for personalized
            marketing. But what's the role of AI agents in personalized
            marketing?
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Understanding the Role of AI in Marketing
          </h2>

          <p>
            lorem Creating an AI agent for personalized marketing involves using
            AI to learn about customer preferences and specific demographic data
            on a detailed, personalized level. AI agents are computer programs
            or systems that perceive their environment, make decisions, and act
            to achieve specific goals. These agents operate autonomously, not
            requiring direct control from a human operator. AI agents can be
            used to automate vague tasks, making them ideal for personalized
            marketing. But what's the role of AI agents in personalized
            marketing?
          </p> */}
          <BlogDisplay blog={blog} />
        </div>
        <div className="hidden lg:block lg:w-1/4">
          <h1 className="font-semibold mb-2">Topics</h1>
          <BlogFilter />
        </div>
      </section>
      <Separator className="my-6" />
      <BlogRecommendation recommendedBlogs={recommendedBlogs} />
    </main>
  );
}
