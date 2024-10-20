import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GenerationChartMixChart } from './GenerationMixChart';
import { GenerationMix } from '../../types/types';

describe.skip('GenerationChartMixChart', () => {
    const mockData: GenerationMix = {
        from: '2023-01-01T00:00:00Z',
        to: '2023-01-01T01:00:00Z',
        generationmix: [
            { fuel: 'coal', perc: 30 },
            { fuel: 'gas', perc: 50 },
            { fuel: 'nuclear', perc: 20 },
        ],
    };

    it('renders the chart with correct title', () => {
        const { getByText } = render(<GenerationChartMixChart data={mockData} />);

        expect(getByText('Generation mix from 2023-01-01T00:00:00Z to 2023-01-01T01:00:00Z')).toBeInTheDocument();
    });

    it('renders the chart with correct data', () => {
        const { getByText } = render(<GenerationChartMixChart data={mockData} />);

        expect(getByText('coal')).toBeInTheDocument();
        expect(getByText('gas')).toBeInTheDocument();
        expect(getByText('nuclear')).toBeInTheDocument();
    });

    it('renders the chart with correct percentages', () => {
        const { getByText } = render(<GenerationChartMixChart data={mockData} />);

        expect(getByText('30')).toBeInTheDocument();
        expect(getByText('50')).toBeInTheDocument();
        expect(getByText('20')).toBeInTheDocument();
    });
});