import { FC } from "react";
import { BlogStructrue, BlogContent } from "./constant";

interface Props {
  blog: BlogStructrue;
}

const BlogDisplay: FC<Props> = ({ blog }) => {
  const renderContents = (input: BlogContent) => {
    switch (input.type) {
      case "subtitle":
        return (
          <h2 className="text-2xl md:text-3xl font-semibold">{input.text}</h2>
        );
      case "break":
        return <div className="py-2"></div>;
      case "body":
        return <p>{input.text}</p>;
    }
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">{blog.title}</h1>
      {blog.contents.map((content, index) => (
        <div key={index}>{renderContents(content)}</div>
      ))}
    </>
  );
};

export default BlogDisplay;
