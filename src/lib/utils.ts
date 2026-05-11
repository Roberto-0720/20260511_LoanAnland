export type PropertyType = "sale" | "rent";
export type FurnishedType = "full" | "basic" | "empty";
export type PropertyStatus = "available" | "deposited" | "sold";
export type ProjectSlug = "anland-nam-cuong" | "the-charm-an-hung";

export interface Property {
  id: string;
  title: string;
  project: ProjectSlug;
  projectName: string;
  type: PropertyType;
  area: number;
  floor: number | null;
  bedrooms: number;
  bathrooms: number;
  direction: string;
  view: string;
  furnished: FurnishedType;
  price: number;
  priceUnit: string;
  negotiable: boolean;
  description: string;
  images: string[];
  featured: boolean;
  status: PropertyStatus;
  postedAt: string;
}

/**
 * Format price in Vietnamese style
 * e.g., 5700000000 → "5,7 tỷ" or 12000000 → "12 triệu/tháng"
 */
export function formatPrice(price: number, type: PropertyType): string {
  if (type === "rent") {
    const millions = price / 1_000_000;
    return `${millions.toLocaleString("vi-VN")} triệu/tháng`;
  }

  if (price >= 1_000_000_000) {
    const billions = price / 1_000_000_000;
    // Round to 1 decimal
    const rounded = Math.round(billions * 10) / 10;
    const formatted = rounded % 1 === 0
      ? rounded.toFixed(0)
      : rounded.toFixed(1).replace(".", ",");
    return `${formatted} tỷ`;
  }

  return price.toLocaleString("vi-VN") + " đ";
}

/**
 * Format area with m² suffix
 */
export function formatArea(area: number): string {
  return `${area}m²`;
}

/**
 * Get furnished label in Vietnamese
 */
export function getFurnishedLabel(furnished: FurnishedType): string {
  const labels: Record<FurnishedType, string> = {
    full: "Nội thất đầy đủ",
    basic: "Nội thất cơ bản",
    empty: "Bàn giao thô",
  };
  return labels[furnished];
}

/**
 * Get status label and color class
 */
export function getStatusInfo(status: PropertyStatus): {
  label: string;
  colorClass: string;
} {
  const info: Record<PropertyStatus, { label: string; colorClass: string }> = {
    available: { label: "Còn trống", colorClass: "bg-emerald-500" },
    deposited: { label: "Đã cọc", colorClass: "bg-amber-500" },
    sold: { label: "Đã bán", colorClass: "bg-red-500" },
  };
  return info[status];
}

/**
 * Get type label
 */
export function getTypeLabel(type: PropertyType): string {
  return type === "sale" ? "Mua bán" : "Cho thuê";
}

/**
 * Generate Zalo message link for a property
 */
export function getZaloLink(property?: Property): string {
  const base = "https://zalo.me/0389980626";
  return base;
}

/**
 * Generate tel: link
 */
export function getPhoneLink(): string {
  return "tel:0389980626";
}

/**
 * Classnames helper
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
