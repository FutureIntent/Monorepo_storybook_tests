import { Children, cloneElement, ReactElement, useState } from 'react';
import { ResponsiveValue } from 'styled-system';
import { AccordionContainer } from './Components';
import CollapsableItem from './CollapsableItem';

const Accordion = ({
    children,
    rowGap,
    keepOpen,
    withSwitch = false,
}: {
    children: ReactElement | ReactElement[];
    rowGap?: ResponsiveValue<number>;
    keepOpen?: boolean;
    withSwitch?: boolean;
}): ReactElement => {
    const [isOpen, setIsOpen] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        if (keepOpen || !id) return;

        setIsOpen((prev) => (prev === id ? null : id));
    };

    return (
        <AccordionContainer isOpen={!!isOpen} rowGap={rowGap}>
            {Children.toArray(children).map((child) => {
                if ((child as ReactElement).type === CollapsableItem) {
                    return cloneElement(child as ReactElement, {
                        key: (child as ReactElement).props.id,
                        id: !keepOpen ? (child as ReactElement).props.label : undefined,
                        ...(child as ReactElement).props,
                        isItemOpen: isOpen === (child as ReactElement).props.label,
                        onChange: handleToggle,
                        withSwitch,
                    });
                }

                return null;
            })}
        </AccordionContainer>
    );
};

Accordion.Item = CollapsableItem;

export default Accordion;
