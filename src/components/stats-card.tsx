import { Card } from "@material-tailwind/react";

interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card 
      color="transparent" 
      shadow={false}
      placeholder={undefined} // Prop obrigatória no v3+
      onPointerEnterCapture={undefined} // Prop obrigatória no v3+
      onPointerLeaveCapture={undefined} // Prop obrigatória no v3+
    >
      <h2 className="font-bold" color="blue-gray">
        {count}
      </h2>
      <h2 color="blue-gray" className="mt-1 font-medium">
        {title}
      </h2>
    </Card>
  );
}

export default StatsCard;