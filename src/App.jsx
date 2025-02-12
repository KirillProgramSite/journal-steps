import { useState } from 'react'
import './App.css'
import { Progress } from './components/UI/Progress/Progress.styled'
import { useForm } from "react-hook-form";
import ModalWindow from './components/UI/Modal/Modal';
import { Button } from './components/UI/Button/Button.styled';
import { Input } from './components/UI/Input/Input.styled';

const App = () => {
    const startSteps = 8000;
    const [steps, setSteps] = useState(0)


    const [modalSteps, setModalSteps] = useState(false)

    const { register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
        clearErrors
    } = useForm();


    const onSubmit = data => {
        setSteps(prevStep => prevStep + Number(data.steps));
        reset();
    };



    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)} action="">
                <input
                    {...register("steps", {
                        required: "Вы должны ввести кол-во шагов!", pattern: {
                            value: /^[0-9]+$/,
                            message: "Можно вводить только цифры!"
                        }
                    },)}
                    onBlur={(e) => {
                        if (!e.target.value) {
                            setError("stepsEr", {
                                type: "manual",
                                message: "Вы должны ввести кол-во шагов!",
                            });
                        }
                    }}
                />
                <button type="submit">Add Steps +</button>
            </form> */}

            <ModalWindow modal={modalSteps} setModal={setModalSteps}>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <Input
                        {...register("steps", {
                            required: "Вы должны ввести кол-во шагов!", pattern: {
                                value: /^[0-9]+$/,
                                message: "Можно вводить только цифры!"
                            }
                        },)}
                        onBlur={(e) => {
                            if (!e.target.value) {
                                setError("stepsEr", {
                                    type: "manual",
                                    message: "Вы должны ввести кол-во шагов!",
                                });
                            }
                        }}

                        style={{marginRight: 5}}
                    />
                    <Button onClick={() => setModalSteps(true)} type="submit">Add Steps +</Button>
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
                <Button style={{marginTop: 50}} onClick={() => setModalSteps(true)}>Add note for steps +</Button>
            </div>
        </>
    )
}

export default App
