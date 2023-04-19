import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgChat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M3.5 3.5h16v12H4.67L3.5 16.67V3.5Zm0-2c-1.1 0-1.99.9-1.99 2l-.01 18 4-4h14c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-16Zm2 10h8v2h-8v-2Zm0-3h12v2h-12v-2Zm0-3h12v2h-12v-2Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChat);
const Memo = memo(ForwardRef);
export default Memo;
