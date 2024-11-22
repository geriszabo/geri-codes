import { Typography } from "@/components/Typography";

export default function AboutMePage() {
  return (
    <section>
      <div className="flex items-center mb-12">
        <Typography namespacePath="about" text="title" variant="title" />
        <span className="text-5xl animate-wiggle">👋🏻</span>
      </div>
      <article className="grid ">
        <Typography
          namespacePath="about"
          text="me"
          variant="paragraph"
        />
      </article>
      <br />
      <article className="flex items-end">
        <Typography
          namespacePath="about"
          text="hobby"
          variant="paragraph"
        />
        <span className="text-5xl">⛰️</span>
      </article>
    </section>
  );
}
