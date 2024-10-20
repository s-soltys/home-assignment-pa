import { useGetApiResult } from "../../hooks/useApiResult";
import { GenerationMix } from "../../types/types";

const ApiHost = "https://api.carbonintensity.org.uk";

export function useGenerationMix() {
  return useGetApiResult<{ data: GenerationMix }>(`${ApiHost}/generation`);
}
