import { ReactNode, ReactElement, useState, useEffect, useRef, useMemo } from 'react';

import ModalContext from './ModalContext';

interface ModalProviderProps {
    children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps): ReactElement => {
    const modalNode = useRef(null);
    const [stateModalNode, setStateModalNode] = useState<HTMLElement | null>(null);
    const [type, setType] = useState<string | null>(null);
    const [data, setData] = useState<any>();

    useEffect(() => {
        setStateModalNode(modalNode.current);
    }, [modalNode]);

    const value = useMemo(
        () => ({
            modalNode: stateModalNode,
            type,
            setType,
            data,
            setData,
        }),
        [data, type],
    );

    return (
        <ModalContext.Provider value={value}>
            {children}
            <div ref={modalNode} />
        </ModalContext.Provider>
    );
};
export default ModalProvider;
