import "./infobubble-container.css";
import InfoBubble from "./infobubble";
import { useParams } from "react-router-dom";
import { bubbleInfo } from "../../data/bubbleInfodata.js";

const InfoBubbleContainer = ({ type }) => {
  const params = useParams();
  return (
    <div className="infobubble-container">
      {params.tab === "1" && (
        <>
          {type === "l" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form1_1_l.title}
                content={bubbleInfo.form1_1_l.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form1_2_l.title}
                content={bubbleInfo.form1_2_l.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form1_3_l.title}
                content={bubbleInfo.form1_3_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form1_1_r.title}
                content={bubbleInfo.form1_1_r.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form1_2_r.title}
                content={bubbleInfo.form1_2_r.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form1_3_r.title}
                content={bubbleInfo.form1_3_r.content}
              />
            </>
          )}
        </>
      )}
      {params.tab === "2" && (
        <>
          {type === "l" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_1_l.title}
                content={bubbleInfo.form2_1_l.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_2_l.title}
                content={bubbleInfo.form2_2_l.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_3_l.title}
                content={bubbleInfo.form2_3_l.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_4_l.title}
                content={bubbleInfo.form2_4_l.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_5_l.title}
                content={bubbleInfo.form2_5_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_1_r.title}
                content={bubbleInfo.form2_1_r.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_2_r.title}
                content={bubbleInfo.form2_2_r.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_3_r.title}
                content={bubbleInfo.form2_3_r.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form2_4_r.title}
                content={bubbleInfo.form2_4_r.content}
              />
            </>
          )}
        </>
      )}
      {params.tab === "3" && (
        <>
          {type === "l" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form3_1_l.title}
                content={bubbleInfo.form3_1_l.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form3_2_l.title}
                content={bubbleInfo.form3_2_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form3_1_r.title}
                content={bubbleInfo.form3_1_r.content}
              />
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form3_2_r.title}
                content={bubbleInfo.form3_2_r.content}
              />
            </>
          )}
        </>
      )}
      {params.tab === "4" && (
        <>
          {type === "l" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form4_1_l.title}
                content={bubbleInfo.form4_1_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form4_1_r.title}
                content={bubbleInfo.form4_1_r.content}
              />
            </>
          )}
        </>
      )}
      {params.tab === "5" && (
        <>
          {type === "l" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form5_1_l.title}
                content={bubbleInfo.form5_1_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={20}
                isHidden={true}
                title={bubbleInfo.form5_1_r.title}
                content={bubbleInfo.form5_1_r.content}
              />
            </>
          )}
        </>
      )}
      {params.tab === "6" && (
        <>
          {type === "l" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form6_1_l.title}
                content={bubbleInfo.form6_1_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={20}
                title={bubbleInfo.form6_1_r.title}
                content={bubbleInfo.form6_1_r.content}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default InfoBubbleContainer;
