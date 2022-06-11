interface StatBlockProps {
  label: string;
  text: number | string;
}

export default function StatBlock({ label, text }: StatBlockProps) {
  return (
    <div className="flex-1 bg-gray-800 rounded-md p-4">
      <h5 className="text-md text-gray-500">{label}</h5>
      <h2 className="text-2xl text-amber-400">{text}</h2>
    </div>
  );
}
