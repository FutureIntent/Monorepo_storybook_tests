import { cleanup, screen } from '@testing-library/react';

import Select from './Select';
import { renderWithTheme } from '../../utils/testUtils';

describe('<Select />', () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        expect.assertions(1);

        renderWithTheme(<Select name="test" label="test select" />);
        expect(screen.getByLabelText('test select')).toBeInTheDocument();
    });

    it('should render with options without crashing', () => {
        renderWithTheme(<Select name="test" label="test select" options={options} />);
        expect(screen.getByLabelText('test select')).toBeInTheDocument();
    });
});
