import Chart from 'react-google-charts';
import { GenerationMix } from '../../types/types';

interface Props {
    data: GenerationMix;
}

export const GenerationChartMixChart = ({ data }: Props) => {
    const rest = data.generationmix.map(item => ([item.fuel, item.perc]));

    return (
        <div>
            <h5>
                Generation mix from {data.from} to {data.to}
            </h5>
            <Chart
                chartType="PieChart"
                data={[
                    ["Fuel", "Percentage"],
                    ...rest
                ]}
                options={{}}
                height={"25rem"}
            />
        </div>
    );
}