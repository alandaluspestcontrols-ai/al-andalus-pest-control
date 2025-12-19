"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className="border-2 border-[#e4d8a7] rounded-xl overflow-hidden transition-all hover:border-[#2a347c]"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#e4d8a7]/20 transition-colors text-left"
            >
              <span className="text-lg font-semibold text-[#2a347c] pr-4">
                {item.title}
              </span>
              <svg
                className={`w-6 h-6 text-[#2a347c] flex-shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4 bg-gray-50 text-gray-700">
                {typeof item.content === "string" ? (
                  <p className="leading-relaxed">{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

