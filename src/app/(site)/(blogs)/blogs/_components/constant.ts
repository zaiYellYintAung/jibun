import * as z from "zod";

export const blogFormSchema = z.object({
  title: z.string().min(1),
  prompt: z.string(),
  image: z.string().min(1),
  contents: z
    .object({
      type: z.string(),
      text: z.string(),
    })
    .array(),
  minRead: z.string().min(1),
  topic: z.string().array(),
  created: z.string(),
});

export interface BlogContent {
  type: "subtitle" | "body" | "break" | string;
  text: string | null;
}

// export interface BlogStructrue {
//   title: string;
//   prompt?: string;
//   topic: string[];
//   image: string;
//   contents: BlogContent[];
//   minRead: string | number;
//   created: any;
// }

export type BlogStructrue = z.infer<typeof blogFormSchema>;

const demoBlog: BlogStructrue = {
  title: "My Journey to Becoming an Entrepreneur",
  prompt: "Exploring the path to creating a successful startup",
  topic: ["Entrepreneurship", "Startup", "Success"],
  image:
    "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
  contents: [
    {
      type: "body",
      text: "In the world of entrepreneurship, the journey is just as important as the destination. It's a thrilling adventure filled with challenges and opportunities.",
    },
    {
      type: "break",
      text: "",
    },
    {
      type: "subtitle",
      text: "The Beginning",
    },
    {
      type: "body",
      text: "My journey began with a dream to create a unicorn company before the age of 25, inspired by my idol, Steve Jobs. This blog will walk you through the steps I'm taking to achieve this ambitious goal.",
    },
    {
      type: "body",
      text: "As a software engineer, I realized that I have the technical skills necessary to build innovative products. However, being an entrepreneur means more than just technical expertise; it's about vision, leadership, and resilience. I decided to embark on this challenging yet rewarding path.",
    },
    {
      type: "subtitle",
      text: "Choosing the Right Tech Stack",
    },
    {
      type: "body",
      text: "In my pursuit of creating a unicorn startup, I carefully selected my tech stack. I'm a fan of modern technologies, and I believe they are crucial for building elegant and efficient products. Currently, I'm working with technologies like Next.js, Svelte Kit, MERN, MEVN, Django, and Ruby on Rails. These technologies provide a solid foundation for creating cutting-edge applications.",
    },
    {
      type: "body",
      text: "I also pay close attention to design. As someone who loves elegant and minimalist themes, I ensure that the user interfaces of my products reflect those principles. For me, user experience is paramount, and I draw inspiration from companies like Apple and their dedication to creating beautifully designed products.",
    },
    {
      type: "subtitle",
      text: "The Grind and Work Ethic",
    },
    {
      type: "body",
      text: "To reach my goal, I've embraced the life of a workaholic. Success in the startup world demands dedication and hard work. I'm often found working long hours, continually striving for innovation and improvement. It's a grind, but I believe it's the only way to make my dreams a reality.",
    },
    {
      type: "body",
      text: "One of the things that drives me is my desire to make my family and my country, Myanmar, proud. I want to be a beacon of success that others can look up to and emulate. I understand that I have a long journey ahead, but I'm committed to making it happen.",
    },
    {
      type: "subtitle",
      text: "The Path Ahead",
    },
    {
      type: "body",
      text: "Becoming a billionaire at the age of 30 is my primary goal, and I believe it's achievable. However, I also have other aspirations. I want to be a successful influencer on YouTube, play the piano and guitar, travel the world, and even try paragliding. Life is not just about business; it's about experiences and adventures too.",
    },
    {
      type: "body",
      text: "In my quest to become a successful entrepreneur, I've also set my sights on being a great storyteller. Effective storytelling can inspire and connect with people on a deeper level. I want my journey to inspire others to pursue their dreams relentlessly.",
    },
  ],
  minRead: "4", // Adjust the estimated read time
  created: String(new Date()),
};

export default demoBlog;

export const contentType = [
  { label: "Body", value: "body" },
  { label: "Sub Title", value: "subtitle" },
  { label: "Break", value: "break" },
];

export const initialData: BlogStructrue = {
  title: "",
  prompt: "",
  image: "",
  minRead: "",
  topic: [],
  contents: [{ type: "", text: "" }],
  created: String(new Date()),
};

export const formTypeChoices = [
  { label: "Body", value: "body" },
  { label: "Sub Title", value: "subtitle" },
  { label: "Break", value: "break" },
];

export const topicDatas = [
  { label: "Buying", key: "buying" },
  { label: "Selling", key: "selling" },
  { label: "Investing", key: "investing" },
  { label: "Property Types", key: "property-types" },
  { label: "Market Insights", key: "market-insights" },
  { label: "Home Improvement", key: "home-improvement" },
  { label: "Real Estate Agents", key: "real-estate-agents" },
  { label: "Legal & Financial", key: "legal-financial" },
];
