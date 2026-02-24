"use client";

import { useTranslations } from "next-intl";
import { Ban, Clock, ShieldCheck, Monitor } from "lucide-react";

const icons = [Ban, Clock, ShieldCheck, Monitor];

export default function ValuePropositions() {
  const t = useTranslations("valueProps");
  const items = t.raw("items") as { label: string; description: string }[];

  return (
    <section className="py-12 bg-white border-b border-gray-100 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i] ?? Ban;
            return (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-brand-orange/10 rounded-xl">
                  <Icon size={24} className="text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-coffee text-sm">
                  {item.label}
                </h3>
                <p className="text-xs text-brand-grey">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
