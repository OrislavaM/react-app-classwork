import styles from "./Button.module.css";

const Button = ({ onClick, color, children }) => {
    return (
        <button className={styles[color]} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;
