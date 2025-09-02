import { PieChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import "./style.css";
export default function Dashboard() {
  return (
    <>
    <div className="container">


      <div className="dashboard">
        <div className="bar">
          <h3>Categorias</h3>
          <BarChart
            xAxis={[
              {
                id: "barCategories",
                data: ["bar A", "bar B", "bar C"],
              },
            ]}
            series={[
              {
                data: [2, 5, 3],
              },
            ]}
            height={300}
            width={500}
          />
        </div>

        <div className="pie">
        <h3>Despesas</h3>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            height={300}
             width={300}
          />
        </div>
      </div>
    </div>
    </>
  );
}
