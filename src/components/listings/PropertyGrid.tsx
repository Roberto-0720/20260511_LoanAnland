import PropertyCard from "./PropertyCard";
import { Property } from "@/lib/utils";

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
          <span className="text-3xl">🏠</span>
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          Không tìm thấy căn hộ
        </h3>
        <p className="text-muted">
          Thử thay đổi bộ lọc để xem thêm kết quả
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
