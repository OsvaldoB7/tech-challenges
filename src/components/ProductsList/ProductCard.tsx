import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <span className="text-base font-semibold text-blue-500">
        </span>
      </div>
      <p className="text-gray-600 my-2">{product.description}</p>
      <span className="text-sm text-gray-400">{product.category}</span>
    </div>
  );
};
