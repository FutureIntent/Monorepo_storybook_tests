import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from '../../utils/testUtils';
import Switch from './Switch';

describe('<Switch />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        renderWithTheme(<Switch name="test" data-testid="switch-toggle" />);
        expect(screen.getByTestId('switch-toggle')).toBeInTheDocument();

        expect(screen.getByText('Off')).toBeVisible();
        expect(screen.getByText('On')).not.toBeVisible();
    });

    it('should render with checked props', () => {
        renderWithTheme(<Switch name="test" data-testid="switch-toggle" defaultChecked />);
        expect(screen.getByTestId('switch-toggle')).toBeInTheDocument();

        expect(screen.getByText('On')).toBeVisible();
        expect(screen.getByText('Off')).not.toBeVisible();
    });

    it('should render with default props and toggle on click', async () => {
        renderWithTheme(<Switch name="test" data-testid="switch-toggle" />);
        expect(screen.getByTestId('switch-toggle')).toBeInTheDocument();

        expect(screen.getByText('Off')).toBeVisible();
        expect(screen.getByText('On')).not.toBeVisible();

        await waitFor(() => fireEvent.click(screen.getByTestId('switch-toggle')));

        expect(screen.getByText('On')).toBeVisible();
        expect(screen.getByText('Off')).not.toBeVisible();
    });

    it('should render with disabled props', () => {
        const component = renderWithTheme(
            <Switch name="test" data-testid="switch-toggle" disabled />,
        );
        expect(screen.queryByTestId('switch-toggle')).toBeNull();
        expect(component.container.querySelector('svg')).toBeInTheDocument();

        expect(screen.queryByText('Off')).not.toBeInTheDocument();
        expect(screen.queryByText('On')).not.toBeInTheDocument();
    });
});
