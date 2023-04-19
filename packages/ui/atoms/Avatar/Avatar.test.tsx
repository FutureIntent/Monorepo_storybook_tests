import { cleanup } from '@testing-library/react';
import { renderWithTheme } from '../../utils/testUtils';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AvatarImage from './avatar-ai-generated.jpg';
import Avatar from './Avatar';

describe('<UserAvatar />', () => {
    afterEach(() => {
        cleanup();
    });
    const Photo = ({ width, height, alt }: { width?: string; height?: string; alt?: string }) => (
        <img src={AvatarImage} alt={alt} style={{ width, height }} />
    );

    it('should be rendered with picture inside img tag', () => {
        const component = renderWithTheme(<Avatar photo={<Photo />} />);
        expect(component.container.querySelector('img')).toBeInTheDocument();
    });

    it('should be rendered with avatar placeholder svg icon', () => {
        const component = renderWithTheme(<Avatar />);
        expect(component.container.querySelector('svg')).toBeInTheDocument();
    });
});
