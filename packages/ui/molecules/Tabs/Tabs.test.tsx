import { fireEvent, render, screen } from '@testing-library/react';
import { rgbToHex } from '../../utils/helpers';
import { tabsIcons } from './dummyData/dummyData';
import Tabs from './Tabs';
import colors from '../../theme/configs/colors';

describe('Tabs are flawlessly functional if', () => {
    it('renders', () => {
        render(
            <Tabs
                view={{
                    test1: true,
                    test2: false,
                }}
                setView={() => {}}
            />,
        );

        expect(screen.getByText('TEST1')).toBeInTheDocument();
        expect(screen.getByText('TEST2')).toBeInTheDocument();
    });

    it('render icons, change styles and draw underline relatively to selection', () => {
        const { rerender } = render(
            <Tabs
                view={{
                    test1: true,
                    test2: false,
                    test3: false,
                }}
                setView={() => {}}
                icons={tabsIcons}
            />,
        );

        const underline1 = screen.getByTestId('underline_test1');

        expect(screen.getByTestId('icon_test1')).toBeInTheDocument();
        expect(screen.getByTestId('icon_test2')).toBeInTheDocument();
        expect(screen.getByTestId('icon_test3')).toBeInTheDocument();

        expect(underline1).toBeInTheDocument();
        expect(rgbToHex(screen.getByTestId('view_test1').style.color).toUpperCase()).toEqual(
            colors.blueBrand,
        );
        expect(
            rgbToHex(getComputedStyle(screen.getByTestId('typography_test1')).color).toUpperCase(),
        ).toEqual(colors.blueBrand);

        rerender(
            <Tabs
                view={{
                    test1: false,
                    test2: true,
                    test3: false,
                }}
                setView={() => {}}
                icons={tabsIcons}
            />,
        );

        expect(underline1).not.toBeInTheDocument();
        expect(rgbToHex(screen.getByTestId('view_test1').style.color).toUpperCase()).toEqual(
            colors.greyDark,
        );
        expect(
            rgbToHex(getComputedStyle(screen.getByTestId('typography_test1')).color).toUpperCase(),
        ).toEqual(colors.greyDark);

        expect(screen.getByTestId('underline_test2')).toBeInTheDocument();
        expect(rgbToHex(screen.getByTestId('view_test2').style.color).toUpperCase()).toEqual(
            colors.blueBrand,
        );
        expect(
            rgbToHex(getComputedStyle(screen.getByTestId('typography_test2')).color).toUpperCase(),
        ).toEqual(colors.blueBrand);
    });

    it('trigger invoked by valid values and returns view object', () => {
        const setView = jest.fn((props: object) => props);

        render(
            <Tabs
                view={{
                    test1: true,
                    test2: false,
                }}
                setView={setView}
            />,
        );

        fireEvent.click(screen.getByTestId('view_test2'));

        expect(setView).toBeCalledWith({
            test1: false,
            test2: true,
        });

        expect(setView).toReturnWith({
            test1: false,
            test2: true,
        });
    });
});
