import { Button } from "../UI/Button/Button.styled";
import { Progress } from "../UI/Progress/Progress.styled";
import { motion } from "framer-motion";

const StepTracker = ({ steps, startSteps, calories, setStartStepsEditModal, setModalSteps, active }) => {
    return (
        <div className="main">
            <h1 className='steps'>{steps}</h1>
            <motion.p
                style={{ cursor: "pointer" }}
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
            <p style={{ marginTop: 20, fontSize: 30, fontWeight: "bold" }}>
                Calories: <span style={{ color: "#FF8C00" }}>{calories}</span>
            </p>
            <Button
                disabled={active}
                style={{ marginTop: 50 }}
                onClick={() => setModalSteps(true)}
            >
                Add note for steps +
            </Button>
        </div>
    );
};

export default StepTracker