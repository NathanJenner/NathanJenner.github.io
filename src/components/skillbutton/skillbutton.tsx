import { Button } from "@heroui/react";

interface SkillButtonProps {
  label?: string;
  href?: string;
  download?: string;
}

export default function SkillButton({ label, href, download }: SkillButtonProps) {
  if (href) {
    return (
      <Button as="a" download={download} href={href}>
        {label}
      </Button>
    );
  }

  const list = [
    { label: "C#" },
    { label: "TypeScript" },
    { label: ".NET" },
    { label: "JavaScript" },
    { label: "React" },
    { label: "GitHub" },
    { label: "SDLC" },
    { label: "SQL" },
    { label: "Node.js" },
    { label: "Unit Testing" },
    { label: "APIs" },
    { label: "Azure" },



  ];

  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Button key={index} isDisabled>
          {item.label}
        </Button>
      ))}
    </div>
  );
}
