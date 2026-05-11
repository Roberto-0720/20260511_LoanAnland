"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient (replaces image for now) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/50" />

      {/* Content */}
      <div className="relative section-container py-32 md:py-40">
        <div className="max-w-3xl">
          <ScrollAnimation delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Chuyên khu Anland Nam Cường & The Charm An Hưng
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tìm căn hộ{" "}
              <span className="text-accent">hoàn hảo</span>
              <br />
              cho tổ ấm của bạn
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              <em>Chuyên tâm từng căn — An cư vững bước.</em> Đỗ Thị Loan — Chuyên gia
              bất động sản với hơn 5 năm kinh nghiệm tại khu vực Hà Đông.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/listings" className="btn-accent text-base px-8 py-4">
                Xem căn hộ
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://zalo.me/0389980626"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!text-white text-base px-8 py-4"
              >
                <MessageCircle size={20} />
                Nhắn Zalo tư vấn
              </a>
            </div>
          </ScrollAnimation>

          {/* Quick stats */}
          <ScrollAnimation delay={0.5}>
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
              {[
                { number: "5+", label: "Năm kinh nghiệm" },
                { number: "200+", label: "Căn đã giao dịch" },
                { number: "100%", label: "Hỗ trợ A–Z" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs">Cuộn xuống</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
