import { ComponentMeta } from '@storybook/react';
import Avatar, { UserAvatarProps } from './Avatar';
import Box from '../Box';
import Typography from '../Typography';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AvatarImage from './avatar-ai-generated.jpg';

const Photo = ({ width, height, alt }: { width?: string; height?: string; alt?: string }) => (
    <img src={AvatarImage} alt={alt} style={{ width, height }} />
);

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        alt: {
            control: {
                type: 'text',
            },
            defaultValue: 'User avatar',
        },
        withPhoto: {
            control: {
                type: 'boolean',
            },
        },
    },
} as ComponentMeta<typeof Avatar>;

const sizes = ['sm', 'md', 'lg'] as const;

export const Basic = ({ withPhoto, ...args }: UserAvatarProps & { withPhoto: boolean }) => (
    <>
        {sizes.map((imgSize) => (
            <>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box m="auto">
                        <Avatar
                            photo={withPhoto ? <Photo /> : undefined}
                            size={imgSize}
                            variant="square"
                            {...args}
                        />
                    </Box>
                    <Box m="auto" ml="3rem">
                        <Avatar
                            photo={withPhoto ? <Photo /> : undefined}
                            size={imgSize}
                            variant="circle"
                            {...args}
                        />
                    </Box>
                </Box>
                <Typography variant="h3" color="greyDark" textAlign="center" mb="5rem">
                    {imgSize}
                </Typography>
            </>
        ))}
    </>
);
