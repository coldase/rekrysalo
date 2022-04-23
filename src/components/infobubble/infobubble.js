import "./infobubble.css";
import {
  BsFillExclamationCircleFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { useState } from "react";

const InfoBubble = ({ marginT, marginB, title, content, type }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="outerbubble">
      {type === "r" && (
        <BsFillQuestionCircleFill
          style={{ marginBottom: marginB, marginTop: marginT }}
          onClick={() => setIsHidden(!isHidden)}
          className="r-icon"
        />
      )}
      <div
        className="infobubble"
        id={isHidden && "hiddedbox"}
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
