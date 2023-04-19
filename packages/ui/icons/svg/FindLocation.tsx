import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgFindLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.5 7.864A3.635 3.635 0 0 0 7.864 11.5a3.635 3.635 0 0 0 3.636 3.636 3.635 3.635 0 0 0 3.636-3.636A3.635 3.635 0 0 0 11.5 7.864Zm8.127 2.727a8.176 8.176 0 0 0-7.218-7.218V1.5h-1.818v1.873a8.176 8.176 0 0 0-7.218 7.218H1.5v1.818h1.873a8.176 8.176 0 0 0 7.218 7.218V21.5h1.818v-1.873a8.176 8.176 0 0 0 7.218-7.218H21.5v-1.818h-1.873ZM11.5 17.864A6.359 6.359 0 0 1 5.136 11.5 6.359 6.359 0 0 1 11.5 5.136a6.359 6.359 0 0 1 6.364 6.364 6.359 6.359 0 0 1-6.364 6.364Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFindLocation);
const Memo = memo(ForwardRef);
export default Memo;
