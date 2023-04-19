import { cleanup, screen } from '@testing-library/react';
import Tooltip from './Tooltip';
import { renderWithTheme } from '../../utils/testUtils';

describe('<Tooltip />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        renderWithTheme(
            <Tooltip text="some text">
                <p>trigger text</p>
            </Tooltip>,
        );
        expect(screen.getByText('trigger text')).toBeInTheDocument();
    });
});
