import IconCloud from "./magicui/icon-cloud";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function TechStack() {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle className="text-center">Technologies</CardTitle>
        <CardDescription className="text-center">
          What I Work With
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <p className="mb-4 text-center">
          I am consistently seeking opportunities to learn and broaden my
          expertise, striving to enhance my knowledge and skills in various
          domains.
        </p>
        <IconCloud
          iconSlugs={[
            "javascript",
            "typescript",
            "react",
            "tailwindcss",
            "nodejs",
            "express",
            "mongodb",
            "postgresql",
            "git",
            "github",
            "python",
          ]}
        />
      </CardContent>
    </Card>
  );
}
