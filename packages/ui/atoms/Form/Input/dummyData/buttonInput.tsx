import { InputButtonInterface } from '../types/inputTypes';

const buttonInput: InputButtonInterface = {
    name: 'inputButton',
    text: 'Button +',
    handleAction: (name) => {
        name.trim();
    },
};

export default buttonInput;
