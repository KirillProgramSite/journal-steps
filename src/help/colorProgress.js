export const colorProgress = (procent) => {
    if (procent >= 0 && procent <= 40) {
        return "#DC143C";
    } else if (procent > 40 && procent <= 70) {
        return "#FF8C00";
    } else if (procent > 70 && procent <= 100) {
        return "#32CD32";
    } else {
        return "#FFD700";
    }
};
