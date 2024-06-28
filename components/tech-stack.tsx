import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function TechStack() {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle className="text-center">Technologies</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <p className="mb-2 text-center">
          I have experience with a variety of technologies, including:
        </p>
        <ul className="text-center">
          <li>HTML,</li>
          <li>CSS,</li>
          <li>JavaScript,</li>
          <li>TypeScript,</li>
          <li>React,</li>
          <li>Supabase</li>
        </ul>
      </CardContent>
    </Card>
  );
}
