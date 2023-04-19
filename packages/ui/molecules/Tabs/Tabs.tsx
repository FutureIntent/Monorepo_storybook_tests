import { motion } from 'framer-motion';
import styled from 'styled-components';
import Typography, { FONT_REGULAR } from '../../atoms/Typography/Typography';
import colors from '../../theme/configs/colors';
import { mediaQueriesReversed } from '../../theme/configs/mediaQueries';
import { TabsInterface, UnderlineInterface } from './types/tabsTypes';

export const TogglerContainer = styled.ul.attrs((props: any) => ({
    justifyContent: props.justifyContent,
}))`
    width: 100%;
    column-gap: 3%;
    display: grid;
    grid-auto-flow: column;
    justify-content: ${({ justifyContent }) => justifyContent};
    overflow-x: auto;
    padding: 0 5px;
    ${mediaQueriesReversed.tabletL} {
        column-gap: 4%;
    }
    ${mediaQueriesReversed.tablet} {
        column-gap: 5%;
    }
`;

export const TogglerElement = styled.li`
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;

export const IconViewWrapper = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
`;

export const CustomTypography = styled(Typography)`
    &:focus {
        background-color: none;
    }
    &:active {
        background-color: none;
    }
    &:hover {
        background-color: none;
    }
    ${mediaQueriesReversed.tablet} {
        font-size: 12px;
    }
`;

export const TogglerUnderline = styled.hr.attrs((props: UnderlineInterface) => ({
    underlineHeight: props.underlineHeight,
}))`
    background-color: ${colors.blueBrand};
    border: none;
    height: ${({ underlineHeight }) => underlineHeight};
    margin: 0;
    margin-top: 2px;
    width: 100%;

    ${mediaQueriesReversed.tablet} {
        margin-top: 4px;
    }
`;

const ViewToggler = ({
    view,
    setView,
    justifyContent = 'center',
    icons,
    textVariant = 'paragraph',
    iconSize = {
        width: '1em',
        height: '1em',
    },
    underlineHeight = '0.2rem',
}: TabsInterface) => {
    const viewKeys: string[] = Object.keys(view);

    const handleView = (event: any) => {
        const id = event.currentTarget.id.split('_')[1];
        const newView: any = {};

        viewKeys.forEach((item: string) => {
            if (id !== item) {
                newView[item as keyof object] = false;
                return;
            }
            newView[item as keyof object] = true;
        });

        setView(newView);
    };

    function decideColor(item: string): string {
        if (icons) {
            if (view[item as keyof object]) {
                return colors.blueBrand;
            }

            return colors.greyDark;
        }

        return colors.blackBrand;
    }

    const returnIconNode = (index: number, item: string): JSX.Element | null => {
        if (!icons) return null;
        const Node = icons[index];
        return (
            <Node
                width={iconSize.width}
                height={iconSize.height}
                style={{ marginRight: '0.5rem' }}
                data-testid={`icon_${item}`}
            />
        );
    };

    return (
        <TogglerContainer justifyContent={justifyContent}>
            {viewKeys.map((item, index) => (
                <TogglerElement key={`toggle_${item}`}>
                    <IconViewWrapper
                        onClick={handleView}
                        id={`toggle_${item}`}
                        style={{
                            color: view[item as keyof object] ? colors.blueBrand : colors.greyDark,
                        }}
                        data-testid={`view_${item}`}
                    >
                        {icons && icons[index] && returnIconNode(index, item)}
                        <CustomTypography
                            variant={textVariant}
                            color={{ color: decideColor(item) }}
                            fontWeight={FONT_REGULAR}
                            data-testid={`typography_${item}`}
                        >
                            {item.toUpperCase()}
                        </CustomTypography>
                    </IconViewWrapper>
                    {view[item as keyof object] && (
                        <TogglerUnderline
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            as={motion.hr}
                            data-testid={`underline_${item}`}
                            underlineHeight={underlineHeight}
                        />
                    )}
                </TogglerElement>
            ))}
        </TogglerContainer>
    );
};

export default ViewToggler;
