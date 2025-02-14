import { useForm } from "react-hook-form";
import { Input } from "../../UI/Input/Input.styled";
import { Button } from "../../UI/Button/Button.styled";


const FormAddWeight = ({ setWeight, setModalWeight}) => {

    const { register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmitWeight = data => {
        setWeight(prevWeight => prevWeight + Number(data.weight))
        setModalWeight(false)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmitWeight)} action="">
            <h1>Enter your current weight (you can change it)</h1>
            <Input placeholder="Weight" {...register("weight")} />
            <Button type="submit">Add info</Button>
        </form>
    )
}


export default FormAddWeight;