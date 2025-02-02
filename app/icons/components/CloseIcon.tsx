import { FC } from "react";

type CloseIconType = {
    color: string;
}

const CloseIcon: FC<CloseIconType> = ({color}) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8094 12.2316L1.61704 3.03921L3.03125 1.625L12.2236 10.8174L10.8094 12.2316Z" fill={color}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.65121 10.9344L10.8436 1.74204L12.2578 3.15625L3.06542 12.3486L1.65121 10.9344Z" fill={color}/>
        </svg>
    )
}

export default CloseIcon;