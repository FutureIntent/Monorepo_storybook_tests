import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import Checkbox from './Checkbox';
import { renderWithTheme } from '../../utils/testUtils';

describe('<Checkbox />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', async () => {
        renderWithTheme(<Checkbox name="test" label="Label for tests" />);

        expect(screen.getByText('Label for tests')).toBeInTheDocument();
    });

    it('should render and change state on click', async () => {
        const component = renderWithTheme(<Checkbox name="test" label="Label for tests" />);

        expect(component.container.querySelector('input')?.checked).toBeFalsy();

        fireEvent.click(screen.getByText('Label for tests'));

        await waitFor(() =>
            expect(component.container.querySelector('input')?.checked).toBeTruthy(),
        );
    });
});
