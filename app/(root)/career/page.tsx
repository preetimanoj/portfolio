import { Metadata } from "next";

import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { careerExperiences } from "@/config/career";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.career.metadata.title} Career Journey | Preeti Manoj`,
  description: `${pagesConfig.career.metadata.description}Explore Preeti Manoj's professional journey in frontend development, from early projects to recent roles using React and .NET.`,
  keywords: [
   "Preeti Manoj portfolio",
    "frontend developer Canada",
    "React developer",
    "career timeline",
    "Next.js portfolio",
  ],
  alternates: {
    canonical: `${siteConfig.url}/career`,
  },
};

export default function CareerPage() {
  return (
    <PageContainer
      title={pagesConfig.career.title}
      description={pagesConfig.career.description}
    >
      <Timeline experiences={careerExperiences} />
    </PageContainer>
  );
}
