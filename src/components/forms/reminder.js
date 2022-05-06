import {
  BsFillExclamationCircleFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import "./reminder.css";

const Reminder = () => {
  return (
    <div className="reminder-container">
      <BsFillExclamationCircleFill className="reminder-icon" />
      <BsFillQuestionCircleFill className="reminder-icon" />
      <div className="reminder-text">
        <p>
          Vinkki- ja ohjenappien takaa löydät vinkkejä ja neuvoja, joita voit
          lisätä tulostettavalle muistilistalle
        </p>
      </div>
    </div>
  );
};

export default Reminder;
