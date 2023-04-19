import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M17.214 8.167h-.952V6.262A4.764 4.764 0 0 0 11.5 1.5a4.764 4.764 0 0 0-4.762 4.762v1.905h-.952A1.91 1.91 0 0 0 3.88 10.07v9.524A1.91 1.91 0 0 0 5.786 21.5h11.428a1.91 1.91 0 0 0 1.905-1.905v-9.524a1.91 1.91 0 0 0-1.905-1.904ZM11.5 16.738a1.91 1.91 0 0 1-1.905-1.905A1.91 1.91 0 0 1 11.5 12.93a1.91 1.91 0 0 1 1.905 1.904 1.91 1.91 0 0 1-1.905 1.905Zm2.952-8.571H8.548V6.262A2.955 2.955 0 0 1 11.5 3.31a2.955 2.955 0 0 1 2.952 2.952v1.905Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLock);
const Memo = memo(ForwardRef);
export default Memo;
