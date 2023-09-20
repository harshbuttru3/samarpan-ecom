import {
  FooterContainer,
  FooterContent,
  FooterConnect,
  SocialIcons,
  FooterSlogan,
  ContactDetails,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterConnect>Connect With Us</FooterConnect>
        <SocialIcons>
          <a
            href="https://github.com/harshbuttru3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.instagram.com/127.0.0.1_7777"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </SocialIcons>
        <ContactDetails>
          <h3>Email: contact@gmail.com</h3>
          <h3>Phone: 7488700578, 7654481973</h3>
        </ContactDetails>
        <FooterSlogan>
          <p>Team Samarpan.</p>
        </FooterSlogan>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
