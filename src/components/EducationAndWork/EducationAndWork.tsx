import { Typography } from "../Typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkCard } from "./WorkCard";
import { EducationCard } from "./EducationCard";
import translation from "../../../messages/en.json";

export const EducationAndWork = () => {
  const { jobs, education } = translation.educationAndWork;
  return (
    <section className="mt-12 flex flex-col gap-4 mb-10">
      <Typography
        namespacePath="educationAndWork"
        variant="subtitle"
        text="title"
      />
      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="work">
            <Typography
              namespacePath="educationAndWork.tabs"
              text="work.title"
              variant="paragraph"
            />
          </TabsTrigger>
          <TabsTrigger value="education">
            <Typography
              namespacePath="educationAndWork.tabs"
              text="education.title"
              variant="paragraph"
            />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <WorkCard jobs={jobs} />
        </TabsContent>
        <TabsContent value="education">
          <EducationCard education={education} />
        </TabsContent>
      </Tabs>
    </section>
  );
};
