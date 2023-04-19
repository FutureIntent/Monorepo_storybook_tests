import { ReactElement } from 'react';
import { CountryIso, ICountryFlagProps } from './types';
import FlagIcon from './FlagIcon';

const CountryFlag = ({ iso }: ICountryFlagProps): ReactElement | null => {
    if (!iso || !Object.values(CountryIso).includes(iso)) return null;

    return <FlagIcon iso={iso} />;
};

export default CountryFlag;
