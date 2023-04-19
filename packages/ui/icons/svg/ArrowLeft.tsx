import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m11.5 21.5 1.762-1.762-6.975-6.988H21.5v-2.5H6.287l6.988-6.975L11.5 1.5l-10 10 10 10Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
const Memo = memo(ForwardRef);
export default Memo;
