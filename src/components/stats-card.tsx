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
      placeholder={undefined} 
      {...({} as any)}
    >
      <h2 className="font-bold text-4xl" color="blue-gray">
        {count}
      </h2>
      <h2 color="blue-gray" className="mt-1 font-medium lg:text-3xl text-2xl">
        {title}
      </h2>
    </Card>
  );
}

export default StatsCard;