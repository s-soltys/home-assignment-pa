import { useGetApiResult } from "../../hooks/useApiResult";

const ApiHost = "https://api.carbonintensity.org.uk";

interface GenerationMix {
    from: string;
    to: string;
    generationmix: {
        fuel: string;
        perc: number;
    }[];
}

export function useGenerationMix() {
    return useGetApiResult<{ data: GenerationMix }>(`${ApiHost}/generation`);
}