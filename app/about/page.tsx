import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Prisma",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hello! I am a dedicated and motivated student who is passionate about learning new things, exploring technology, and developing my skills. I enjoy challenging myself, discovering new ideas, and gaining knowledge through different experiences. I believe that learning is a continuous process, and every challenge is an opportunity to improve myself and become more confident in what I do. I always try my best to stay focused, responsible, and open to new opportunities that will help me grow both personally and academically.
          </p>
          <p>
            I have a growing interest in programming, web development, and other areas of technology. I enjoy learning how to create websites, understand how systems work, and turn ideas into meaningful projects. As someone who is still building my knowledge and experience, I am always willing to learn, explore, and improve my abilities. My goal is to become more skilled and knowledgeable in my chosen field, gain valuable experience, and create projects that reflect my creativity, dedication, and passion for technology.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}