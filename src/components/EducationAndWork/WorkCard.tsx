import { Card, CardHeader, CardContent } from "../ui/card";
import Image from "next/image";
import { Typography, TypographyPropCollection } from "../Typography";
import { Badge } from "../ui/badge";


interface Job {
  company: string;
  location: string;
  role: string;
  logo: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  languages: string[];
  technologies: string[];
  testingLibraries?: string[]
}
 interface WorkCardProps{
  jobs: Record<string, Job>
 } 

export const WorkCard = ({jobs}: WorkCardProps) => {
  const typographyProps: TypographyPropCollection= {
    namespacePath: "educationAndWork",
    variant: "paragraph",
    className: "font-bold mb-2",
  };
  return (
    <Card className="max-h-[50vh] overflow-auto ">
      <CardHeader>
      </CardHeader>
      <CardContent className="space-y-10 text-sm">
        {Object.entries(jobs).map(([key, job]) => {
          const {
            company,
            endDate,
            location,
            logo,
            responsibilities,
            role,
            startDate,
            technologies,
          } = job;
          return (
            <article key={key} className="grid grid-cols-5 gap-4">
              <Image
                className={`hidden sm:block col-span-1 mt-1 ${
                  //i totally hate this but the company logos
                  //are not visible in dark mode and i dont want to change images
                  (key === "audi" || key === "accenture" || key === "marshmallow") && "drop-shadow-4xl" 
                }`}
                src={logo}
                width={100}
                height={100}
                alt={`${company} logo`}
              />
              <div className="col-span-5 sm:col-span-4 lowercase space-y-5">
                <section>
                  <p className="font-semibold">{role} </p>
                  <p className="font-semibold">{`${company} in ${location}`}</p>
                  <p>{`${startDate} - ${endDate}`}</p>
                </section>
                <section>
                  <Typography text="responsibilities" {...typographyProps} />
                  <ul className="pl-4">
                    {responsibilities.map((listItem, index) => (
                      <li className="list-disc" key={index}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  {technologies.length ? (
                    <>
                      <Typography text="techs" {...typographyProps} />
                      <div className="flex flex-wrap gap-x-3 gap-y-2">
                        {technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </>
                  ) : null}
                </section>
              </div>
            </article>
          );
        })}
      </CardContent>
    </Card>
  );
};
