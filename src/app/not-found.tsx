import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <article>
      <div className="min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <section className="sm:flex">
          <Typography namespacePath="" text="404" variant="title" />
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <Typography
                namespacePath=""
                text="you're not supposed to be here"
                variant="title"
              />
              <Typography
                namespacePath=""
                text="let's take you home"
                variant="paragraph"
              />
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Button variant="default" size="lg" asChild>
                <Link href="/">🏠 click here</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
