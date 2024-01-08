import mongoose from "mongoose";

import { Blog, connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    connectMongoDB();
    const body = await req.json();
    const { title, image, contents, topic, minRead, prompt } = body;

    console.log("body", body);

    const newBlog = new Blog({
      title,
      image,
      contents,
      topic,
      minRead,
      prompt,
    });
    const savedBlog = await newBlog.save();

    console.log(savedBlog);

    return NextResponse.json(savedBlog);
  } catch (error) {
    console.log("[Blog_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
