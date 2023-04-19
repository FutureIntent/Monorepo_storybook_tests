import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgGarage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m11.5 4.222-8.752 3.5a1.047 1.047 0 0 0-.657.97v10.086h1.045v-8.393c0-1.107.917-2.091 2.091-2.091h12.546c1.174 0 2.09.984 2.09 2.09v8.394h1.046V8.693c0-.427-.26-.813-.655-.97l-8.753-3.5h-.002Zm.777-1.941c-.498-.2-1.057-.2-1.554 0l-8.75 3.5A3.137 3.137 0 0 0 0 8.693v10.346c0 1.014.82 1.83 1.83 1.83h1.568c1.009 0 1.83-.816 1.83-1.83V17.29h12.545v1.75c0 1.011.817 1.829 1.83 1.829h1.567c1.012 0 1.83-.818 1.83-1.83V8.693a3.136 3.136 0 0 0-1.97-2.912l-8.753-3.5Zm5.496 12.918v-1.394H5.227V15.2h12.546ZM5.227 11.714h12.546v-1.317l-.001-.001a.064.064 0 0 0-.006-.008l-.004-.003H5.238l-.004.003a.056.056 0 0 0-.006.008v1.318Z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGarage);
const Memo = memo(ForwardRef);
export default Memo;
