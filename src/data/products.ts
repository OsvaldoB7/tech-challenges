import { Product } from "../types/Product";

export const mockProducts: Product[] = [
    {
    id: "1",
    name: "Cash In - COB",
    description: "Receber pagamentos instantâneos via PIX",
    category: "Entrada de Caixa"
  },
  {
    id: "2",
    name: "Cash In - COBV",
    description: "Receber pagamentos instantâneos via PIX com variações",
    category: "Entrada de Caixa"
  },
  {
    id: "3",
    name: "Cash In - DUEDATE",
    description: "Receber pagamentos com data de vencimento específica",
    category: "Entrada de Caixa"
  },
  {
    id: "4",
    name: "Cash In - CHARGE",
    description: "Receber cobranças específicas",
    category: "Entrada de Caixa"
  },
  {
    id: "5",
    name: "Cash Out - PAYMENT",
    description: "Realize pagamentos",
    category: "Saída de Caixa"
  },
  {
    id: "6",
    name: "Maquininha de pagamento",
    description: "Cobre qualquer pessoa, em qualquer lugar, a qualquer hora",
    category: "Entrada de Caixa"
  },
];
