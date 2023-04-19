import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgCreditCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 23 23"
        role="img"
        ref={ref}
        {...props}
    >
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h20v14.769H0z" transform="translate(1.5 4.115)" />
            </clipPath>
        </defs>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                d="M3.734 4.115A2.245 2.245 0 0 0 1.5 6.35v10.302a2.245 2.245 0 0 0 2.234 2.234h15.538A2.24 2.24 0 0 0 21.5 16.65V6.349a2.24 2.24 0 0 0-2.228-2.234H3.734Zm0 1.25h15.538c.554 0 .978.43.978.984V7.6H2.75V6.35a.97.97 0 0 1 .984-.984ZM2.75 8.85h17.5v1.172H2.75V8.85Zm0 2.422h17.5v5.38a.964.964 0 0 1-.978.983H3.734a.97.97 0 0 1-.984-.983v-5.38Zm1.78 1.731a.626.626 0 0 0 .065 1.25h4.366a.625.625 0 1 0 0-1.25H4.596a.697.697 0 0 0-.065 0Zm.065 1.873a.625.625 0 1 0 0 1.25H6.46a.625.625 0 1 0 0-1.25H4.595Z"
            />
        </g>
    </svg>
);
const ForwardRef = forwardRef(SvgCreditCard);
const Memo = memo(ForwardRef);
export default Memo;
