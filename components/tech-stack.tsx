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
        <p className="mb-2 text-center">
          I am consistently seeking opportunities to learn and broaden my
          expertise, striving to enhance my knowledge and skills in various
          domains.
        </p>
        <p className="mb-2 text-center">
          I have experience with a variety of technologies, including:
        </p>
        <ul className="flex flex-row justify-center items-center gap-8 list-disc">
          <div>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </div>
          <div>
            <li>TypeScript</li>
            <li>React</li>
            <li>TailwindCSS</li>
          </div>
        </ul>
      </CardContent>
    </Card>
  );
}
