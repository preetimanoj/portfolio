import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@preetimanoj",
    icon: Icons.gitHub,
    link: "https://github.com/preetimanoj",
  },
  {
    name: "LinkedIn",
    username: "Preeti Manoj",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/preetimanoj",
  },
  // {
  //   name: "Twitter",
  //   username: "@preetimanoj",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/preetimanoj",
  // },
  {
    name: "Gmail",
    username: "preetimanoj96",
    icon: Icons.gmail,
    link: "mailto:preetimanoj96@gmail.com",
  },
];
