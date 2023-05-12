import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Header = ({ text, showForm, onToggle }) => {
  return (
    <header>
      <h1>C E R E S blog</h1>
      <button
        className="toggle-button"
        onClick={onToggle}
        style={{
          backgroundColor: `${showForm ? "red" : "blue"}`,
          marginBottom: "20",
        }}
      >
        <div className="button-content">
          <div className="icon">
            {showForm ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          <div className="text">{showForm ? "Hide" : "Show"}</div>
        </div>
      </button>
    </header>
  );
};

export default Header;
