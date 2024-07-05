import btn from "./PrimaryButton.module.css"
const PrimaryButton = ({children, ...props}) => {
    return (
        <button
            {...props}
            className={btn.primaryBtn}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;