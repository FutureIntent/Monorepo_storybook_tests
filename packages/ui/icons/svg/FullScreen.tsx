import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgFullScreen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.357 14.357H1.5V21.5h7.143v-2.857H4.357v-4.286ZM1.5 8.643h2.857V4.357h4.286V1.5H1.5v7.143Zm17.143 10h-4.286V21.5H21.5v-7.143h-2.857v4.286ZM14.357 1.5v2.857h4.286v4.286H21.5V1.5h-7.143Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFullScreen);
const Memo = memo(ForwardRef);
export default Memo;
