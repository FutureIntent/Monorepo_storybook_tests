import { cleanup, screen, waitFor } from '@testing-library/react';
import PhoneCodeSelect from './PhoneCodeSelect';
import { renderWithTheme } from '../../../utils/testUtils';

describe('<PhoneCodeSelect />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', async () => {
        const component = renderWithTheme(
            <PhoneCodeSelect name="test" label="test select" defaultValue="371" variant="full" />,
        );

        await waitFor(() => component.getByText('LV'));

        expect(screen.getByText('(+371) Latvia')).toBeInTheDocument();
    });
});
