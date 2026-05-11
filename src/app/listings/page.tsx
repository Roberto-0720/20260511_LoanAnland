"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PropertyFilter from "@/components/listings/PropertyFilter";
import PropertyGrid from "@/components/listings/PropertyGrid";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import properties from "@/data/properties.json";
import { Property } from "@/lib/utils";

interface Filters {
  type: string;
  project: string;
  area: string;
  direction: string;
  bedrooms: string;
}

const defaultFilters: Filters = {
  type: "",
  project: "",
  area: "",
  direction: "",
  bedrooms: "",
};

export default function ListingsPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() => {
    return {
      ...defaultFilters,
      project: searchParams.get("project") || "",
      type: searchParams.get("type") || "",
    };
  });

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters(defaultFilters);
  };

  const filteredProperties = useMemo(() => {
    return (properties as Property[]).filter((p) => {
      if (filters.type && p.type !== filters.type) return false;
      if (filters.project && p.project !== filters.project) return false;
      if (filters.area && p.area !== Number(filters.area)) return false;
      if (filters.direction && p.direction !== filters.direction) return false;
      if (filters.bedrooms && p.bedrooms !== Number(filters.bedrooms))
        return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-background min-h-screen">
      <div className="section-container">
        {/* Page Header */}
        <ScrollAnimation>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Danh sách căn hộ
            </h1>
            <p className="text-muted">
              Khám phá các căn hộ tại Anland Nam Cường và The Charm An Hưng
            </p>
          </div>
        </ScrollAnimation>

        {/* Filters */}
        <ScrollAnimation delay={0.1}>
          <div className="mb-8">
            <PropertyFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
              resultCount={filteredProperties.length}
            />
          </div>
        </ScrollAnimation>

        {/* Property Grid */}
        <PropertyGrid properties={filteredProperties} />
      </div>
    </div>
  );
}
