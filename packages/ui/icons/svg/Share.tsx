import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M17.524 15.636c-.763 0-1.446.302-1.968.774l-7.158-4.167c.05-.231.09-.462.09-.703 0-.24-.04-.472-.09-.703l7.078-4.126a2.999 2.999 0 0 0 2.048.813 3.008 3.008 0 0 0 3.012-3.012A3.008 3.008 0 0 0 17.524 1.5a3.008 3.008 0 0 0-3.012 3.012c0 .241.04.472.09.703L7.524 9.34a2.999 2.999 0 0 0-2.048-.813 3.008 3.008 0 0 0-3.012 3.012 3.008 3.008 0 0 0 3.012 3.012c.793 0 1.506-.311 2.048-.813l7.149 4.177c-.05.21-.08.431-.08.652a2.935 2.935 0 0 0 2.931 2.932 2.935 2.935 0 0 0 2.932-2.932 2.935 2.935 0 0 0-2.932-2.932Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShare);
const Memo = memo(ForwardRef);
export default Memo;
