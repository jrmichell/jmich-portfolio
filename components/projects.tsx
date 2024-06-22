"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface Projects {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  website_link: string;
  github_link: string;
}

export default function Projects() {
  return (
    <>
      <h1 className="text-3xl mb-6 text-center font-semibold text-[#5651e5]">
        Projects
      </h1>
      <div className="flex justify-center items-center">
        {projects.map((project: Projects, index: number) => (
          <Card
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <CardHeader className="text-center">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Link href={project.website_link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.image_alt}
                  className="rounded-xl hover:scale-105 duration-300"
                  width={800}
                  height={800}
                  priority
                />
              </Link>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <Link
                href={project.github_link}
                className="text-[#5651e5] hover:underline"
              >
                GitHub Repository ➜
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
