import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgRequest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M14.834 11.5 11.5 8.167 8.167 11.5v-10h6.667v10Zm-2-4.828V3.5h-2.667v3.172L11.5 5.338l1.334 1.334Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.5 1.517a3.334 3.334 0 0 0-.333-.017H16.5v3.333h1.667v13.334H4.833V4.833H6.5V1.5H4.833A3.334 3.334 0 0 0 1.5 4.833v13.334A3.333 3.333 0 0 0 4.833 21.5h13.334a3.333 3.333 0 0 0 3.333-3.333V4.833a3.333 3.333 0 0 0-3-3.316Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRequest);
const Memo = memo(ForwardRef);
export default Memo;
