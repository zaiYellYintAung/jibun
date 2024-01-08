"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { topicDatas } from "./constant";
import React from "react";

const BlogFilter = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <TopicRouteButton route="/blogs" name="All" />
      {topicDatas.map((topic) => (
        <React.Fragment key={topic.key}>
          <TopicRouteButton
            route={`/blogs/topics/${topic.key}`}
            name={topic.label}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogFilter;

export const TopicRouteButton = ({
  route,
  name,
}: {
  route: string;
  name: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      key={name}
      className={`block border rounded-md text-sm py-2 px-4 ${
        pathname === route ? "bg-primary/20 border-primary/30" : ""
      }`}>
      {name}
    </Link>
  );
};
