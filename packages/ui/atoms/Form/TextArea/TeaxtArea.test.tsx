import { fireEvent, render, screen } from '@testing-library/react';
import TextArea from './TextArea';
import colors from '../../../theme/configs/colors';
import { rgbToHex } from '../../../utils/helpers';

describe('text area is functional if', () => {
    it('renders', () => {
        render(<TextArea name="ZXC" id="ZXC" label="TestingZXC" />);
        const textArea = screen.getByLabelText('TestingZXC');

        expect(textArea).toBeInTheDocument();
    });

    it('changes style on focus and blur', () => {
        render(<TextArea name="ZXC" id="ZXC" label="TestingZXC" />);
        const textArea = screen.getByLabelText('TestingZXC');
        const areaContainer = screen.getByTestId('areaContainer');
        const label = screen.getByTestId('styledLabel');

        fireEvent.focus(textArea);

        expect(areaContainer.style.borderColor.toUpperCase()).toEqual(colors.blueBrand);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(colors.blueBrand);

        fireEvent.blur(textArea);

        expect(areaContainer.style.borderColor.toUpperCase()).toEqual(colors.grey);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(colors.greyDark);
    });
});
