import { Typography, TypographyPropCollection } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  const typographyTitleProps: TypographyPropCollection = {
    namespacePath: "notFound",
    variant: "title",
  };
  const typographyParagraphProps: TypographyPropCollection = {
    namespacePath: "notFound",
    variant: "paragraph",
  };
  return (
    <article>
      <div className="min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <section className="sm:flex">
          <Typography {...typographyTitleProps} text="code" />
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <Typography {...typographyTitleProps} text="title" />
              <Typography text="subtitle" {...typographyParagraphProps} />
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Button variant="default" size="lg" asChild>
                <Link href="/">
                  {<Typography text="button" {...typographyParagraphProps} />}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
