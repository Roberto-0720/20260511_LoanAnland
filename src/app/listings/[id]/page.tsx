import { notFound } from "next/navigation";
import { Metadata } from "next";
import PropertyDetail from "./PropertyDetail";
import properties from "@/data/properties.json";
import { Property } from "@/lib/utils";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return (properties as Property[]).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = (properties as Property[]).find((p) => p.id === params.id);
  if (!property) return {};

  return {
    title: `${property.title} — ${property.area}m²`,
    description: `${property.description} | LH: 0389980626`,
    openGraph: {
      title: `${property.title} — ${property.area}m² | LoanAnLand`,
      description: `${property.description} | LH: 0389980626`,
    },
  };
}

export default function PropertyPage({ params }: Props) {
  const property = (properties as Property[]).find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  const similarProperties = (properties as Property[])
    .filter(
      (p) =>
        p.id !== property.id &&
        p.project === property.project &&
        p.status === "available"
    )
    .slice(0, 3);

  return (
    <PropertyDetail property={property} similarProperties={similarProperties} />
  );
}
