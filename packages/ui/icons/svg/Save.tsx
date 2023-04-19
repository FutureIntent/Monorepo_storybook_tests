import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.492 2.492A3.388 3.388 0 0 1 4.888 1.5H15.29c.46 0 .902.183 1.227.508m0 0 4.474 4.475c.326.325.509.767.509 1.227v10.402a3.389 3.389 0 0 1-3.388 3.388H4.888A3.389 3.389 0 0 1 1.5 18.112V4.888c0-.898.357-1.76.992-2.396m17.214 5.276Zm-.024-.024v10.368a1.57 1.57 0 0 1-1.57 1.57H4.888a1.57 1.57 0 0 1-1.57-1.57V4.888a1.57 1.57 0 0 1 1.57-1.57h10.368l4.426 4.426Zm-4.45-4.45Zm-2.6 1.073c.247-.248.583-.388.934-.388h.827a1.322 1.322 0 0 1 1.322 1.323v3.305a1.322 1.322 0 0 1-1.322 1.323h-.827a1.322 1.322 0 0 1-1.322-1.323V5.302c0-.351.14-.687.387-.935Zm-6.008 8.042v3.967h9.752v-3.967H6.624Zm-1.43-1.43c.247-.249.583-.388.934-.388h10.744a1.322 1.322 0 0 1 1.322 1.322v4.959a1.322 1.322 0 0 1-1.322 1.322H6.128a1.322 1.322 0 0 1-1.322-1.322v-4.959c0-.35.14-.687.387-.935Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSave);
const Memo = memo(ForwardRef);
export default Memo;
