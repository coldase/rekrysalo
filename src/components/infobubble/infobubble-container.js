import "./infobubble-container.css";
import InfoBubble from "./infobubble";
import { useParams } from "react-router-dom";
import { bubbleInfo } from "../../data/bubbleInfodata.js";
import { useFormData } from "../../hooks/useFormData";

const InfoBubbleContainer = ({ type }) => {
  const params = useParams();
  const [formData] = useFormData();

  return (
    <div className="infobubble-container">
      {params.tab === "1" && (
        <>
          {type === "l" && (
            <>
              <InfoBubble
                marginB={400}
                type={type}
                title={bubbleInfo.form1_1_l.title}
                content={bubbleInfo.form1_1_l.content}
              />
              <InfoBubble
                type={type}
                marginB={30}
                title={bubbleInfo.form1_2_l.title}
                content={bubbleInfo.form1_2_l.content}
              />
              <InfoBubble
                marginB={0}
                type={type}
                title={bubbleInfo.form1_3_l.title}
                content={bubbleInfo.form1_3_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={465}
                type={type}
                title={bubbleInfo.form1_1_r.title}
                content={bubbleInfo.form1_1_r.content}
              />
              <InfoBubble
                marginB={90}
                type={type}
                title={bubbleInfo.form1_2_r.title}
                content={bubbleInfo.form1_2_r.content}
              />
              <InfoBubble
                marginB={0}
                type={type}
                link={bubbleInfo.form1_3_r.link}
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
                marginB={
                  formData.form_2_radio === "1"
                    ? 250
                    : formData.form_2_radio === "2"
                    ? 150
                    : 50
                }
                type={type}
                title={bubbleInfo.form2_1_l.title}
                content={bubbleInfo.form2_1_l.content}
              />
              <InfoBubble
                marginB={250}
                type={type}
                title={bubbleInfo.form2_3_l.title}
                content={bubbleInfo.form2_3_l.content}
              />
              <InfoBubble
                marginB={10}
                type={type}
                title={bubbleInfo.form2_2_l.title}
                content={bubbleInfo.form2_2_l.content}
              />
              <InfoBubble
                marginB={800}
                type={type}
                title={bubbleInfo.form2_4_l.title}
                content={bubbleInfo.form2_4_l.content}
              />
              <InfoBubble
                marginB={20}
                type={type}
                title={bubbleInfo.form2_5_l.title}
                content={bubbleInfo.form2_5_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginT={90}
                marginB={
                  formData.form_2_radio === "1"
                    ? 895
                    : formData.form_2_radio === "2"
                    ? 795
                    : 695
                }
                type={type}
                title={bubbleInfo.form2_1_r.title}
                content={bubbleInfo.form2_1_r.content}
              />
              <InfoBubble
                marginB={320}
                type={type}
                title={bubbleInfo.form2_2_r.title}
                content={bubbleInfo.form2_2_r.content}
              />
              <InfoBubble
                marginB={160}
                type={type}
                title={bubbleInfo.form2_3_r.title}
                content={bubbleInfo.form2_3_r.content}
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
                marginT={20}
                marginB={170}
                type={type}
                title={bubbleInfo.form3_1_l.title}
                content={bubbleInfo.form3_1_l.content}
              />
              <InfoBubble
                type={type}
                title={bubbleInfo.form3_2_l.title}
                content={bubbleInfo.form3_2_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginT={20}
                type={type}
                marginB={40}
                title={bubbleInfo.form3_1_r.title}
                content={bubbleInfo.form3_1_r.content}
              />
              <InfoBubble
                type={type}
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
                marginT={170}
                type={type}
                marginB={20}
                title={bubbleInfo.form4_1_l.title}
                content={bubbleInfo.form4_1_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginT={170}
                type={type}
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
                type={type}
                link={bubbleInfo.form5_1_l.link}
                title={bubbleInfo.form5_1_l.title}
                content={bubbleInfo.form5_1_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginB={20}
                type={type}
                hide={true}
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
                type={type}
                link={bubbleInfo.form6_1_l.link}
                title={bubbleInfo.form6_1_l.title}
                content={bubbleInfo.form6_1_l.content}
              />
            </>
          )}
          {type === "r" && (
            <>
              <InfoBubble
                marginT={130}
                marginB={20}
                type={type}
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
