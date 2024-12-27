import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


interface IProps {
    showModal: boolean;
    setShowModal: (status: boolean) => void;
    heading: string;
    children: ReactElement;
    width?: string;
    height?: string;
    modalName?: string;
}

function PopUps({ showModal, setShowModal, heading, children, width = "auto", height = "auto", modalName = "parent popup" }: IProps) {
    const style = {
        position: 'absolute',
        top: '50%',
        marginTop:"45px",
        left: '50%',
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white', 
        border: '2px solid #ccc',
        borderRadius: '8px', // Optional: rounded corners
        boxShadow: 24,
        p: 1, // Padding inside the modal
    };

    const popUpClasses = twMerge(
        clsx(
            'absolute top-[50%] left-[50%]',
        )
    );

    return (
        <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby={modalName}
        >
            <Box sx={style}>
                <div className=" bg-indigo-50 rounded-full w-45 h-45 top-[-4%] absolute z-400 left-[98%] cursor-pointer" onClick={() => setShowModal(false)}>
                    <FontAwesomeIcon size="2x" icon={faCircleXmark} />
                </div>
                <h1 aria-label={`${modalName}-modal-heading`} className=" bg-white w-[95%] left-[10%] top-[15%] pb-[20px] pt-[10px] font-display font-bold text-3xl text-center">
                    {heading}
                </h1>
                <div aria-label={`${modalName}-modal-description`}>
                    {children}
                </div>
            </Box>
        </Modal>
    );
}

export default PopUps;
