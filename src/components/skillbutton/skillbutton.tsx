import { Button } from "@heroui/react";

interface SkillButtonProps {
  label?: string;
  href?: string;
  download?: string;
}

export default function SkillButton({ label, href, download }: SkillButtonProps) {
  if (href) {
    const handlePress = () => {
      const link = document.createElement("a");

      link.href = href;
      link.download = download ?? "";
      link.click();
    };

    return <Button onPress={handlePress}>{label}</Button>;
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
