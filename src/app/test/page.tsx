import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function TestPage() {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
      title: "The Dawn of Innovation",
      description: "Built 'ITrash Remover 1000', a robot for VSC 2020, equipped with DC motors, circuits, and Raspberry Pi.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      className: "col-span-4 row-span-5",
    },
    {
      title: "The Digital Revolution", // Title only
      description: "",
      header: null,
      icon: null,
      className: "col-span-6 row-span-2",
    },
    {
      title: "The Art of Design",
      description: "Created a portfolio website showcasing projects using ReactJS and TypeScript.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      className: "col-span-6 row-span-5",
    },
    {
      title: "Empowering Education", // Title only
      description: "",
      header: null,
      icon: null,
      className: "col-span-6 row-span-2",
    },
    {
      title: "The Power of Communication",
      description: "Founded 'CodiFriend Club', teaching computer science to underprivileged students in rural areas.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      className: "col-span-6 row-span-4",
    },
    {
      title: "The Pursuit of Knowledge", // Title only
      description: "",
      header: null,
      icon: null,
      className: "col-span-3 row-span-3",
    },
    {
      title: "The Joy of Creation",
      description: "Invented the 'Ping-Pong Ball Gun 1000', a cost-efficient device for solo table tennis practice.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      className: "col-span-5 row-span-5",
    },
    {
      title: "The Spirit of Adventure",
      description: "Organized swimming events to raise 300M VND for flood and landslide victims in Central Vietnam.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      className: "col-span-4 row-span-2",
    },
    {
      title: "Champion of E-Sports", // Title only
      description: "",
      header: null,
      icon: null,
      className: "col-span-3 row-span-2",
    },
    {
      title: "Hackathon Success",
      description: "Placed in the Top 6 at the VinUniversity Hackathon, showcasing innovative software solutions.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      className: "col-span-5 row-span-2",
    },
    {
      title: "Lighting Up Ideas",
      description: "Recycled broken TVs to create functional and aesthetic LED light panels.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      className: "col-span-4 row-span-2",
    },
    {
      title: "Bringing STEAM to Life",
      description: "Founded Phan Dinh Phung STEAM Club, teaching mechanical tools and coding to students.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      className: "col-span-4 row-span-3",
    },
    {
      title: "The Future of AI", // Title only
      description: "",
      header: null,
      icon: null,
      className: "col-span-3 row-span-1",
    },
    {
      title: "Fostering AI Growth",
      description: "Mentored Coding School Team members, teaching algorithms and competitive programming.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      className: "col-span-3 row-span-2",
    },
    {
      title: "Excellence in Programming", // Title only
      description: "",
      header: null,
      icon: null,
      className: "col-span-2 row-span-1",
    },
  ];
  
  