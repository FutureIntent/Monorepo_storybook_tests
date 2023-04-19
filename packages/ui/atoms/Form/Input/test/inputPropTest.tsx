import { InputProps } from '../types/inputTypes';

const InputPropTest = (props: InputProps) => {
    const keys = Object.keys(props);
    keys.length = 0;

    return <div>{keys}</div>;
};

export default InputPropTest;
