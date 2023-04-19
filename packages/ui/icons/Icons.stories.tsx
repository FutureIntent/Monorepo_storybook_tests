import AddIcon from './svg/Add';
import AdjustIcon from './svg/Adjust';
import ArrowDownIcon from './svg/ArrowDown';
import ArrowLeftIcon from './svg/ArrowLeft';
import ArrowRightIcon from './svg/ArrowRight';
import ArrowUpIcon from './svg/ArrowUp';
import BusinessIcon from './svg/Business';
import CalendarIcon from './svg/Calendar';
import CartIcon from './svg/Cart';
import ChatIcon from './svg/Chat';
import CheckIcon from './svg/Check';
import CloseIcon from './svg/Close';
import CompleteIcon from './svg/Complete';
import CreditCardIcon from './svg/CreditCard';
import DeleteIcon from './svg/Delete';
import DownIcon from './svg/Down';
import DropdownIcon from './svg/Dropdown';
import EditIcon from './svg/Edit';
import FavsIcon from './svg/Favs';
import FindLocationIcon from './svg/FindLocation';
import FullScreenIcon from './svg/FullScreen';
import GOogleIcon from './svg/GOogle';
import GarageIcon from './svg/Garage';
import LockIcon from './svg/Lock';
import MenuIcon from './svg/Menu';
import MessageIcon from './svg/Message';
import PhoneIcon from './svg/Phone';
import ProfileIcon from './svg/Profile';
import RenewIcon from './svg/Renew';
import RequestIcon from './svg/Request';
import SaveIcon from './svg/Save';
import ShareIcon from './svg/Share';
import TooltipIcon from './svg/Tooltip';
import TrashCanIcon from './svg/TrashCan';
import UpIcon from './svg/Up';
import colors from '../theme/configs/colors';
import Typography from '../atoms/Typography';
import Location from "./svg/Location";
import Show from "./svg/Show";

export default {
    title: 'Icons',
    argTypes: {
        parentFontSize: {
            control: {
                type: 'number',
            },
            defaultValue: 20,
        },
        color: {
            control: {
                type: 'select',
            },
            defaultValue: 'blueBrand',
            options: Object.entries(colors).map(([name]) => name),
        },
    },
};

type Colors = keyof typeof colors;

export const AllIcons = ({ parentFontSize, color }: any) => (
    <div
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: parentFontSize,
            gap: '4.5rem',
            maxWidth: 800,
            color: colors[color as Colors],
        }}
    >
        <div style={{ textAlign: 'center' }}>
            <AddIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                AddIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <AdjustIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                AdjustIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <ArrowDownIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                ArrowDownIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <ArrowLeftIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                ArrowLeftIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <ArrowRightIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                ArrowRightIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <ArrowUpIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                ArrowUpIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <BusinessIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                BusinessIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <CalendarIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                CalendarIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <CartIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                CartIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <ChatIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                ChatIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <CheckIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                CheckIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <CloseIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                CloseIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <CompleteIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                CompleteIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <CreditCardIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                CreditCardIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <DeleteIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                DeleteIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <DownIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                DownIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <DropdownIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                DropdownIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <EditIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                EditIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <FavsIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                FavsIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <FindLocationIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                FindLocationIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <FullScreenIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                FullScreenIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <GOogleIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                GOogleIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <GarageIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                GarageIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <LockIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                LockIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <MenuIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                MenuIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <MessageIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                MessageIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <PhoneIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                PhoneIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <ProfileIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                ProfileIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <RenewIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                RenewIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <RequestIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                RequestIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <SaveIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                SaveIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <ShareIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                ShareIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <TooltipIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                TooltipIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <TrashCanIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                TrashCanIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <UpIcon />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                UpIcon
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <Location />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                Location
            </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
            <Show />
            <Typography variant="caption" color="blackBrand" textAlign="center">
                Show
            </Typography>
        </div>
    </div>
);
