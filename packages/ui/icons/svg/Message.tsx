import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgMessage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1.5 9.59a1 1 0 0 1 1 1v7.274a.818.818 0 0 0 .818.818h16.364a.819.819 0 0 0 .818-.818V10.59a1 1 0 1 1 2 0v7.273a2.818 2.818 0 0 1-2.818 2.818H3.318A2.818 2.818 0 0 1 .5 17.864V10.59a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.325 3.144a2.818 2.818 0 0 1 1.993-.826h16.364A2.818 2.818 0 0 1 22.5 5.136v1.819a1 1 0 0 1-.521.877l-10 5.455a1 1 0 0 1-.958 0l-10-5.455A1 1 0 0 1 .5 6.955V5.136c0-.747.297-1.464.825-1.992Zm1.993 1.174a.818.818 0 0 0-.818.818v1.225l9 4.909 9-4.91V5.137a.818.818 0 0 0-.818-.818H3.318Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMessage);
const Memo = memo(ForwardRef);
export default Memo;
