import { Card, CardHeader, CardContent } from "../ui/card";

interface Education {
  title: string;
  timePeriod: string;
  description: string;
}

interface EducationCardProps {
  education: Record<string, Education>;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card className="max-h-[50vh] overflow-auto ">
      <CardHeader></CardHeader>
      <CardContent className="space-y-10 text-sm">
        {Object.entries(education).map(([key, school]) => {
          const { description, timePeriod, title } = school;
          return (
            <article key={key} className="space-y-3 lowercase" >
              <section>
                <p className="font-semibold">{title} </p>
                <p>{timePeriod} </p>
              </section>
                <ul className="pl-4">
                  <li className="list-disc">{description}</li>
                </ul>
            </article>
          );
        })}
      </CardContent>
    </Card>
  );
};
