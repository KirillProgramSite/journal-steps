import { CloseModal, Modal, ModalWrapper } from "./Modal.styled";
import { AnimatePresence } from "framer-motion";

const ModalWindow = ({ children, modal, setModal }) => {
    return (
        <AnimatePresence>
            {modal && (
                <Modal
                    initial={{ opacity: 0 }}
                    animate={{ opacity: modal ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: modal ? "flex" : "none" }}
                    modal={modal}
                >
                    <ModalWrapper>
                        <CloseModal onClick={() => setModal(false)}>X</CloseModal>
                        {children}
                    </ModalWrapper>
                </Modal>
            )}
        </AnimatePresence>
    )
}

export default ModalWindow;