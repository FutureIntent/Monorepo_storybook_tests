import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.5 1.5 9.738 3.263l6.974 6.987H1.5v2.5h15.212l-6.987 6.975L11.5 21.5l10-10-10-10Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
const Memo = memo(ForwardRef);
export default Memo;
