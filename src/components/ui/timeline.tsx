import React from "react";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
}

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
  {data.map((item, index) => (
    <div key={index} className="mb-8 flex items-start">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full" />
        {index < data.length - 1 && (
          <div className="w-0.5 h-16 bg-gray-600 mt-2" />
        )}
      </div>

      <div className="ml-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {item.title}
        </h3>
        <div>{item.content}</div>
      </div>
    </div>
  ))}
</div>

  );
}
