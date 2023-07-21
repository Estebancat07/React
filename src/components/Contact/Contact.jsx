import {
  ContactContainer,
  ContactInput,
  ContactLabel,
  ContactLeftDiv,
  ContactRightDiv,
  ContactTitle,
  ContainInput,
  ContainerInputs,
  SubmitBtn,
  SubmitContainer,
  
  
} from "./ContactStyles";

import { FaCheckCircle,} from "react-icons/fa";
import { contactForm } from "../../data/contactNewsLetterForm";
import { useState } from "react";

const Contact = () => {
  const [toggleSubmit, setToggleSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleSubmit(!toggleSubmit);
  };

  return (
    <ContactContainer>
      <ContactLeftDiv>
        <ContactTitle>CONTACTANOS</ContactTitle>
  
        <p>📍Avendaño y Valdivia 1913 </p>
        <p>📞351 - 4761695 </p>
        <p>✉️Kyly_sport@gmail.com</p>
       
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.7454505886935!2d-64.17854052352804!3d-31.448673997814414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2e1475d0d1d%3A0xd2122d129efceb0b!2sAvenda%C3%B1o%20y%20Valdivia%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1689729312765!5m2!1ses!2sar" loading="lazy" ></iframe>
      </ContactLeftDiv>

      <ContactRightDiv>
        <h2>¡Enterate antes de nuestras ofertas y lanzamientos!</h2>
        <form onSubmit={handleSubmit}>
          {!toggleSubmit ? (
            <ContainerInputs>
              {contactForm.map((input) => (
                <ContainInput key={input.id}>
                  <ContactLabel htmlFor={input.name}>
                    {input.label}
                  </ContactLabel>
                  <ContactInput
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.name}
                    required={true}
                  />
                  
                </ContainInput>
              ))}
              <SubmitBtn type="submit" value="Suscribite" />
            </ContainerInputs>
          ) : (
            <SubmitContainer>
              <button
                title="Volver a suscribirme"
                onClick={() => setToggleSubmit(!toggleSubmit)}
              >
                <FaCheckCircle color="green"/>
              </button>
              <h3>
             ¡Gracias por suscribirte ❤️! 
              </h3>
            </SubmitContainer>
          )}
        </form>
      </ContactRightDiv>
    </ContactContainer>
  );
};
export default Contact;
