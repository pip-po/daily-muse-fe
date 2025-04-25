import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href="/blogs">
      <Card>
        <CardHeader>
          <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              fill
              sizes=""
              priority
              className="object-cover"
            ></Image>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge className="bg-[#969696] capitalize">
              <p>{blog.category}</p>
            </Badge>
            <p className="text-sm text-gray-400">{blog.user?.name}</p>
            <h2 className="line-clamp-2 text-xl font-bold">{blog.title}</h2>

            <p className="line-clamp-3">{blog.description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
