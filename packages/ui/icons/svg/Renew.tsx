import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgRenew = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12.93 2.928A8.572 8.572 0 0 0 4.356 11.5H1.5l3.81 3.81 3.81-3.81H6.261a6.662 6.662 0 0 1 6.667-6.667 6.662 6.662 0 0 1 6.667 6.667 6.662 6.662 0 0 1-10.534 5.429L7.71 18.3a8.571 8.571 0 1 0 5.22-15.372Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRenew);
const Memo = memo(ForwardRef);
export default Memo;
