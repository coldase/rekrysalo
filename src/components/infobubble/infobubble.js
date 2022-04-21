import "./infobubble.css";

const InfoBubble = ({ marginB, title, content }) => {
  return (
    <div className="infobubble" style={{ marginBottom: marginB }}>
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
