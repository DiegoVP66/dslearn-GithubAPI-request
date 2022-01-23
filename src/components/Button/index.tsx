import "./styles.css";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <button type="submit" className="btn-style">
        <h6>{text}</h6>
      </button>
    </div>
  );
};

export default Button;
