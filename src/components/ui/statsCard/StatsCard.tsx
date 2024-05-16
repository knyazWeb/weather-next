


interface StatsCardProps {
  children: React.ReactNode;
  header: string;
  bgColor: string;
}

export default function StatsCard({children, header, bgColor}: StatsCardProps) {
  return (
    <div className={`${bgColor ? bgColor : 'bg-white'}  text-black py-4 px-5 flex flex-col items-center justify-center text-sm h-fit leading-none rounded-lg gap-3`}>
      <div>{header}</div>
      <span className="font-sans">{children}</span>
    </div>
  );
}