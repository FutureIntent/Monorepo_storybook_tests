import { forwardRef, Ref } from "react";
import { ShowPasswordInterface } from "../types/inputTypes";
import { IconWrapper } from "./iconIterator";
import Show from '../../../../icons/svg/Show';

const ShowPassword = forwardRef(({hideIcons, hasError, width, inputType, setInputType}: ShowPasswordInterface, ref: Ref<HTMLDivElement>) => {

    const handleShow = () => {
        switch(inputType){
            case 'password':
                setInputType('text');
                break;
            case 'text':
                setInputType('password');
                break;
            default:
                setInputType((prevState) => prevState);
        }
    }

    return (
        <IconWrapper hideIcons={hideIcons} hasError={!!hasError} ref={ref} onMouseDown={handleShow}>
            <Show width={(width <= 768) ? "25px" : "30px"} height={(width <= 768) ? "25px" : "30px"} />
        </IconWrapper>
    );
});    
   

    
   

export default ShowPassword;