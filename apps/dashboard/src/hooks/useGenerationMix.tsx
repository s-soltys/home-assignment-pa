import React from "react";

const ApiHost = "https://api.carbonintensity.org.uk";

interface Results<T> {
    data?: T;
    error?: unknown;
    status?: number;
    isLoading: boolean;
    isLoaded: boolean;
}

interface GenerationMixResult {
    data: {
        from: string;
        to: string;
        generationmix: {
            fuel: string;
            perc: number;
        }[]
    }
}

export function useApiResult(): Results<GenerationMixResult> {
    const [state, setState] = React.useState<Results<GenerationMixResult>>({
        data: null,
        error: null,
        isLoading: false,
        isLoaded: false,
    });

    React.useEffect(() => {
        fetchGenerationMix().then();
    }, []);
    
    async function fetchGenerationMix() {
        setState(state => ({ ...state, isLoading: true }));

        try {
            const respose = await fetch(`${ApiHost}/generation`);
            
            if (respose.ok) {
                const result: GenerationMixResult = await respose.json();
                
                setState(state => ({ ...state, status: respose.status, data: result, isLoaded: true }));
            } else {
                setState(state => ({ ...state, status: respose.status, error: respose.statusText }))
            }
        } catch (error: unknown) {
            setState(state => ({ ...state, error: error as Error, isLoading: false }));
        } finally {
            setState(state => ({ ...state, isLoading: false }));
        }
    }

    return state;
}