import './App.css'
import { motion } from "framer-motion";


import { useEffect, useState } from 'react'
import { Progress } from './components/UI/Progress/Progress.styled'
import ModalWindow from './components/UI/Modal/Modal';
import { Button } from './components/UI/Button/Button.styled';


import FormStartSteps from './components/Forms/FormStartSteps/FormStartSteps';
import FormAddSteps from './components/Forms/FormAddSteps/FormAddSteps';
import FormAddWeight from './components/Forms/FormAddWeight/FormAddWeight';
import { restartButton } from './help/restartButton';
import FormEditSteps from './components/Forms/FormEdit/FormEditSteps';

const App = () => {
    const [startSteps, setStartSteps] = useState(0)
    const [steps, setSteps] = useState(0)
    const [active, setActive] = useState(true)
    const [weight, setWeight] = useState(0)
    const [calories, setCalories] = useState(0)

    const [modalSteps, setModalSteps] = useState(false)
    const [modalStartSteps, setModalStartSteps] = useState(true)
    const [modalWeight, setModalWeight] = useState(false)
    const [startStepsEditModal, setStartStepsEditModal] = useState(false)

    useEffect(() => {
        restartButton(setActive);
        const interval = setInterval(restartButton, 60000)

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <ModalWindow modal={modalStartSteps} setModal={setModalStartSteps}>
                <FormStartSteps
                    setModalWeight={setModalWeight}
                    setStartSteps={setStartSteps}
                    setModalStartSteps={setModalStartSteps}
                />
            </ModalWindow>

            <ModalWindow modal={modalSteps} setModal={setModalSteps}>
                <FormAddSteps
                    weight={weight}
                    setCalories={setCalories}
                    setSteps={setSteps}
                    setModalSteps={setModalSteps}
                />
            </ModalWindow>

            <ModalWindow modal={modalWeight} setModal={setModalWeight}>
                <FormAddWeight
                    setWeight={setWeight}
                    setModalWeight={setModalWeight}
                />
            </ModalWindow>

            <ModalWindow modal={startStepsEditModal} setModal={setStartStepsEditModal}>
                <FormEditSteps setStartSteps={setStartSteps} setStartStepsEditModal={setStartStepsEditModal} />
            </ModalWindow>


            <div className='container'>
                <div className="link">
                    {/* <p>Steps</p> <p>Statistics</p> */}
                </div>
                <div className="main">
                    <h1 className='steps'>{steps}</h1>
                    <motion.p 
                        style={{cursor: "pointer"}}
                        whileHover={{ scale: 1.2, opacity: 0.5 }}
                        onClick={() => setStartStepsEditModal(true)}
                    >
                        steps for {startSteps}
                        </motion.p>
                    <Progress
                        startSteps={startSteps}
                        steps={steps}
                        value={steps}
                        min="0"
                        max={startSteps}
                    />
                    <p style={{ marginTop: 20, fontSize: 30, fontWeight: "bold" }}
                    >
                        Calories: <span style={{ color: "#FF8C00" }}>{calories}</span>
                    </p>
                </div>
                <Button
                    disabled={active}
                    style={{ marginTop: 50 }}
                    onClick={() => setModalSteps(true)}
                >
                    Add note for steps +
                </Button>
            </div>
        </>
    )
}

export default App
