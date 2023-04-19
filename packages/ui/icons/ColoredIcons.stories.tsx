import GuestAvatarIcon from './svgColored/GuestAvatar';
import Typography from '../atoms/Typography';

export default {
    title: 'Colored Icons',
    argTypes: {
        parentFontSize: {
            control: {
                type: 'number',
            },
            defaultValue: 20,
        },
    },
};

export const AllIcons = ({ parentFontSize }: any) => (
    <div
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: parentFontSize,
            gap: '4.5rem',
            maxWidth: 800,
        }}
    >
        <div style={{ textAlign: 'center' }}>
            <GuestAvatarIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                GuestAvatarIcon
            </Typography>
        </div>
    </div>
);
