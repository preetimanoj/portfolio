import { Metadata } from "next";
import Image from "next/image";
import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import preetiImg from "@/public/preeti-img.png";


export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-center items-center p-4 hidden lg:flex">
          {/* <GithubRedirectCard /> */}
          <Image
            src={preetiImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary border-8 border-primary w-[100%] max-w-md h-auto rounded-md p-2 m-4 md:mb-2"
            alt="Preeti Manoj - Full Stack Developer Portfolio"
            priority
          />
        </div>
      </div>
    </PageContainer>
  );
}
