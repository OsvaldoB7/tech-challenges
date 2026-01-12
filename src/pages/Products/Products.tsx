import { Input } from "../../components/common/Inputs/Input";
import { Button } from "../../components/common/Buttons/Button";
import { ProductCard } from "../../components/ProductsList/ProductCard";
import { EmptyState } from "../../components/common/EmptyState/EmptyState";
import { useFilter } from "../../hooks/useFilter";
import { mockProducts } from "../../data/products";

interface ProductsProps {
  userEmail: string;
  onLogout: () => void;
}

export const Products = ({ userEmail, onLogout }: ProductsProps) => {
  const { filterText, setFilterText, filteredItems } = useFilter(
    mockProducts,
    "name"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Produtos Shipay</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700">{userEmail}</span>
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg  hover:bg-blue-700 transition-colors font-medium" onClick={onLogout}>
            Sair
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          {filterText && (
            <p className="mt-2 text-sm text-gray-600">
              Encontrados {filteredItems.length} de {mockProducts.length}{" "}
              produtos
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full">
              <EmptyState
                title="Nenhum produto encontrado"
                description={`Desculpe, não encontramos produtos para "${filterText}". Tente uma nova busca.`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
