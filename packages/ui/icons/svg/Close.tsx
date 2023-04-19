import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m13.232 11.522 7.705-7.79c.52-.525.52-1.313 0-1.838-.52-.525-1.299-.525-1.818 0l-7.706 7.79-7.705-7.79c-.52-.525-1.299-.525-1.818 0a1.279 1.279 0 0 0 0 1.838l7.705 7.79-7.705 7.79a1.279 1.279 0 0 0 0 1.838c.26.263.606.35.952.35s.693-.087.952-.35l7.706-7.79 7.706 7.79c.26.263.606.35.952.35s.693-.087.952-.35c.52-.525.52-1.313 0-1.838l-7.878-7.79Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClose);
const Memo = memo(ForwardRef);
export default Memo;
