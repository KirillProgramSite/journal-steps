import styled from "styled-components";
import { motion } from "framer-motion";

export const Modal = styled(motion.div)`
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalWrapper = styled.div`
    position: relative;
    
    padding: 10px 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */

    background-color: white;
    height: 300px;
    border-radius: 30px;
`

export const CloseModal = styled.p`
    position:absolute;
    top: 5%;
    right: 5%;


    font-size: 30px;
    color: grey;
    font-weight: bold;
    cursor: pointer;
`