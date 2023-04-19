import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgBusiness = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m20.906 4.035-8.333-2.5a.834.834 0 0 0-1.073.798V6.5h1.667V3.453l6.666 2v14.38h-5V9A.833.833 0 0 0 14 8.167H5.667A.833.833 0 0 0 4.833 9v10.833H3.167V11.5h-.834a.834.834 0 0 0-.833.833v8.334a.833.833 0 0 0 .833.833h18.334a.834.834 0 0 0 .833-.833V4.833a.832.832 0 0 0-.594-.798ZM11.083 19h-2.5a.417.417 0 0 1-.416-.417v-.833a.417.417 0 0 1 .416-.417h2.5a.417.417 0 0 1 .417.417v.833a.416.416 0 0 1-.417.417Zm0-3.333h-2.5a.417.417 0 0 1-.416-.417v-.833A.417.417 0 0 1 8.583 14h2.5a.417.417 0 0 1 .417.417v.833a.417.417 0 0 1-.417.417Zm0-3.334h-2.5a.417.417 0 0 1-.416-.416v-.834a.417.417 0 0 1 .416-.416h2.5a.416.416 0 0 1 .417.416v.834a.417.417 0 0 1-.417.416Z"
        />
        <path
            fill="currentColor"
            d="M17.75 8.167h-.833a.417.417 0 0 0-.417.416v9.167c0 .23.186.417.417.417h.833c.23 0 .417-.187.417-.417V8.583a.417.417 0 0 0-.417-.416Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBusiness);
const Memo = memo(ForwardRef);
export default Memo;
