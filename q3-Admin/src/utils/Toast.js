import toast from "react-hot-toast";


export const showToast = ({ message, type, durationTime, position }) => {
    const options = {
        duration: durationTime,
        position,
        style: {
            color: "#fff",
            background: "#000",
        },
        iconTheme: {
            primary: "#fff",
            secondary: type === 'success' ? "#0f0" : "#f00",
        }
    };

    if (type === 'success') {
        toast.success(message, options);
    } else {
        toast.error(message, options);
    }
};