import { Badge } from "@/components/ui/badge";

type badgeStatusProps = {
  variantType?:
    | "destructive"
    | "secondary"
    | "default"
    | "outline"
    | null
    | undefined;
  description?: string;
  addClass?: string;
};

export default function BadgeStatus({
  variantType = "default",
  description,
  addClass,
}: badgeStatusProps) {
  return (
    <Badge
      variant={variantType ? variantType : null}
      className={`mt-4 ml-[-5px] absolute px-1 py-0 text-[8px] ${
        addClass ? addClass : ""
      }`}
    >
      {description}
    </Badge>
  );
}
