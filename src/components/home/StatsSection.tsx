"use client";

import { Award, Home, Headphones, ShieldCheck } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const stats = [
  {
    icon: Award,
    number: "5+",
    label: "Năm kinh nghiệm",
    description: "Hoạt động chuyên nghiệp",
  },
  {
    icon: Home,
    number: "200+",
    label: "Căn đã giao dịch",
    description: "Mua bán & cho thuê thành công",
  },
  {
    icon: Headphones,
    number: "A–Z",
    label: "Hỗ trợ toàn diện",
    description: "Từ tư vấn đến thủ tục pháp lý",
  },
  {
    icon: ShieldCheck,
    number: "✓",
    label: "Chứng chỉ hành nghề",
    description: "Sở Xây dựng Hà Nội cấp",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={stat.label} delay={index * 0.1}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4 
                                group-hover:bg-accent/20 transition-colors duration-300">
                  <stat.icon size={26} className="text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-accent font-semibold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-white/50 text-xs hidden md:block">
                  {stat.description}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
