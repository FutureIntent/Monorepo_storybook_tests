import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from '@services/sanity/sanity';
import { ForwardedRef, MutableRefObject } from 'react';

export const isSSR = () => typeof window === 'undefined';

export const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
              result[3],
              16
          )}`
        : null;
};

export const urlFor = (source: SanityImageSource) =>
    imageUrlBuilder(client).image(source);

export const setComponentRefs = <T,>(
    ref: MutableRefObject<T | null>,
    forwardedRef: ForwardedRef<T>
) => (el: T) => {
    ref.current = el;
    if (typeof forwardedRef === 'function') forwardedRef(el);
    else if (forwardedRef) forwardedRef.current = el;
};
