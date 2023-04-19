import { ReactElement } from 'react';
import Select from '../../../atoms/Select';
import { Option, SingleValue } from './Components';
import { CountryIso, ILanguageSelectProps } from '../../../atoms/CountryFlag/types';

const LanguageSelect = ({
    label,
    name,
    defaultValue,
    ...rest
}: ILanguageSelectProps): ReactElement => {
    const options = Object.entries(CountryIso).map(([key, value]) => ({
        label: key.replace(/([A-Z])/g, ' $1'),
        value,
    }));

    return (
        <Select
            name={name}
            label={label ?? 'Select language'}
            options={options}
            defaultValue={options.find((option) => option.value === defaultValue)}
            components={{
                Option,
                SingleValue,
            }}
            {...rest}
        />
    );
};

export default LanguageSelect;
