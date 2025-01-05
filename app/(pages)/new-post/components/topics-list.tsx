"use client";

import { cn } from "@/app/lib/utils";

import { Badge } from "@/app/components/ui/badge";

import { XIcon } from "lucide-react";

interface TopicsListProps {
  topics: string[];
  onRemoveTopic: (topic: string) => void;
}

const TopicsList = ({ topics, onRemoveTopic }: TopicsListProps) => {
  return (
    <ul className="flex items-center gap-2.5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {topics.map((topic) => (
        <li key={topic}>
          <Badge className={cn("gap-1.5 text-nowrap lowercase")}>
            {topic}
            <button onClick={() => onRemoveTopic(topic)}>
              <XIcon size={14} />
            </button>
          </Badge>
        </li>
      ))}
    </ul>
  );
};

export default TopicsList;
