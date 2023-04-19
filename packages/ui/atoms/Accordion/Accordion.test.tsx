import { cleanup, screen } from '@testing-library/react';
import Accordion from './Accordion';
import { renderWithTheme } from '../../utils/testUtils';

describe('<Accordion />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        renderWithTheme(
            <Accordion withSwitch>
                <Accordion.Item label="test" id="test">
                    <div>test</div>
                </Accordion.Item>
            </Accordion>,
        );

        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
