import Button from "../Button/Button";
import {
  HeroWrapper,
  HeroContainer,
  HeroContent,
  HeroImageWrapper,
  ButtonGroup,
  HeroBadge,
  HeroTitle,
  HeroDescription,
} from "./Hero.styles";
import HeroImage from "../../assets/images/blogs/reactart.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>

        <HeroContent>

          <HeroBadge>
            Industry-Level React Learning
          </HeroBadge>

          <HeroTitle>
            Learn React, JavaScript & Modern Frontend Development
          </HeroTitle>

          <HeroDescription>
            Build real-world projects and become job-ready with step-by-step tutorials, best practices, and industry architecture.
          </HeroDescription>

          <ButtonGroup>

            <Button variant="primary">
              <Link to="blog">Explore Blogs</Link>
            </Button>

            <Button variant="secondary">
              Start Learning
            </Button>

          </ButtonGroup>

        </HeroContent>

        <HeroImageWrapper>

          <img src={HeroImage} alt="Developer coding in React" />

        </HeroImageWrapper>

      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;