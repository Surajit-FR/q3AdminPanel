import EmailTemplateBody from "../../components/email-template";
import Header from "../../components/shared/header/Header";

const EmailTemplate = () => {
  return (
    <div>
      <Header heading="Email Template" subHeading="details" />

      <EmailTemplateBody />
    </div>
  );
};

export default EmailTemplate;
