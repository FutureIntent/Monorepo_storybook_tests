import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import { variantMap } from '../../atoms/Typography/Typography';
import { tabsIcons, Test1, Test2, Test3 } from './dummyData/dummyData';
import Tabs from './Tabs';
import { TabsInterface, TabsViewType } from './types/tabsTypes';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        justifyContent: {
            name: 'Justify content',
            options: [
                'flex-start',
                'center',
                'flex-end',
                'space-evenly',
                'space-around',
                'space-between',
            ],
            control: {
                type: 'select',
            },
            defaultValue: 'center',
        },
        textVariant: {
            name: 'Text variant',
            options: Object.keys(variantMap),
            control: {
                type: 'select',
            },
            defaultValue: 'paragraph',
        },
        iconSize: {
            name: 'Icon size',
            control: {
                type: 'object',
            },
            defaultValue: {
                width: '1em',
                height: '1em',
            },
        },
        underlineHeight: {
            name: 'Underline height',
            control: {
                type: 'text',
            },
            defaultValue: '0.2rem',
        },
    },
} as ComponentMeta<typeof Tabs>;

const components: TabsViewType = {
    test1: true,
    test2: false,
    test3: false,
};

export const Basic: ComponentStory<typeof Tabs> = ({ ...props }: TabsInterface) => {
    const [view, setView] = useState<TabsViewType>(components);
    const [width, setWidth] = useState<number>(window.innerWidth);

    const resize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div style={{ width: `calc(${width}px - 5rem` }}>
            <Tabs {...props} view={view} setView={setView} />
            {view.test1 && <Test1 width={width} />}
            {view.test2 && <Test2 width={width} />}
            {view.test3 && <Test3 width={width} />}
        </div>
    );
};

export const BasicIcon: ComponentStory<typeof Tabs> = ({ ...props }: TabsInterface) => {
    const [view, setView] = useState<TabsViewType>(components);
    const [width, setWidth] = useState<number>(window.innerWidth);

    const icons = tabsIcons;

    const resize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div style={{ width: `calc(${width}px - 5rem` }}>
            <Tabs {...props} view={view} setView={setView} icons={icons} />
            {view.test1 && <Test1 width={width} />}
            {view.test2 && <Test2 width={width} />}
            {view.test3 && <Test3 width={width} />}
        </div>
    );
};
