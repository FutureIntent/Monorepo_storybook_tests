import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgDropdown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 23 23"
        role="img"
        ref={ref}
        {...props}
    >
        <path fill="currentColor" d="M16.5 9h-10l5 5 5-5Z" />
    </svg>
);
const ForwardRef = forwardRef(SvgDropdown);
const Memo = memo(ForwardRef);
export default Memo;
