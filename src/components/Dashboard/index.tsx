import { PieChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import "./style.css";
export default function Dashboard() {

  const despesas = [
    { descricao: "Compras no supermercado", valor: 17, categoria: "Alimentação" },
    { descricao: "Troca de óleo do carro", valor: 15, categoria: "Transporte" },
    { descricao: "Reserva de emergência", valor: 20, categoria: "Emergência" },
    { descricao: "Assinatura da Netflix", valor: 20, categoria: "Lazer" },
    { descricao: "Jantar", valor: 20, categoria: "Alimentação" },
  ];

const categoriasAgrupadas = despesas.reduce<Record<string, number>>((acc, despesa) => {
  acc[despesa.categoria] = (acc[despesa.categoria] || 0) + despesa.valor;
  return acc;
}, {});

  const categorias = Object.keys(categoriasAgrupadas);
  const valores = Object.values(categoriasAgrupadas);

  return (
    <div className="dashboard">
      <div className="bar">
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: categorias,
            },
          ]}
          series={[
            {
              data: valores,
            },
          ]}
          height={300}
        />
        <h3>Categorias</h3>
      </div>

      <div className="pie">
        <PieChart
          series={[
            {
              data: despesas.map((d, index) => ({
                id: index,
                value: d.valor,
                label: d.descricao,
              })),
            },
          ]}
          height={300}
        />
        <h3>Despesas</h3>
      </div>
    </div>
  );
}