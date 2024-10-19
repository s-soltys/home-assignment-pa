import { useGenerationMix } from './useGenerationMix';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { GenerationChartMixChart } from './GenerationMixChart';

export const GenerationChartMixChartContainer = () => {
    const { data, error, isLoaded } = useGenerationMix();

    if (isLoaded) {
        return <GenerationChartMixChart data={data.data} />;
    } else if (error) {
        return <p>Error loading data: {error}</p>;
    } else {
        return <LoadingSpinner />;
    };
}