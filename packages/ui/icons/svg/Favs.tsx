import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgFavs = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 23 23"
        role="img"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.188 3.652a5.124 5.124 0 0 1 5.79 1.203 5.625 5.625 0 0 1-.001 7.697l-.014.015-6.749 6.905a1 1 0 0 1-1.43 0l-6.75-6.907-.015-.016a5.632 5.632 0 0 1 0-7.694m11.212.372a3.125 3.125 0 0 0-2.283.99 3.466 3.466 0 0 0-.553.806 1 1 0 0 1-1.792 0 3.425 3.425 0 0 0-.553-.804 3.127 3.127 0 0 0-4.57.002 3.634 3.634 0 0 0-.008 4.955l6.027 6.167 6.026-6.166a3.625 3.625 0 0 0-.007-4.955l-.002-.002a3.125 3.125 0 0 0-2.285-.993ZM5.723 3.652a5.128 5.128 0 0 1 5.775 1.188 5.124 5.124 0 0 1 1.69-1.188m-7.465 0a5.13 5.13 0 0 0-1.705 1.203Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFavs);
const Memo = memo(ForwardRef);
export default Memo;
