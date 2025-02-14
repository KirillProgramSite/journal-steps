import styled from "styled-components";
import { motion } from "framer-motion";



export const Button = styled(motion.button)`
    color: white;
    background-color: tomato;
    font-weight: bold;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 30px;

    &:disabled{
        background-color: grey;
        opacity: 0.5;
        cursor: no-drop;
    }

    @media(max-width: 430px){
        margin-top:10px;
    }
`