import FormAddSteps from "../Forms/FormAddSteps/FormAddSteps";
import FormAddWeight from "../Forms/FormAddWeight/FormAddWeight";
import FormEditSteps from "../Forms/FormEdit/FormEditSteps";
import FormStartSteps from "../Forms/FormStartSteps/FormStartSteps";
import ModalWindow from "../UI/Modal/Modal";

const Modals = ({
    modalStartSteps, setModalStartSteps,
    modalSteps, setModalSteps,
    modalWeight, setModalWeight,
    startStepsEditModal, setStartStepsEditModal,
    setStartSteps, setWeight, setCalories, setSteps, weight
}) => {
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
        </>
    );
};


export default Modals