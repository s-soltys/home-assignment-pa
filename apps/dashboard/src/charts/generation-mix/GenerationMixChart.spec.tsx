import React from 'react';
import { render } from '@testing-library/react';
import { GenerationChartMixChart } from './GenerationMixChart';
import { GenerationMix } from '../../types/types';
import '@testing-library/jest-dom/extend-expect';

describe('GenerationChartMixChart', () => {
    const mockData: GenerationMix = {
        from: '2023-01-01',
        to: '2023-01-02',
        generationmix: [
            { fuel: 'Coal', perc: 30 },
            { fuel: 'Gas', perc: 50 },
            { fuel: 'Nuclear', perc: 20 },
        ],
    };

    it('renders the chart with correct data', () => {
        const { getByText } = render(<GenerationChartMixChart data={mockData} />);

        expect(getByText('Generation mix from 2023-01-01 to 2023-01-02')).toBeInTheDocument();
        expect(getByText('Coal')).toBeInTheDocument();
        expect(getByText('Gas')).toBeInTheDocument();
        expect(getByText('Nuclear')).toBeInTheDocument();
    });

    it('renders the chart with correct percentages', () => {
        const { getByText } = render(<GenerationChartMixChart data={mockData} />);

        expect(getByText('30')).toBeInTheDocument();
        expect(getByText('50')).toBeInTheDocument();
        expect(getByText('20')).toBeInTheDocument();
    });
});