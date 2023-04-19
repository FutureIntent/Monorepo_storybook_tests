import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgGOogle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
                <path fill="#fff" d="M0 0h19.575v20H0z" transform="translate(1.713 1.5)" />
            </clipPath>
        </defs>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                d="M21.13 9.833h-9.417v3.75h5.4a4.65 4.65 0 0 1-2.008 2.984 6.033 6.033 0 0 1-9-3.167 5.834 5.834 0 0 1-.309-1.908 6.042 6.042 0 0 1 5.917-6.042 5.425 5.425 0 0 1 3.833 1.5l2.85-2.85a9.533 9.533 0 0 0-6.667-2.608 10 10 0 1 0 0 20 9.533 9.533 0 0 0 6.617-2.425 9.777 9.777 0 0 0 2.967-7.35 10.723 10.723 0 0 0-.183-1.884Z"
            />
        </g>
    </svg>
);
const ForwardRef = forwardRef(SvgGOogle);
const Memo = memo(ForwardRef);
export default Memo;