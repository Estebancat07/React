import {
  FooterContainer,
  FooterLinks,
  FooterLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>

      <FooterLinks>
  
        <FooterLink>Trabaja con nosotros</FooterLink>
        
        <FooterLink>Términos y condiciones</FooterLink>

        <FooterLink style={{ border: "none" }}>
          Soporte
        </FooterLink>
      </FooterLinks>

        
       <span>👟 KYLI SPORT 👟</span>
        

    </FooterContainer>
  );
};
export default Footer;
