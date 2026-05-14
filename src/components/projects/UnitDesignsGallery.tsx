"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

interface UnitDesign {
  code: string;
  description?: string;
  image: string;
}

interface Props {
  imagesDir: string;
  unitDesigns: UnitDesign[];
}

export default function UnitDesignsGallery({ imagesDir, unitDesigns }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const total = unitDesigns.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % total)),
    [total]
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + total) % total)),
    [total]
  );

  // Keyboard navigation
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  // Prevent body scroll while open
  useEffect(() => {
    if (openIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [openIndex]);

  const activeUnit = openIndex !== null ? unitDesigns[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {unitDesigns.map((unit, i) => (
          <ScrollAnimation key={unit.code} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group w-full bg-white rounded-2xl overflow-hidden border border-border shadow-sm card-hover text-left cursor-zoom-in"
              aria-label={`Phóng to mặt bằng ${unit.code}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src={`${imagesDir}/${unit.image}`}
                  alt={`Mặt bằng căn ${unit.code}`}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-all duration-300 flex items-center justify-center">
                  <div
                    className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-primary font-medium text-sm shadow-lg
                               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ZoomIn size={16} />
                    Phóng to xem chi tiết
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-border">
                <span className="text-xs text-muted uppercase tracking-wider block mb-1">
                  Mã căn
                </span>
                <h3 className="text-primary font-bold text-lg md:text-xl mb-1">
                  {unit.code}
                </h3>
                {unit.description && (
                  <p className="text-muted text-sm">{unit.description}</p>
                )}
              </div>
            </button>
          </ScrollAnimation>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeUnit && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Mặt bằng căn ${activeUnit.code}`}
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 animate-fade-in"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-3 right-3 md:top-6 md:right-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
            aria-label="Đóng"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
              aria-label="Mặt bằng trước"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Next */}
          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
              aria-label="Mặt bằng sau"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Content */}
          <div
            className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-4 md:gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 w-full bg-white rounded-2xl overflow-hidden min-h-0">
              <Image
                src={`${imagesDir}/${activeUnit.image}`}
                alt={`Mặt bằng căn ${activeUnit.code}`}
                fill
                priority
                sizes="100vw"
                className="object-contain p-4 md:p-6"
              />
            </div>

            <div className="text-center flex-shrink-0">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                Mã căn · {openIndex + 1} / {total}
              </p>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-1">
                {activeUnit.code}
              </h3>
              {activeUnit.description && (
                <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto">
                  {activeUnit.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
