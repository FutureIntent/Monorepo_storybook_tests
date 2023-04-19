import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import InfoTooltip from './InfoTooltip';
import { renderWithTheme } from '../../utils/testUtils';

describe('<InfoTooltip />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', async () => {
        const component = renderWithTheme(
            <InfoTooltip>
                <p>This is tooltip content</p>
            </InfoTooltip>,
        );

        const icon = component.container.querySelector('svg');
        expect(icon).toBeInTheDocument();

        if (icon) {
            fireEvent.click(icon);

            await waitFor(() => screen.findAllByText('This is tooltip content'));

            expect(screen.getByText('This is tooltip content')).toBeInTheDocument();
        } else {
            throw new Error('Icon not found');
        }
    });
});
