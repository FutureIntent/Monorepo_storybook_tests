import {
    ChangeEvent,
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useState,
    MouseEvent,
} from 'react';
import Header from './Header';
import Panel from './Panel';
import { CollapsableContainer } from './Components';

const CollapsableItem = ({
    id,
    label = 'Testing label',
    isItemOpen,
    onChange,
    withSwitch = false,
    children,
    infoTooltip,
}: {
    id?: string;
    label: string;
    isItemOpen?: boolean;
    withSwitch?: boolean;
    onChange?: (id?: string) => void;
    children: ReactElement | ReactElement[];
    infoTooltip?: ReactElement;
}): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleCollapse = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        setIsOpen(!isOpen);

        if (typeof onChange === 'function') {
            onChange(id);
        }
    };

    const handleDisabled = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(!e.target.checked);
    };

    // If accordion is set to not keep open panels, we should close this panel when another one is opened
    useEffect(() => {
        if (isItemOpen !== undefined && isItemOpen !== isOpen) {
            setIsOpen(!isOpen);
        }
    }, [isItemOpen]);

    return (
        <CollapsableContainer>
            <Header
                label={label}
                isOpen={isOpen}
                withSwitch={withSwitch}
                infoTooltip={infoTooltip}
                handleCollapse={handleCollapse}
                setDisabled={handleDisabled}
            />
            <Panel isOpen={isOpen}>
                {!withSwitch
                    ? children
                    : Children.toArray(children).map((child) =>
                          cloneElement(child as ReactElement, {
                              isDisabled,
                              disabled: (child as ReactElement).props.disabled
                                  ? isDisabled
                                  : undefined,
                          }),
                      )}
            </Panel>
        </CollapsableContainer>
    );
};

export default CollapsableItem;
