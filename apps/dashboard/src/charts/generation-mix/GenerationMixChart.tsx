import Chart from 'react-google-charts';
import { useGenerationMix } from './useGenerationMix';

export const GenerationChartMixChart = () => {
    const { data, isLoading, isLoaded } = useGenerationMix();

    const rest = data && data.data.generationmix?.map(item => ([item.fuel, item.perc]))

    return (
        <>
            {
                isLoading && <p>Loading...</p>
            }
            {
                isLoaded && (

                    <Chart
                    chartType="PieChart"
                    data={[
                        ["Fuel", "Percentage"],
                        ...rest
                      ]}
                    options={{ title: `Generation Mix from ${data.data.from} to ${data.data.to}`, backgroundColor: "rgb(100,0,0,0)" }}
                    width={"100%"}
                    height={"400px"}
                  />
                )
            }
        </>
    );
}