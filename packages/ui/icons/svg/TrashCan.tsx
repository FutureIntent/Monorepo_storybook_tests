import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgTrashCan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        viewBox="0 0 14 18"
        fill="currentColor"
        width="1em"
        height="1em"
        role="img"
        ref={ref}
        {...props}
    >
        <g>
            <polygon points="10.5,1 9.5,0 4.5,0 3.5,1 0,1 0,3 14,3 14,1  " />
            <path d="M1,16c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4H1V16z M4.9,7.5L7,9.6l2.1-2.1l1.4,1.4L8.4,11l2.1,2.1l-1.4,1.4L7,12.4l-2.1,2.1 l-1.4-1.4L5.6,11L3.5,8.9L4.9,7.5z" />
        </g>
    </svg>
);
const ForwardRef = forwardRef(SvgTrashCan);
const Memo = memo(ForwardRef);
export default Memo;
