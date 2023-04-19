import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1.5 17.334V21.5h4.166L17.953 9.213l-4.166-4.166L1.5 17.334ZM21.175 5.99a1.107 1.107 0 0 0 0-1.566l-2.6-2.6a1.107 1.107 0 0 0-1.566 0l-2.033 2.033 4.166 4.166 2.033-2.033Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEdit);
const Memo = memo(ForwardRef);
export default Memo;
