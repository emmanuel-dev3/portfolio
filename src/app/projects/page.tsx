import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Trust Rising Sun Limited",
      description: `A trusted name in the world of wine distribution.
With a passion for fine wines and a commitment to exceptional service, we strive to bring the finest selection of wines to retailers, restaurants, and wine enthusiasts alike.`,
      tags: ["PHP", "SQL", "HTML", "CSS"],
      link: "https://www.trustrisingsunltd.com/",
    },

    {
      title: "Hirst Painting",
      description:
        "The program generate color pallete from image and use the color to create a Hirst painting",
      tags: ["Python"],
      link: "https://github.com/emmanuel-dev3/hirst-painting",
    },
    {
      title: "Coffee Machine Project",
      description: "OOP In Coffe Machine Using Python",
      tags: ["Python"],
      link: "https://github.com/emmanuel-dev3/OOP-In-Coffee-Machine-Project",
    },
    {
      title: "QR Code Component Main",
      description: "Simple QR code component",
      tags: ["HTML", "CSS"],
      link: "https://github.com/emmanuel-dev3/qr-code-component-main",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.{" "}
            <strong>I will be uploading more cool projects soon...</strong>
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
