import { fireEvent, render, screen } from '@testing-library/react';
import PasswordStrengthBar from 'react-password-strength-bar';
import Input from './Input';
import * as trigger from './triggers/triggers';
import color from '../../../theme/configs/colors';
import { InputProps } from './types/inputTypes';
import { rgbToHex } from '../../../utils/helpers';
import InputPropTest from './test/inputPropTest';
import editIcons from './dummyData/editIcons';
import buttonInput from './dummyData/buttonInput';
import startIcons from './dummyData/startIcons';

describe('input field is functional if', () => {
    it('renders', () => {
        render(<Input name="test" id="test" label="Drip Check" onChange={() => {}} />);
        const inputField = screen.getByLabelText('Drip Check');

        expect(inputField).toBeInTheDocument();
    });

    it('changes border and label styles on focus and calls a focus trigger', () => {
        const mock = jest.spyOn(trigger, 'handleFocus');
        render(<Input name="test" id="test" label="Drip Check" onChange={() => {}} />);
        const border = screen.getByTestId('border');
        const label = screen.getByTestId('label');
        const input = screen.getByLabelText('Drip Check');

        fireEvent.focus(input);

        expect(border.style.borderColor.toUpperCase()).toEqual(color.blueBrand);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(color.blueBrand);
        expect(mock).toHaveBeenCalled();
    });

    it('returns regular styles of border and label on blur and calls a blur trigger', () => {
        const mock = jest.spyOn(trigger, 'handleBlur');
        render(<Input name="test" id="test" label="Drip Check" onChange={() => {}} />);
        const border = screen.getByTestId('border');
        const label = screen.getByTestId('label');
        const input = screen.getByLabelText('Drip Check');

        fireEvent.focus(input);
        fireEvent.blur(input);

        expect(border.style.borderColor.toUpperCase()).toEqual(color.grey);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(color.greyDark);
        expect(mock).toHaveBeenCalled();
    });

    it('changes border and label to warning style, renders an error span if error message is present and calls an error trigger', () => {
        const mock = jest.spyOn(trigger, 'handleError');
        render(
            <Input
                name="test"
                id="test"
                label="Drip Check"
                onChange={() => {}}
                errorMessage="Error text"
            />,
        );
        const border = screen.getByTestId('border');
        const label = screen.getByTestId('label');
        const span = screen.getByText('Error text');

        expect(border.style.borderColor.toUpperCase()).toEqual(color.redWarning);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(color.redWarning);
        expect(span.innerHTML).toEqual('Error text');
        expect(mock).toHaveBeenCalled();
    });

    it('changes focus style to warning style if input has received an error and error handler has been called 2 times (after each render)', () => {
        const focusMock = jest.spyOn(trigger, 'handleFocus');
        const errorMock = jest.spyOn(trigger, 'handleError');

        const { rerender } = render(
            <Input
                name="test"
                id="test"
                label="Drip Check"
                onChange={() => {}}
                errorMessage={null}
            />,
        );

        const border = screen.getByTestId('border');
        const label = screen.getByTestId('label');
        const input = screen.getByLabelText('Drip Check');

        fireEvent.focus(input);

        expect(border.style.borderColor.toUpperCase()).toEqual(color.blueBrand);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(color.blueBrand);
        expect(focusMock).toHaveBeenCalled();

        rerender(
            <Input
                name="test"
                id="test"
                label="Drip Check"
                onChange={() => {}}
                errorMessage="Error text"
            />,
        );

        const span = screen.getByText('Error text');

        expect(border.style.borderColor.toUpperCase()).toEqual(color.redWarning);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(color.redWarning);
        expect(span.innerHTML).toEqual('Error text');
        expect(errorMock).toHaveBeenCalledTimes(4);
    });

    it('disables input, changes style of border and label to default', () => {
        render(<Input name="test" id="test" label="Drip Check" onChange={() => {}} disabled />);
        const border = screen.getByTestId('border');
        const label = screen.getByTestId('label');
        const input: any = screen.getByLabelText('Drip Check');

        expect(border.style.borderColor.toUpperCase()).toEqual(color.grey);
        expect(rgbToHex(label.style.color).toUpperCase()).toEqual(color.greyDark);
        expect(input.disabled).toBeTruthy();
    });
    it('evaluates the input complexity if we define strength bar prop and renders it with propriate text and style, ', () => {
        const evaluator = jest.spyOn(PasswordStrengthBar.prototype, 'render');
        const { rerender } = render(
            <Input
                name="test"
                id="test"
                type="password"
                label="Drip Check"
                onChange={() => {}}
                value=""
                strengthBar
            />,
        );
        const scoreWord = screen.getByText('Short');
        const evaluatorContainer: any = screen.getByTestId('evaluatorContainer');

        expect(evaluator).toHaveBeenCalled();
        expect(scoreWord).toBeInTheDocument();
        expect(scoreWord.innerHTML).toEqual('Short');
        expect(rgbToHex(getComputedStyle(evaluatorContainer).color).toUpperCase()).toEqual(
            color.greyDark,
        );

        rerender(
            <Input
                name="test"
                id="test"
                type="password"
                label="Drip Check"
                onChange={() => {}}
                value="12345"
                strengthBar
            />,
        );
        expect(scoreWord.innerHTML).toEqual('Horrible');
        expect(rgbToHex(getComputedStyle(evaluatorContainer).color).toUpperCase()).toEqual(
            color.greyDark,
        );

        rerender(
            <Input
                name="test"
                id="test"
                type="password"
                label="Drip Check"
                onChange={() => {}}
                value="sadsdd"
                strengthBar
            />,
        );
        expect(scoreWord.innerHTML).toEqual('Bad');
        expect(rgbToHex(getComputedStyle(evaluatorContainer).color).toUpperCase()).toEqual(
            color.redWarning,
        );

        rerender(
            <Input
                name="test"
                id="test"
                type="password"
                label="Drip Check"
                onChange={() => {}}
                value="grdggdr"
                strengthBar
            />,
        );
        expect(scoreWord.innerHTML).toEqual('Average');
        expect(rgbToHex(getComputedStyle(evaluatorContainer).color).toUpperCase()).toEqual(
            color.caution,
        );

        rerender(
            <Input
                name="test"
                id="test"
                type="password"
                label="Drip Check"
                onChange={() => {}}
                value="grdggdr54"
                strengthBar
            />,
        );
        expect(scoreWord.innerHTML).toEqual('Good');
        expect(rgbToHex(getComputedStyle(evaluatorContainer).color).toUpperCase()).toEqual(
            color.blueBrand,
        );

        rerender(
            <Input
                name="test"
                id="test"
                type="password"
                label="Drip Check"
                onChange={() => {}}
                value="grdggdr5412"
                strengthBar
            />,
        );
        expect(scoreWord.innerHTML).toEqual('Excellent');
        expect(rgbToHex(getComputedStyle(evaluatorContainer).color).toUpperCase()).toEqual(
            color.success,
        );
    });

    it('renders icon and button and triggers action on click', () => {
        const iconAction = jest.spyOn(startIcons[0], 'handleAction').mockImplementation(() => {});
        const buttonAction = jest.spyOn(buttonInput, 'handleAction').mockImplementation(() => {});
        render(
            <Input
                name="test"
                id="test"
                startIcons={startIcons}
                onChange={() => {}}
                button={buttonInput}
            />,
        );

        const icon = screen.getByTestId('svgIcon');
        const button = screen.getByText('Button +');
        fireEvent.mouseDown(icon);
        fireEvent.click(button);

        expect(icon).toBeInTheDocument();
        expect(iconAction).toHaveBeenCalled();
        expect(button).toBeInTheDocument();
        expect(buttonAction).toBeCalled();
    });
});

const mock = jest.fn();
jest.mock('./test/inputPropTest', () => ({
    __esModule: true,
    default: (props: InputProps) => {
        mock({ ...props });
    },
}));

describe('if input field correctly receives and manages props', () => {
    it('doesnt cause conflicts neither with specified props nor input element props', () => {
        const testProps: InputProps = {
            label: 'derp',
            name: 'smthng',
            type: 'text',
            onChange: () => {},
            onTouchStart: () => {},
            title: 'tooltip',
            id: '123',
            errorMessage: 'rorrE',
            strengthBar: true,
            value: 'yes',
            hideIcons: true,
            endIcons: editIcons,
            button: buttonInput,
        };
        render(<InputPropTest {...testProps} />);

        expect(mock).toHaveBeenCalledWith({ ...testProps });
    });
});
