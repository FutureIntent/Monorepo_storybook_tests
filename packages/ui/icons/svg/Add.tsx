import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.071 1.5a1 1 0 0 0-1 1v7.571H2.5a1 1 0 0 0-1 1v.857a1 1 0 0 0 1 1h7.571V20.5a1 1 0 0 0 1 1h.857a1 1 0 0 0 1-1v-7.572H20.5a1 1 0 0 0 1-1v-.857a1 1 0 0 0-1-1h-7.572V2.5a1 1 0 0 0-1-1h-.857Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAdd);
const Memo = memo(ForwardRef);
export default Memo;
