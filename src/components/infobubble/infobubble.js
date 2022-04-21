import "./infobubble.css";

const InfoBubble = ({ marginT, marginB, title, content, isHidden }) => {
  return (
    <div
      className="infobubble"
      id={isHidden && "hiddedbox"}
      style={{ marginBottom: marginB, marginTop: marginT }}
    >
      <p>{title}</p>
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
  );
};

export default InfoBubble;
