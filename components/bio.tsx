import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Bio() {
  return (
    <>
      <h1 className="text-3xl mb-6 text-center font-semibold text-[#5651e5]">
        About Me
      </h1>
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            I am software developer based in the United States. I have a passion
            for creating different things and problem-solving. Throughout my
            life, mathematics has always been something I was fairly good with,
            and enjoyed the problem-solving aspect of it. I have always been
            interested in technology and how it works, and I want to take this
            passion and use it to create software that will benefit the world.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
