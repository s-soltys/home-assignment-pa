import { useApiResult } from '../../hooks/useGenerationMix';
import Chart from 'react-google-charts';

export const GenerationChartMixChart = () => {
    const { data, isLoading, isLoaded } = useApiResult();

    console.log(data);

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
                    options={{ title: `Generation Mix from ${data.data.from} to ${data.data.to}` }}
                    width={"100%"}
                    height={"400px"}
                  />
                )
            }
        </>
    );
}