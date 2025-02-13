import { useEffect, useState } from 'react'
import './App.css'
import { Progress } from './components/UI/Progress/Progress.styled'
import ModalWindow from './components/UI/Modal/Modal';
import { Button } from './components/UI/Button/Button.styled';


import FormStartSteps from './components/Forms/FormStartSteps/FormStartSteps';
import FormAddSteps from './components/Forms/FormAddSteps/FormAddSteps';

const App = () => {
    const [startSteps, setStartSteps] = useState(0)
    const [steps, setSteps] = useState(0)
    const [active, setActive] = useState(true)


    const [modalSteps, setModalSteps] = useState(false)
    const [modalStartSteps, setModalStartSteps] = useState(true)

    useEffect(() => {
        const date = new Date();

        if(date.getHours() === 9){
            setActive(true)
        }
    }, )





    return (
        <>
            <ModalWindow modal={modalStartSteps} setModal={setModalStartSteps}>
                <FormStartSteps setStartSteps={setStartSteps} setModalStartSteps={setModalStartSteps} />
            </ModalWindow>

            <ModalWindow modal={modalSteps} setModal={setModalSteps}>
                <FormAddSteps setActive={setActive} setSteps={setSteps} setModalSteps={setModalSteps} />
            </ModalWindow>


            <div className='container'>
                <div className="link">
                    {/* <p>Steps</p> <p>Statistics</p> */}
                </div>
                <div className="main">
                    <h1 className='steps'>{steps}</h1>
                    <p>steps for {startSteps}</p>
                    <Progress
                        startSteps={startSteps}
                        steps={steps}
                        value={steps}
                        min="0"
                        max={startSteps}
                    />
                </div>
                {active === true ? (
                    <Button style={{ marginTop: 50 }} onClick={() => setModalSteps(true)}>Add note for steps +</Button>
                ) : (
                    <Button disabled style={{ marginTop: 50 }} onClick={() => setModalSteps(true)}>Add note for steps +</Button>
                )}
            </div>
        </>
    )
}

export default App
