
import { Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <h2 variant="h1" className="font-bold" color="blue-gray">
        {count}
      </h2>
      <h2 variant="h6" color="blue-gray" className="mt-1 font-medium">
        {title}
      </h2>
    </Card>
  );
}


export default StatsCard;
