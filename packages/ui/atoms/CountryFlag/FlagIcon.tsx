import Flags from 'country-flag-icons/react/3x2';
import styled from 'styled-components';
import { useRef } from 'react';
import { CountryIso, ICountryFlagProps } from './types';

const Wrap = styled.div`
    align-content: center;
    display: flex;
`;

const FlagIcon = ({ iso }: ICountryFlagProps) => {
    const Flag = Flags[iso as CountryIso];
    const ref = useRef<HTMLDivElement>(null);

    if (ref.current) {
        ref.current.querySelectorAll('.prefix__st1')?.forEach((path) => {
            path.classList.remove('prefix__st1');
        });
    }

    return (
        <Wrap ref={ref}>
            <Flag
                style={{
                    width: '1em',
                    height: '1em',
                    flexShrink: 0,
                }}
                title={iso}
            />
        </Wrap>
    );
};

export default FlagIcon;
