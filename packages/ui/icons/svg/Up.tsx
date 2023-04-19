import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            fillRule="evenodd"
            d="M1.813 17.227a1 1 0 0 1-.04-1.414l9.45-10a1 1 0 0 1 1.487.037l8.55 10a1 1 0 0 1-1.52 1.3l-7.827-9.155-8.686 9.192a1 1 0 0 1-1.414.04Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUp);
const Memo = memo(ForwardRef);
export default Memo;
