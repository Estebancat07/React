import { benefits } from "../../data/aboutBenefits";
import {
  AboutContainer,
  BenefitsContainer,
  BenefitContainer,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutContainer>

      <BenefitsContainer>
        {benefits.map((benefit) => (
          <BenefitContainer key={benefit.id}>
            <benefit.img
              size="40px"
              color="black"
              pointerEvents="none"
            />
            <p>{benefit.text}</p>
          </BenefitContainer>
        ))}
      </BenefitsContainer>
    </AboutContainer>
  );
};
export default About;