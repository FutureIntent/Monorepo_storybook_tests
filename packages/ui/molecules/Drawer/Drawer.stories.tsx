import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import { useResize } from '../../hooks/useResize';
import Typography from '../../atoms/Typography/Typography';
import Drawer from './Drawer';
import { DrawerInterface } from './types/drawerTypes';

export default {
    title: 'Drawer',
    component: Drawer,
    argTypes: {
        side: {
            name: 'Drawer side',
            options: ['top', 'right', 'bottom', 'left'],
            control: {
                type: 'radio',
            },
            defaultValue: 'bottom',
        },
        pullerHeight: {
            name: 'Puller height',
            control: {
                type: 'number',
            },
            defaultValue: 30,
        },
        pullerColor: {
            name: 'Puller color',
            control: {
                type: 'color',
            },
            defaultValue: 'rgba(255, 0, 0, 0.8)',
        },
        pullerRadius: {
            name: 'Puller radius',
            control: {
                type: 'number',
            },
            defaultValue: 20,
        },
        lineLength: {
            name: 'Line length',
            control: {
                type: 'number',
            },
            defaultValue: 60,
        },
        lineColor: {
            name: 'Line color',
            control: {
                type: 'color',
            },
            defaultValue: 'rgba(242, 255, 0, 1)',
        },
        isOpen: {
            name: 'Is open',
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        child: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Drawer>;

export const Basic: ComponentStory<typeof Drawer> = (props: DrawerInterface) => {
    const { width, height } = useResize();

    useEffect(() => {
        const root: HTMLElement | null = document.getElementById('root');

        if (root) root.style.padding = '0';

        return () => {
            if (root) root.style.padding = '1rem';
        };
    }, []);

    return (
        <div style={{ width: `${width}px`, height: `${height}px` }}>
            <Drawer {...props}>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur( 10px )',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography color="white">CONTENT</Typography>
                </div>
            </Drawer>
        </div>
    );
};
