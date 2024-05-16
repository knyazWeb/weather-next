import  { MapPin } from "lucide-react";
interface LocationProps {
  children: React.ReactNode;
}

export default function LocationCard({ children }: LocationProps) {
  return (
    <div className="flex flex-row gap-1.5 items-center rounded-full bg-white pr-5 pl-4 py-2 w-fit ">
      <div className="">
        <MapPin
          size={23}
          color="#000"
          strokeWidth={1}
        />
      </div>
      <div className="text-black leading-none text-sm font-normal">{children}</div>
    </div>
  );
}
