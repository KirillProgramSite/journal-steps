import { useForm } from "react-hook-form";
import { Input } from "../../UI/Input/Input.styled";
import { Button } from "../../UI/Button/Button.styled";
import { calcCalories } from "../../../help/calcCalories";


const FormAddSteps = ({ setSteps, setModalSteps, setActive, setCalories, weight }) => {
    const { register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
        clearErrors
    } = useForm();

    const onSubmitSteps = data => {
        setSteps(prevStep => prevStep + Number(data.steps));
        setCalories(prevCalories => prevCalories + calcCalories(Number(data.steps), weight))
        setModalSteps(false)
        reset();
    }

    return (
        <form style={{ marginTop: 100 }} onSubmit={handleSubmit(onSubmitSteps)} action="">
            <h1>
                How far have you walked in a day?
            </h1>
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
    )
}


export default FormAddSteps;