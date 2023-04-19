import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Drawer from './Drawer';
import { handleAnimation, handleDragEnd } from './triggers/triggers';
import { DrawerInterface } from './types/drawerTypes';
import * as Settings from './framer/drawerSettings';
import * as Puller from './components/puller';
import * as Content from './components/content';

const defaultProps: DrawerInterface = {
    side: 'top',
    pullerHeight: 30,
    pullerColor: 'rgba(255, 0, 0, 0.8)',
    pullerRadius: 20,
    lineLength: 60,
    lineColor: 'rgba(242, 255, 0, 1)',
    isOpen: true,
};

jest.mock('./triggers/triggers', () => ({
    __esModule: true,
    handleAnimation: jest.fn(),
    handleDragEnd: jest.fn(),
}));

describe('Drawer is flawlessly functional if', () => {
    it('renders and provides appropriate props to children', () => {
        const puller = jest.spyOn(Puller, 'default');
        const content = jest.spyOn(Content, 'default');

        render(<Drawer {...defaultProps} />);

        // empty object is some sort of React's dark magic under the hood
        expect(puller).toHaveBeenCalledWith(
            {
                pullerHeight: 30,
                pullerColor: 'rgba(255, 0, 0, 0.8)',
                pullerRadius: 20,
                lineLength: 60,
                lineColor: 'rgba(242, 255, 0, 1)',
                side: 'top',
                dragControls: expect.any(Object),
            },
            {},
        );

        // empty object is some sort of React's dark magic under the hood
        expect(content).toHaveBeenCalledWith(
            {
                children: undefined,
                side: 'top',
            },
            {},
        );

        const drawerContainer = screen.getByTestId('drawerContainer');
        const pullerContainer = screen.getByTestId('pullerContainer');
        const contentContainer = screen.getByTestId('contentContainer');

        expect(drawerContainer).toBeInTheDocument();
        expect(pullerContainer).toBeInTheDocument();
        expect(contentContainer).toBeInTheDocument();
    });

    it('changes styles accordingly to props', () => {
        const drawerOpened = renderer.create(<Drawer {...defaultProps} isOpen />);

        const drawerOpenedTree = drawerOpened.toJSON();
        expect(drawerOpenedTree).toMatchSnapshot();

        const { rerender } = render(<Drawer {...defaultProps} isOpen={false} />);

        let container = screen.getByTestId('drawerContainer');
        let puller = screen.getByTestId('pullerContainer');
        let pullerLine = screen.getByTestId('lineContainer');
        let content = screen.getByTestId('contentContainer');

        expect(getComputedStyle(container).flexDirection).toEqual('column-reverse');
        expect(getComputedStyle(container).top).toEqual('-50vh');

        expect(getComputedStyle(puller).height).toEqual('30px');
        expect(getComputedStyle(puller).backgroundColor).toEqual(defaultProps.pullerColor);
        expect(getComputedStyle(puller).borderRadius).toEqual('0 0 20px 20px');

        expect(getComputedStyle(pullerLine).width).toEqual('60px');
        expect(getComputedStyle(pullerLine).height).toEqual('1%');
        expect(getComputedStyle(pullerLine).borderColor).toEqual(
            defaultProps.lineColor?.replaceAll(/\s{1,}/g, ''),
        );

        expect(getComputedStyle(content).width).toEqual('100vw');
        expect(getComputedStyle(content).height).toEqual('50vh');

        rerender(<Drawer {...defaultProps} isOpen={false} side="right" />);

        container = screen.getByTestId('drawerContainer');
        puller = screen.getByTestId('pullerContainer');
        pullerLine = screen.getByTestId('lineContainer');
        content = screen.getByTestId('contentContainer');

        expect(getComputedStyle(container).flexDirection).toEqual('row');
        expect(getComputedStyle(container).right).toEqual('-50vw');

        expect(getComputedStyle(puller).width).toEqual('30px');
        expect(getComputedStyle(puller).backgroundColor).toEqual(defaultProps.pullerColor);
        expect(getComputedStyle(puller).borderRadius).toEqual('20px 0 0 20px');

        expect(getComputedStyle(pullerLine).height).toEqual('60px');
        expect(getComputedStyle(pullerLine).width).toEqual('1%');
        expect(getComputedStyle(pullerLine).borderColor).toEqual(
            defaultProps.lineColor?.replaceAll(/\s{1,}/g, ''),
        );

        expect(getComputedStyle(content).width).toEqual('50vw');
        expect(getComputedStyle(content).height).toEqual('100vh');

        rerender(<Drawer {...defaultProps} isOpen={false} side="bottom" />);

        container = screen.getByTestId('drawerContainer');
        puller = screen.getByTestId('pullerContainer');
        pullerLine = screen.getByTestId('lineContainer');
        content = screen.getByTestId('contentContainer');

        expect(getComputedStyle(container).flexDirection).toEqual('column');
        expect(getComputedStyle(container).bottom).toEqual('-50vh');

        expect(getComputedStyle(puller).height).toEqual('30px');
        expect(getComputedStyle(puller).backgroundColor).toEqual(defaultProps.pullerColor);
        expect(getComputedStyle(puller).borderRadius).toEqual('20px 20px 0 0');

        expect(getComputedStyle(pullerLine).width).toEqual('60px');
        expect(getComputedStyle(pullerLine).height).toEqual('1%');
        expect(getComputedStyle(pullerLine).borderColor).toEqual(
            defaultProps.lineColor?.replaceAll(/\s{1,}/g, ''),
        );

        expect(getComputedStyle(content).width).toEqual('100vw');
        expect(getComputedStyle(content).height).toEqual('50vh');

        rerender(<Drawer {...defaultProps} isOpen={false} side="left" />);

        container = screen.getByTestId('drawerContainer');
        puller = screen.getByTestId('pullerContainer');
        pullerLine = screen.getByTestId('lineContainer');
        content = screen.getByTestId('contentContainer');

        expect(getComputedStyle(container).flexDirection).toEqual('row-reverse');
        expect(getComputedStyle(container).left).toEqual('-50vw');

        expect(getComputedStyle(puller).width).toEqual('30px');
        expect(getComputedStyle(puller).backgroundColor).toEqual(defaultProps.pullerColor);
        expect(getComputedStyle(puller).borderRadius).toEqual('0 20px 20px 0');

        expect(getComputedStyle(pullerLine).height).toEqual('60px');
        expect(getComputedStyle(pullerLine).width).toEqual('1%');
        expect(getComputedStyle(pullerLine).borderColor).toEqual(
            defaultProps.lineColor?.replaceAll(/\s{1,}/g, ''),
        );

        expect(getComputedStyle(content).width).toEqual('50vw');
        expect(getComputedStyle(content).height).toEqual('100vh');
    });

    it('calls triggers and functions with appropriate object attributes', () => {
        const dragConstraints = jest.spyOn(Settings, 'dragConstraints');
        const dragElastic = jest.spyOn(Settings, 'dragElastic');
        const initialPosition = jest.spyOn(Settings, 'initialPosition');

        const { rerender } = render(<Drawer {...defaultProps} />);

        expect(dragConstraints).toHaveReturnedWith({
            top: 0,
            bottom: window.innerHeight / 2,
        });

        expect(dragElastic).toHaveReturnedWith({
            top: 0.5,
        });

        expect(initialPosition).toHaveReturnedWith({
            y: window.innerHeight / 2,
        });

        rerender(<Drawer {...defaultProps} side="right" />);

        expect(dragConstraints).toHaveReturnedWith({
            left: -window.innerWidth / 2,
            right: 0,
        });

        expect(dragElastic).toHaveReturnedWith({
            right: 0.5,
        });

        expect(initialPosition).toHaveReturnedWith({
            x: -window.innerWidth / 2,
        });

        rerender(<Drawer {...defaultProps} side="bottom" />);

        expect(dragConstraints).toHaveReturnedWith({
            top: -window.innerHeight / 2,
            bottom: 0,
        });

        expect(dragElastic).toHaveReturnedWith({
            bottom: 0.5,
        });

        expect(initialPosition).toHaveReturnedWith({
            y: -window.innerHeight / 2,
        });

        rerender(<Drawer {...defaultProps} side="left" isOpen={false} />);

        expect(dragConstraints).toHaveReturnedWith({
            left: 0,
            right: window.innerWidth / 2,
        });

        expect(dragElastic).toHaveReturnedWith({
            left: 0.5,
        });

        expect(initialPosition).toHaveReturnedWith({
            x: window.innerWidth / 2,
        });

        expect(handleAnimation).toHaveBeenLastCalledWith({
            side: 'left',
            open: true,
            setOpen: expect.anything(),
            controls: expect.anything(),
        });

        const pullerContainer = screen.getByTestId('pullerContainer');

        pullerContainer.addEventListener('pointerup', () =>
            handleDragEnd({
                info: null,
                pullerHeight: 30,
                side: 'left',
                controls: null,
                setOpen: null,
            } as any),
        );

        fireEvent.pointerUp(pullerContainer);

        expect(handleDragEnd).toHaveBeenLastCalledWith({
            info: null,
            pullerHeight: 30,
            side: 'left',
            controls: null,
            setOpen: null,
        });
    });
});
