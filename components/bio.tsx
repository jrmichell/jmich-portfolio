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
          I am a software engineer based in the United States. I have a passion
          for creating different things and problem-solving. Throughout my life,
          mathematics has always been something I was fairly good with, and
          enjoyed the problem-solving aspect of it. I have always been
          interested in technology and how it works, and I want to take this
          passion and use it to create software that will benefit the world.
        </p>
      </CardContent>
    </Card>
  );
}
