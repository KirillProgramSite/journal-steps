import './App.css'

import { useEffect, useState } from 'react'
import { restartButton } from './help/restartButton';
import Modals from './components/Modals/Modals';
import StepTracker from './components/StepTracker/StepTracker';

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
            <Modals
                modalStartSteps={modalStartSteps} setModalStartSteps={setModalStartSteps}
                modalSteps={modalSteps} setModalSteps={setModalSteps}
                modalWeight={modalWeight} setModalWeight={setModalWeight}
                startStepsEditModal={startStepsEditModal} setStartStepsEditModal={setStartStepsEditModal}
                setStartSteps={setStartSteps} setWeight={setWeight} setCalories={setCalories} setSteps={setSteps} weight={weight}
            />

            <div className='container'>
                <div className="link"></div>
                <StepTracker
                    steps={steps}
                    startSteps={startSteps}
                    calories={calories}
                    setStartStepsEditModal={setStartStepsEditModal}
                    active={active}
                    setModalSteps={setModalSteps}
                />

            </div>
        </>
    )
}

export default App
