import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { renderHook } from '@testing-library/react-hooks';
import Radio from './Radio';
import { renderWithFormProvider } from '../../utils/testUtils';
import RadioGroup from './RadioGroup';

describe('<Radio />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        const { result, unmount } = renderHook(() => useForm());

        renderWithFormProvider(
            <RadioGroup control={result.current.control} groupName="Testing">
                <Radio label="Option 1" value="option1" />
                <Radio label="Option 2" value="option2" />
                <Radio label="Option 3" value="option3" />
            </RadioGroup>,
        );
        unmount();

        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('should render and select item on click', async () => {
        const { result, unmount } = renderHook(() => useForm());

        const component = renderWithFormProvider(
            <RadioGroup control={result.current.control} groupName="Testing">
                <Radio label="Option 1" value="option1" />
                <Radio label="Option 2" value="option2" />
                <Radio label="Option 3" value="option3" />
            </RadioGroup>,
        );
        unmount();

        const option: HTMLInputElement | null =
            component.container.querySelector('input[value="option2"]');

        expect(option).toBeInTheDocument();

        if (option) {
            expect(option.checked).toBeFalsy();

            fireEvent.click(option);

            await waitFor(() => expect(option.checked).toBeTruthy());
        }
    });
});
