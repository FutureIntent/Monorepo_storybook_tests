import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgGuestAvatar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        ref={ref}
        {...props}
    >
        <path
            d="M0 3.11111V24.8889C0 25.714 0.327777 26.5053 0.911223 27.0888C1.49467 27.6722 2.28599 28 3.11111 28H24.8889C26.6 28 28 26.6 28 24.8889V3.11111C28 1.4 26.6 0 24.8889 0H3.11111C2.28599 0 1.49467 0.327777 0.911223 0.911223C0.327777 1.49467 0 2.28599 0 3.11111ZM18.6667 9.33333C18.6667 11.9156 16.5822 14 14 14C11.4178 14 9.33333 11.9156 9.33333 9.33333C9.33333 6.75111 11.4178 4.66667 14 4.66667C16.5822 4.66667 18.6667 6.75111 18.6667 9.33333ZM4.66667 21.7778C4.66667 18.6667 10.8889 16.9556 14 16.9556C17.1111 16.9556 23.3333 18.6667 23.3333 21.7778V23.3333H4.66667V21.7778Z"
            fill="#A7ABCC"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGuestAvatar);
const Memo = memo(ForwardRef);
export default Memo;
