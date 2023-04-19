import { cleanup, screen, waitFor } from '@testing-library/react';
import LanguageSelect from './LanguageSelect';
import { renderWithTheme } from '../../../utils/testUtils';
import { CountryIso } from '../../../atoms/CountryFlag/types';

describe('<LanguageSelect />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', async () => {
        expect.assertions(1);

        const component = renderWithTheme(
            <LanguageSelect name="test" label="test select" defaultValue={CountryIso.Italy} />,
        );

        await waitFor(() => component.getByText(CountryIso.Italy));

        expect(screen.getByText('Italy')).toBeInTheDocument();
    });
});
