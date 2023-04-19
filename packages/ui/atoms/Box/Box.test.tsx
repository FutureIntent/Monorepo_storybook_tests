import { cleanup, screen } from '@testing-library/react';

import Box from './Box';
import { renderWithTheme } from '../../utils/testUtils';

describe('<Box />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render without crashing', () => {
        expect.assertions(1);

        renderWithTheme(<Box>Test</Box>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
