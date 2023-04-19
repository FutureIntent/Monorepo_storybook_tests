import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M21.5 2.611C21.5 13.044 13.044 21.5 2.611 21.5 2 21.5 1.5 21 1.5 20.389V16.51c0-.611.5-1.111 1.111-1.111 1.378 0 2.722-.222 3.967-.633a.932.932 0 0 1 .344-.056c.29 0 .567.111.79.322l2.444 2.445a16.832 16.832 0 0 0 7.322-7.322L15.033 7.71a1.115 1.115 0 0 1-.277-1.133c.41-1.245.633-2.578.633-3.967 0-.611.5-1.111 1.111-1.111h3.889A1.116 1.116 0 0 1 21.5 2.611ZM6.611 17.078c-.944.266-1.911.433-2.889.5v1.655c1.467-.1 2.878-.389 4.222-.833l-1.333-1.322ZM17.567 3.722a13.687 13.687 0 0 1-.5 2.878L18.4 7.933a16.47 16.47 0 0 0 .844-4.21h-1.677Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPhone);
const Memo = memo(ForwardRef);
export default Memo;
