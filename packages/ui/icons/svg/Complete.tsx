import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComplete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M14.429 6.837c.36-.45 1.05-.635 1.602-.225.549.407.595 1.126.245 1.636l-5.467 7.914-.028.029c-.082.085-.19.184-.32.264a.988.988 0 0 1-.52.16h-.043c-.379 0-.632-.208-.796-.379L5.836 12.84a1.175 1.175 0 0 1 0-1.645 1.114 1.114 0 0 1 1.635 0l2.318 2.41 4.628-6.754.012-.014Z"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21.5 11.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComplete);
const Memo = memo(ForwardRef);
export default Memo;
