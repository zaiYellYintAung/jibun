"use client"

import React, { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Edit, Plus, Trash } from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
// import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

import AiGenerateBlogs from "./AiGenerateBlogs"
import demoBlog, {
  blogFormSchema,
  BlogStructrue,
  contentType,
  formTypeChoices,
  initialData,
  topicDatas,
} from "./constant"

const BlogForm = () => {
  const [contentIndex, setContentIndex] = useState<null | number>(null)
  const [type, setType] = useState("")
  const [content, setContent] = useState("")

  const [loading, setLoading] = useState(false)
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof blogFormSchema>>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: initialData,
  })

  const formData = form.getValues()

  const DisplayDemoBlog = () => {
    return (
      <div className="space-y-3">
        <h3 className="text-center text-lg font-semibold">{formData.title}</h3>

        <div className="flex justify-between text-sm font-medium">
          <div>
            {formData.topic.map((item, index) => (
              <span key={index}>{item},</span>
            ))}
          </div>
          <div>
            {formData.minRead.length > 0 && `${formData.minRead} Min Read`}{" "}
          </div>
        </div>

        {formData.contents.map((content, index) => (
          <div key={index} className="text-xs font-medium">
            {content.type === "subtitle" && (
              <p className="text-base">
                {content.text} <DropDown content={content} index={index} />
              </p>
            )}
            {content.type === "body" && (
              <p>
                {content.text} <DropDown content={content} index={index} />
              </p>
            )}
            {content.type === "break" && (
              <div className="">
                <DropDown content={content} index={index} />
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  const onAddContent = async () => {
    await form.setValue("contents", [
      ...form.getValues().contents,
      { type: type, text: content },
    ])
    setType("")
    setContent("")
  }

  const onRemoveContent = (index: number) => {
    const currentContents = form.getValues().contents
    currentContents.splice(index, 1)
    form.setValue("contents", [...currentContents])
    toast({ title: "Successfully removed content" })
  }

  const onEditContent = ({
    content,
    index,
  }: {
    content: any
    index: number
  }) => {
    setContentIndex(index)
    setType(content.type)
    setContent(content.text)
  }

  const handleEditContent = () => {
    const currentContents = form.getValues().contents

    if (contentIndex !== null && contentIndex < currentContents.length) {
      currentContents[contentIndex] = { type: type, text: content }
      form.setValue("contents", currentContents)
      setContentIndex(null)
      setType("")
      setContent("")
      toast({ title: "Successfully edited content" })
    } else {
      toast({ title: "Invalid index for editing" })
    }
  }

  const DropDown = ({ content, index }: { content: any; index: number }) => {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>#</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24 text-sm">
            <DropdownMenuItem onClick={() => onEditContent({ content, index })}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onRemoveContent(index)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  }

  const onSubmit = async (values: BlogStructrue) => {
    console.log("val", values)

    try {
      setLoading(true)
      const response = await axios.post("/api/blog", values)
      console.log("rp", response)
    } catch (err) {
      console.log("error->", err)
      toast({ title: "Something went wrong" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex gap-8 mt-8">
        <div className="w-1/2 min-h-full">
          {" "}
          <div>{DisplayDemoBlog()}</div>
        </div>

        <div className="border-r" />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-1/2"
          >
            {/* Cover Image Field */}

            <FormItem>
              <FormLabel>Cover</FormLabel>
              <FormControl>
                <div>
                  {form.getValues().image ? (
                    <Button
                      variant={"secondary"}
                      type={"button"}
                      onClick={() => form.setValue("image", "")}
                    >
                      Remove Image
                    </Button>
                  ) : (
                    // <ImageUpload
                    //   value={[]}
                    //   onChange={(value: string) =>
                    //     form.setValue("image", value)
                    //   }
                    //   onRemove={(value: string) => form.setValue("image", "")}
                    // />
                    <>Img Upload</>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>

            <div className="flex gap-4">
              <FormField
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="minRead"
                render={({ field }) => (
                  <FormItem className="flex-shrink-0">
                    <FormLabel>Min Read</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormItem>
              <FormLabel>Topics</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {topicDatas.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (form.getValues().topic.includes(topic.key)) {
                          form.setValue(
                            "topic",
                            form
                              .getValues()
                              .topic.filter((key) => key !== topic.key)
                          )
                        } else {
                          form.setValue("topic", [
                            ...form.getValues().topic,
                            topic.key,
                          ])
                        }
                      }}
                      className={`border rounded-md text-xs py-1.5 px-3 ${
                        form.getValues().topic.includes(topic.key)
                          ? "bg-primary/20 border-primary/30"
                          : ""
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
            <div className="flex justify-end">
              <AiGenerateBlogs />
            </div>
            <Separator />

            <div className="flex gap-4 items-end">
              <FormItem className="w-full">
                <FormLabel>Content Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value: string) => setType(value)}
                    value={type}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Content Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Content Types</SelectLabel>
                        {formTypeChoices.map((choice) => (
                          <React.Fragment key={choice.value}>
                            <SelectItem key={choice.value} value={choice.value}>
                              {choice.label}
                            </SelectItem>
                          </React.Fragment>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>

              <Button
                onClick={() => {
                  contentIndex ? handleEditContent() : onAddContent()
                }}
                variant={"outline"}
                type="button"
                className="flex-shrink-0"
              >
                {contentIndex ? "Edit Content" : "Add Content"}
              </Button>
            </div>

            <div>
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            {/* Submit Button */}
            <Button
              disabled={loading}
              size={"lg"}
              className="ml-auto"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default BlogForm
