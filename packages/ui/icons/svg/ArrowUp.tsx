import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m1.5 11.5 1.763 1.762 6.987-6.975V21.5h2.5V6.287l6.975 6.988L21.5 11.5l-10-10-10 10Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
const Memo = memo(ForwardRef);
export default Memo;
