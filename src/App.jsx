import { useState } from 'react'
import './App.css'
import { Progress } from './components/UI/Progress/Progress.styled'
import { useForm } from "react-hook-form";
import ModalWindow from './components/UI/Modal/Modal';
import { Button } from './components/UI/Button/Button.styled';
import { Input } from './components/UI/Input/Input.styled';
import FormStartSteps from './components/Forms/FormStartSteps/FormStartSteps';

const App = () => {
    const [startSteps, setStartSteps] = useState(0)
    const [steps, setSteps] = useState(0)


    const [modalSteps, setModalSteps] = useState(false)
    const [modalStartSteps, setModalStartSteps] = useState(true)

    const { register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
        clearErrors
    } = useForm();


    const onSubmitSteps = data => {
        setSteps(prevStep => prevStep + Number(data.steps));
        setModalSteps(false)
        reset();
    };

    const onSubmitStartSteps = data => {
        setStartSteps(prevStep => prevStep + Number(data.startSteps))
        setModalStartSteps(false)
        reset();
    }



    return (
        <>
            <ModalWindow modal={modalStartSteps} setModal={setModalStartSteps}>
                <FormStartSteps setStartSteps={setStartSteps} setModalStartSteps={setModalStartSteps} />
            </ModalWindow>

            <ModalWindow modal={modalSteps} setModal={setModalSteps}>

                <form style={{marginTop: 100}} onSubmit={handleSubmit(onSubmitSteps)} action="">
                    <Input
                        {...register("steps", {
                            required: "Вы должны ввести кол-во шагов!",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Можно вводить только цифры!"
                            }
                        })}
                        onBlur={(e) => {
                            if (!e.target.value) {
                                setError("steps", {
                                    type: "manual",
                                    message: "Вы должны ввести кол-во шагов!",
                                });
                            } else {
                                clearErrors("steps");
                            }
                        }}
                        style={{ marginRight: 5 }}
                    />
                    <Button type="submit">Add Steps +</Button>
                </form>

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
                <Button style={{ marginTop: 50 }} onClick={() => setModalSteps(true)}>Add note for steps +</Button>
            </div>
        </>
    )
}

export default App
