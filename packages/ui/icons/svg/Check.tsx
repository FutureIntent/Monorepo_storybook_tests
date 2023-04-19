import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M20.966 2.526c-.61-.453-1.393-.272-1.829.272L9.208 17.289l-5.487-5.706c-.523-.543-1.306-.543-1.83 0a1.35 1.35 0 0 0 0 1.902l6.533 6.793c.262.272.523.453.871.453h.087c.349 0 .697-.272.959-.544L21.227 4.428c.435-.634.348-1.45-.262-1.902Z"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheck);
const Memo = memo(ForwardRef);
export default Memo;
