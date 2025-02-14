import { Button } from "../../UI/Button/Button.styled";
import { Input } from "../../UI/Input/Input.styled";
import { useForm } from "react-hook-form";


const FormStartSteps = ({setStartSteps, setModalStartSteps, setModalWeight}) => {
    const { register,
            handleSubmit,
            reset,
        } = useForm();


    const onSubmitStartSteps = data => {
        setStartSteps(prevStep => prevStep + Number(data.startSteps))
        setModalStartSteps(false)
        setModalWeight(true)
        reset();
    }

    return (
        <>
            <h1 style={{ marginTop: 50 }}>How many steps do you want to take per day?</h1>


            <form onSubmit={handleSubmit(onSubmitStartSteps)} action="">
                <Input {...register("startSteps")} />
                <Button type="submit">Add start steps</Button>
            </form>
        </>
    )
}


export default FormStartSteps;