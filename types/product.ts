export const productCategories = [
  "Audio",
  "Computing",
  "Mobile",
  "Photography",
  "Smart Home",
] as const;
export const colors = [
  "Black",
  "white",
  "Gray",
  "Blue",
  "green",
  "Red",
  "yellow",
  "Silver",
  "red",

] as const;

export type ProductCategory = (typeof productCategories)[number];
export type Color = (typeof colors)[number];

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  color: Color;
  price: number;
  shortDescription: string;
  description: string;
  image: ProductImage;
  specifications: readonly ProductSpecification[];
  featured: boolean;
}

export type ProductImage =
  | "camera"
  | "charger"
  | "headphones"
  | "laptop"
  | "mouse"
  | "phone"
  | "speaker"
  | "ssd"
  | "thermostat";
