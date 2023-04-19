import { ReactElement } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CollapsePanel } from './Components';

const Panel = ({
    children,
    isOpen,
}: {
    children: ReactElement | ReactElement[];
    isOpen: boolean;
}) => (
    <AnimatePresence initial={false}>
        {isOpen && (
            <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                    open: { opacity: 1, height: 'auto', overflow: 'unset' },
                    collapsed: { opacity: 0, height: 0, overflow: 'hidden' },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                <CollapsePanel>{children}</CollapsePanel>
            </motion.div>
        )}
    </AnimatePresence>
);

export default Panel;
