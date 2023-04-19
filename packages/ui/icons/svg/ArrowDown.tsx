import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m21.5 11.5-1.762-1.762-6.988 6.974V1.5h-2.5v15.212L3.275 9.725 1.5 11.5l10 10 10-10Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
const Memo = memo(ForwardRef);
export default Memo;
