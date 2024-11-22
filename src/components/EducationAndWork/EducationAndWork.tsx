import { Typography } from "../Typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WorkCard } from "./WorkCard";

export const EducationAndWork = () => {

  return (
    <section className="mt-12">
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
        <WorkCard/>
        </TabsContent>
        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription>
                text education
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};
