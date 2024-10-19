import Chart from 'react-google-charts';
import { useGenerationMix } from './useGenerationMix';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const GenerationChartMixChartContainer = () => {
    const { data, error, isLoaded } = useGenerationMix();

    if (isLoaded) {
        const rest = data && data.data.generationmix?.map(item => ([item.fuel, item.perc]));
        return (
            <Chart
                chartType="PieChart"
                data={[
                    ["Fuel", "Percentage"],
                    ...rest
                ]}
                options={{ title: `Generation Mix from ${data.data.from} to ${data.data.to}`, backgroundColor: "rgb(100,0,0,0)" }}
                height={"25rem"}
            />
        )
    } else if (error) {
        return <p>Error loading data: {error}</p>;
    } else {
        return <LoadingSpinner />;
    };
}