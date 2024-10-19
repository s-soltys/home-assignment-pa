import { GenerationChartMixChart } from "./charts/generation/GenerationMixChart";

export default function Root(props) {
  return (
    <div className="bg-body-tertiary p-5 rounded">
      <h1>Dashboard</h1>
      <div>
        <h3>Generation Mix Chart</h3>
        <div>
          <GenerationChartMixChart />
        </div>
      </div>
    </div>
  );
}
