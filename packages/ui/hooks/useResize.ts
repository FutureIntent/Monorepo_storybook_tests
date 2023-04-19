import { useEffect, useState } from 'react';

export interface WindowSizeInterface {
    width: number;
    height: number;
}

export const useResize = () => {
    const [size, setSize] = useState<WindowSizeInterface>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return size;
};
