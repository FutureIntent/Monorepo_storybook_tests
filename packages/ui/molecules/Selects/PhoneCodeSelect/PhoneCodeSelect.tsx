import { ReactElement } from 'react';
import Select from '../../../atoms/Select';
import { SelectProps } from '../../../atoms/Select/types';
import dialCodes from '../../../utils/countriesDialCodes';
import { Option, SingleValue } from './Components';

export interface PhoneCodeSelectProps extends SelectProps {
    variant?: 'full' | 'small' | 'onlyCode';
}

const PhoneCodeSelect = ({
    label,
    name,
    defaultValue,
    variant = 'full',
    ...rest
}: PhoneCodeSelectProps): ReactElement => {
    const options = dialCodes.map((code) => ({
        label: variant !== 'full' ? `${code.dialCode}` : `(${code.dialCode}) ${code.name}`,
        value: code.dialCode.replace('+', ''),
        item: {
            iso: code.isoCode,
            withFlag: variant !== 'onlyCode',
        },
    }));

    return (
        <div>
            <div>
                <Select
                    options={options}
                    name={name}
                    isSearchable
                    label={label}
                    defaultValue={options.find((option) => option.value === defaultValue)}
                    components={{
                        Option,
                        SingleValue,
                    }}
                    {...rest}
                />
            </div>
        </div>
    );
};

export default PhoneCodeSelect;
