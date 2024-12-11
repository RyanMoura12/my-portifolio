import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import {
  ContainerAbout,
  Image,
  SubContainerAbout,
  SubTitle,
  Description,
  ContainerButtons,
  ContactButton,
  TextButton,
} from "./styles";

import photo from "../../assets/photo.png";

import { FiArrowRight } from "react-icons/fi";
interface Props {
  toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <ContainerAbout id="sobre">
      {/* <Image src={photo} alt="Ryan Moura" /> */}

      <SubContainerAbout>
        <SubTitle>About me</SubTitle>

        <Description>
          I started my programming journey in 2021, when I joined a IT technical
          school, since then I discovered I am passionate technology and
          personal development.
        </Description>
        <Description>
          I am currently studying languages/frameworks such as: Javascript,
          TypeScript, Laravel, Php, Vue.js, Graphql, React, React Native, NodeJS
          among other technologies that I use to create web/mobile applications
          high level and value.
        </Description>
        <Description>
          My focus is on learning new things and improving my skills even
          further. that I have, I always like to be constantly learning and
          evolving day after day, and adding a lot of value.
        </Description>
        <ContainerButtons>
          <ContactButton href="#contato">
            <TextButton>Contact</TextButton>
          </ContactButton>
        </ContainerButtons>
      </SubContainerAbout>
    </ContainerAbout>
  );
};

export default About;
