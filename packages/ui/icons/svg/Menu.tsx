import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 23 23"
        role="img"
        ref={ref}
        {...props}
    >
        <path fill="currentColor" d="M1.5 1.5h20v2h-20v-2Zm0 9h20v2h-20v-2Zm0 9h20v2h-20v-2Z" />
    </svg>
);
const ForwardRef = forwardRef(SvgMenu);
const Memo = memo(ForwardRef);
export default Memo;
