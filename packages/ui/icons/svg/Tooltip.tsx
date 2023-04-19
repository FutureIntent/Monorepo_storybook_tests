import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgTooltip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.5 6.5h2v2h-2v-2Zm0 4h2v6h-2v-6Zm1-9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTooltip);
const Memo = memo(ForwardRef);
export default Memo;
