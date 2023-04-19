import { cleanup, screen, waitFor } from '@testing-library/react';
import CountryFlag from './CountryFlag';
import { renderWithTheme } from '../../utils/testUtils';
import { CountryIso } from './types';

describe('<CountryFlag />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', async () => {
        const component = renderWithTheme(<CountryFlag iso={CountryIso.Latvia} />);

        await waitFor(() => component.getByText(CountryIso.Latvia));

        const icon = component.container.querySelector('svg');

        expect(icon).toBeInTheDocument();
        expect(screen.getByText('LV')).toBeInTheDocument();
    });
});
