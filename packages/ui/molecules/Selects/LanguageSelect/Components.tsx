import { ReactElement } from 'react';
import { OptionProps, SingleValueProps, components } from 'react-select';
import { SelectOption } from '../../../atoms/Select/types';
import CountryFlag from '../../../atoms/CountryFlag';
import Box from '../../../atoms/Box';
import { CountryIso } from '../../../atoms/CountryFlag/types';

export const CountryField = (data: SelectOption): ReactElement | null => {
    const { value: iso, label } = data;

    return (
        <Box display="flex" alignItems="center" gridGap={10}>
            <CountryFlag iso={iso as CountryIso} />
            {label}
        </Box>
    );
};

export const Option = (props: OptionProps<SelectOption, false>): ReactElement => {
    const { data } = props;

    return (
        <components.Option {...props}>
            <CountryField {...data} />
        </components.Option>
    );
};

export const SingleValue = (props: SingleValueProps<SelectOption>): ReactElement => {
    const { data } = props;

    return (
        <components.SingleValue {...props}>
            <CountryField {...data} />
        </components.SingleValue>
    );
};
