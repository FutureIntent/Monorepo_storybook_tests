import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.5 1.5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm5 11h-10v-2h10v2Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDelete);
const Memo = memo(ForwardRef);
export default Memo;
