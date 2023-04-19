import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgProfile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.5 2.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm.82 6.665c1.328-.5 2.748-.756 4.18-.756 2.888 0 5.675 1.042 7.744 2.923 2.072 1.883 3.256 4.46 3.256 7.168a1 1 0 0 1-1 1h-20a1 1 0 0 1-1-1c0-2.709 1.184-5.285 3.256-7.168a11.12 11.12 0 0 1 3.565-2.167Zm4.18 1.244a9.876 9.876 0 0 0-3.474.628 9.121 9.121 0 0 0-2.924 1.775c-1.413 1.284-2.29 2.937-2.533 4.688h17.862c-.243-1.75-1.12-3.404-2.533-4.688-1.682-1.53-3.982-2.403-6.398-2.403Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProfile);
const Memo = memo(ForwardRef);
export default Memo;
