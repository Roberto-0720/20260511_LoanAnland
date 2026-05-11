"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Filters {
  type: string;
  project: string;
  area: string;
  direction: string;
  bedrooms: string;
}

interface PropertyFilterProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  onReset: () => void;
  resultCount: number;
}

const filterOptions = {
  type: [
    { value: "", label: "Tất cả" },
    { value: "sale", label: "Mua bán" },
    { value: "rent", label: "Cho thuê" },
  ],
  project: [
    { value: "", label: "Tất cả dự án" },
    { value: "anland-nam-cuong", label: "Anland Nam Cường" },
    { value: "the-charm-an-hung", label: "The Charm An Hưng" },
  ],
  area: [
    { value: "", label: "Tất cả" },
    { value: "54", label: "54m²" },
    { value: "67", label: "67m²" },
    { value: "72", label: "72m²" },
    { value: "76", label: "76m²" },
    { value: "82", label: "82m²" },
    { value: "91", label: "91m²" },
    { value: "96", label: "96m²" },
  ],
  direction: [
    { value: "", label: "Tất cả" },
    { value: "Đông Nam", label: "Đông Nam" },
    { value: "Tây", label: "Tây" },
    { value: "Đông", label: "Đông" },
    { value: "Bắc", label: "Bắc" },
  ],
  bedrooms: [
    { value: "", label: "Tất cả" },
    { value: "2", label: "2 PN" },
    { value: "3", label: "3 PN" },
  ],
};

export default function PropertyFilter({
  filters,
  onFilterChange,
  onReset,
  resultCount,
}: PropertyFilterProps) {
  const hasFilters = Object.values(filters).some((v) => v !== "");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border p-5 md:p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-accent" />
          <h3 className="font-semibold text-primary">Bộ lọc</h3>
        </div>
        {hasFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-sm text-muted hover:text-red-500 transition-colors"
          >
            <X size={14} />
            Xóa lọc
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Type */}
        <div>
          <label className="block text-xs font-medium text-muted mb-1.5">
            Loại giao dịch
          </label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange("type", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2.5 text-sm 
                       bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                       transition-all outline-none"
          >
            {filterOptions.type.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Project */}
        <div>
          <label className="block text-xs font-medium text-muted mb-1.5">
            Dự án
          </label>
          <select
            value={filters.project}
            onChange={(e) => onFilterChange("project", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2.5 text-sm 
                       bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                       transition-all outline-none"
          >
            {filterOptions.project.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Area */}
        <div>
          <label className="block text-xs font-medium text-muted mb-1.5">
            Diện tích
          </label>
          <select
            value={filters.area}
            onChange={(e) => onFilterChange("area", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2.5 text-sm 
                       bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                       transition-all outline-none"
          >
            {filterOptions.area.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Direction */}
        <div>
          <label className="block text-xs font-medium text-muted mb-1.5">
            Hướng
          </label>
          <select
            value={filters.direction}
            onChange={(e) => onFilterChange("direction", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2.5 text-sm 
                       bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                       transition-all outline-none"
          >
            {filterOptions.direction.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-medium text-muted mb-1.5">
            Phòng ngủ
          </label>
          <select
            value={filters.bedrooms}
            onChange={(e) => onFilterChange("bedrooms", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2.5 text-sm 
                       bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                       transition-all outline-none"
          >
            {filterOptions.bedrooms.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm text-muted">
          Hiển thị{" "}
          <span className="font-semibold text-primary">{resultCount}</span> căn hộ
        </p>
      </div>
    </div>
  );
}
