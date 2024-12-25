import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    showModal: boolean;
    setShowModal: (status: boolean) => void;
    heading: string
    children: ReactElement
}
function BasicModal({ showModal, setShowModal, heading, children }: IProps) {

    return showModal ? (
        <div
            className="fixed z-50 bg-black bg-opacity-40 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center"
        >

            <div className="bg-white rounded-lg p-4 w-[93%] h-[70%] overflow-y-auto overflow-x-hidden flex flex-col">
                <div>
                    <h1 className=" bg-white w-[95%] left-[10%] top-[15%] pb-[20px] pt-[30px] font-display font-bold text-3xl text-center">
                        {heading}
                    </h1>
                    <div className=" bg-indigo-50 rounded-full w-45 h-45 absolute top-[13%] z-400 left-[95%] cursor-pointer" onClick={() => setShowModal(false)}>
                        <FontAwesomeIcon size="2x" icon={faCircleXmark} />
                    </div>
                </div>
                <main>
                {children}
                 </main>
            </div>
        </div>
    ) : null
}

export default BasicModal
