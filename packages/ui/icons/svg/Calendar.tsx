import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 24 25"
        role="img"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            d="M20.727 2.682h-1.09V.5h-2.183v2.182H6.545V.5H4.364v2.182H3.273c-1.2 0-2.182.982-2.182 2.182v17.454c0 1.2.982 2.182 2.182 2.182h17.454c1.2 0 2.182-.982 2.182-2.182V4.864c0-1.2-.982-2.182-2.182-2.182Zm0 19.636H3.273V8.136h17.454v14.182Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
const Memo = memo(ForwardRef);
export default Memo;
