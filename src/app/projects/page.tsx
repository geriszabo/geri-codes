import { Typography, TypographyPropCollection } from "@/components/Typography";
import data from "../../../messages/en.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Chrome, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const { projects } = data.projects;
  const typographyProps: TypographyPropCollection = {
    namespacePath: "projects.cards",
    variant: "paragraph",
    className: "font-bold"
  };
  return (
    <section>
      <Typography
        className="mb-12"
        namespacePath="projects"
        text="title"
        variant="title"
      />
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => {
          const { description, features, technologies, title, image, site } =
            project;

          return (
            <article key={title}>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm flex-1">
                  <Image
                    src={image}
                    width={250}
                    height={250}
                    alt="project"
                    className="object-fill h-48 w-96"
                  />
                  <div className="flex-flex-col gap-2 my-4">
                    <Typography  {...typographyProps} text="feat" />
                    {features.join(", ")}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography {...typographyProps} text="tech" />
                    <ul className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge variant="secondary">{tech}</Badge>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link target="_blank" href={site}>
                      <Github className="size-3" />
                      github
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link target="_blank" href={site}>
                      <Chrome />
                      site
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </article>
          );
        })}
      </div>
    </section>
  );
}
