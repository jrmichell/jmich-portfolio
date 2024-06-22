"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

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
      <Carousel opts={{ align: "center" }}>
        <CarouselPrevious />
        <CarouselContent className="text-center text-muted-foreground">
          {projects.map((project: Projects, index: number) => (
            <CarouselItem key={index} className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <Link href={project.website_link} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.image_alt}
                      className="rounded-xl"
                      width={700}
                      height={700}
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </>
  );
}
