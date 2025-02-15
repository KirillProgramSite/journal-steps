import Modals from "../components/Modals/Modals"
import StepTracker from "../components/StepTracker/StepTracker"

const Main = (props) => {
    return (
        <>
            <Modals
                {...props}
            />

            <div className='container'>
                <div className="link"></div>
                <StepTracker
                    {...props}
                />

            </div>
        </>
    )
}

export default Main