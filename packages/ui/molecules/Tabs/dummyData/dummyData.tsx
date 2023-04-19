import Typography from '../../../atoms/Typography/Typography';
import Calendar from '../../../icons/svg/Calendar';
import Garage from '../../../icons/svg/Garage';
import Phone from '../../../icons/svg/Phone';

export const tabsIcons = [Calendar, Garage, Phone];

const divStyle = { display: 'flex', justifyContent: 'center', paddingTop: '10px' };

export const Test1 = ({ width }: { width: number }) => (
    <div style={{ width: `calc(${width}px - 5rem)`, ...divStyle }}>
        <Typography>Test1</Typography>
    </div>
);

export const Test2 = ({ width }: { width: number }) => (
    <div style={{ width: `calc(${width}px - 5rem)`, ...divStyle }}>
        <Typography>Test2</Typography>
    </div>
);

export const Test3 = ({ width }: { width: number }) => (
    <div style={{ width: `calc(${width}px - 5rem)`, ...divStyle }}>
        <Typography>Test3</Typography>
    </div>
);
