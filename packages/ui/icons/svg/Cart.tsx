import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgCart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.207.793A1 1 0 0 0 .793 2.207l2.374 2.374v5.95L.668 14.279a1 1 0 0 0 .832 1.554h20a1 1 0 1 0 0-2H3.369l1.333-2H17.5a1 1 0 0 0 .929-.628l2.667-6.667a1 1 0 0 0-.929-1.371H4.581L2.207.793Zm2.96 4.374v4.666h11.656l1.867-4.666H5.167ZM4.833 16.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm14.334-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCart);
const Memo = memo(ForwardRef);
export default Memo;
