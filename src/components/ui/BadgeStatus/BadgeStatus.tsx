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
      className={`${addClass ? addClass : ""} mb-[-20px] text-[8px]`}
    >
      {description}
    </Badge>
  );
}
