import { useForm } from "react-hook-form";
import { Input } from "../../UI/Input/Input.styled";
import { Button } from "../../UI/Button/Button.styled";


const FormEditSteps = ({ setStartSteps, setStartStepsEditModal }) => {

    const { register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmitEditSteps = data => {
        setStartSteps(Number(data.startStepsEdit))
        setStartStepsEditModal(false)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmitEditSteps)} action="">
            <h1 style={{ marginTop: 50 }}>How many steps do you want to take per day?</h1>
                <Input {...register("startStepsEdit")} />
                <Button type="submit">Edit start steps</Button>
        </form>

    )
}


export default FormEditSteps;