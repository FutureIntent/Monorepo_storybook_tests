import { cleanup, screen } from '@testing-library/react';
import Button from './Button';
import { renderWithTheme } from '../../utils/testUtils';

describe('<Button />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        expect.assertions(1);

        renderWithTheme(<Button>Test</Button>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
