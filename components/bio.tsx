import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Bio() {
  return (
    <Card className="text-center flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle>Introduction</CardTitle>
        <CardDescription>Who I Am</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          I am a first-year computer science student with a concentration in
          software engineering. I have a passion for technology, especially
          software, and learning more about the how and why things work. I want
          to take this passion and use it to build software that will benefit
          the world.
        </p>
      </CardContent>
    </Card>
  );
}
