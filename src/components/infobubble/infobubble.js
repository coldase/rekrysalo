import "./infobubble.css";
import {
  BsFillExclamationCircleFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { useState } from "react";
import { useFormData } from "../../hooks/useFormData";

const InfoBubble = ({
  marginT,
  marginB,
  title,
  content,
  type,
  link,
  hide,
  name,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const [formData, setValues] = useFormData();
  return (
    <div className="outerbubble" style={hide && { opacity: 0 }}>
      {type === "r" && (
        <BsFillQuestionCircleFill
          style={{ marginBottom: marginB, marginTop: marginT }}
          onClick={() => setIsHidden(!isHidden)}
          className="r-icon"
        />
      )}
      <div
        className="infobubble"
        id={isHidden ? "hiddedbox" : ""}
        style={{ marginBottom: marginB, marginTop: marginT }}
      >
        <div className="title-container">
          <p>{title}</p>
        </div>
        {typeof content === "object" ? (
          <>
            {content.map((cont) => (
              <p key={cont}>{cont}</p>
            ))}
          </>
        ) : (
          <p>{content}</p>
        )}
        {link && (
          <a href={link[1]} target="_blank" rel="noreferrer">
            {link[0]}
          </a>
        )}
        {type === "l" && (
          <div className="add-check-container">
            <input
              onChange={(e) => setValues(e)}
              type="checkbox"
              name={name}
              checked={formData[name]}
            ></input>
            <p>Lisää vinkki muistilistaan</p>
          </div>
        )}
      </div>
      {type === "l" && (
        <BsFillExclamationCircleFill
          onClick={() => setIsHidden(!isHidden)}
          className="l-icon"
          style={{ marginBottom: marginB, marginTop: marginT }}
        />
      )}
    </div>
  );
};

export default InfoBubble;
