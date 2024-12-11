import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  ContainerContact,
  SubContainerTexts,
  TextTitle,
  SubTextTitle,
  SubContainerContact,
  BoxContact,
  Icon,
  BoxTexts,
  LinkText,
  BoxCV,
  LinkTextCV,
  ContainerSocialMedias,
  SocialMedia,
  Imagem,
} from "./styles";
import { FiArrowDown } from "react-icons/fi";

import contactImage from "../../assets/mock/contact.webp";

interface Props {
  toggleTheme(): void;
}

const Contact: React.FC<Props> = ({ toggleTheme }) => {
  AOS.init();
  const { colors, title } = useContext(ThemeContext);

  return (
    <ContainerContact id="contato">
      <SubContainerTexts>
        <TextTitle>Entrar em contato</TextTitle>
        <SubTextTitle>Sinta-se à vontade para entrar em contato!</SubTextTitle>
      </SubContainerTexts>

      <SubContainerContact>
        <BoxContact href="mailto:contato@gmail.com">
          <Icon
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0C6.71625 0 0 6.71625 0 15C0 23.2837 6.71625 30 15 30C23.2837 30 30 23.2837 30 15C30 6.71625 23.2837 0 15 0V0ZM23.7375 8.725L15 15.8075L6.26125 8.725H23.7375ZM23.75 21.225H6.25V10.5937L15 17.685L23.75 10.595V21.225Z"
              fill={colors.text}
            />
          </Icon>

          <BoxTexts>
            <LinkText>Seu email de contato</LinkText>
          </BoxTexts>
        </BoxContact>

        <BoxContact
          target="blank"
          href="https://api.whatsapp.com/send?phone=5592984203922"
        >
          <Icon
            width="31"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0568848 30L2.1757 22.2962C0.868238 20.0412 0.181225 17.485 0.182481 14.8637C0.186249 6.66875 6.88683 0 15.1197 0C19.1149 0.00125 22.8652 1.55 25.6861 4.36C28.5058 7.17 30.0581 10.905 30.0569 14.8775C30.0531 23.0738 23.3525 29.7425 15.1197 29.7425C12.6203 29.7413 10.1574 29.1175 7.97575 27.9325L0.0568848 30V30ZM8.34249 25.2413C10.4475 26.485 12.457 27.23 15.1147 27.2312C21.9572 27.2312 27.5311 21.6887 27.5349 14.875C27.5374 8.0475 21.9898 2.5125 15.1247 2.51C8.27718 2.51 2.70697 8.0525 2.70446 14.865C2.7032 17.6463 3.52209 19.7287 4.89738 21.9075L3.64267 26.4675L8.34249 25.2413V25.2413ZM22.6442 18.4113C22.5512 18.2563 22.3026 18.1637 21.9283 17.9775C21.5553 17.7912 19.7203 16.8925 19.3774 16.7687C19.0358 16.645 18.7871 16.5825 18.5372 16.955C18.2885 17.3263 17.5726 18.1638 17.3553 18.4113C17.138 18.6588 16.9195 18.69 16.5465 18.5038C16.1734 18.3175 14.9702 17.9263 13.5447 16.66C12.4357 15.675 11.6859 14.4588 11.4686 14.0863C11.2513 13.715 11.446 13.5138 11.6319 13.3288C11.8002 13.1625 12.0049 12.895 12.192 12.6775C12.3817 12.4625 12.4432 12.3075 12.5688 12.0588C12.6932 11.8113 12.6316 11.5938 12.5374 11.4075C12.4432 11.2225 11.6972 9.39375 11.387 8.65C11.083 7.92625 10.7753 8.02375 10.5467 8.0125L9.83081 8C9.58213 8 9.17771 8.0925 8.83608 8.465C8.49446 8.8375 7.52988 9.735 7.52988 11.5638C7.52988 13.3925 8.86748 15.1587 9.05337 15.4062C9.24051 15.6537 11.6846 19.4063 15.4286 21.015C16.3191 21.3975 17.0149 21.6262 17.5563 21.7975C18.4505 22.08 19.2644 22.04 19.9074 21.945C20.6246 21.8387 22.1154 21.0462 22.4269 20.1787C22.7384 19.31 22.7384 18.5663 22.6442 18.4113V18.4113Z"
              fill={colors.text}
            />
          </Icon>

          <BoxTexts>
            <LinkText>Seu telefone</LinkText>
          </BoxTexts>
        </BoxContact>

        <BoxCV
          href={"https://gabarbosa.com/static/media/cv.pdf"}
          download="Ryan Moura - Currículo"
        >
          <Icon
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29782 2.136C8.05101 1.6845 9.00225 2.2305 9.00225 3.099C9.00225 3.495 8.7952 3.8625 8.45461 4.065C4.73968 6.294 2.25056 10.3605 2.25056 15.003C2.25056 22.0395 7.96399 27.75 15.0007 27.75C22.0375 27.75 27.7494 22.0395 27.7494 15.003C27.7494 10.3635 25.2648 6.2985 21.5514 4.0695C21.2138 3.8655 21.0053 3.4995 21.0053 3.1035C21.0053 2.2305 21.958 1.689 22.7112 2.1405C27.0773 4.7625 30 9.5445 30 15.003C30 23.2815 23.2798 30 15.0007 30C6.72168 30 0 23.2815 0 15.003C0 9.5415 2.92723 4.758 7.29782 2.136V2.136ZM8.54464 15.009C8.54464 15.009 11.5829 18.0405 14.2146 20.67C14.4351 20.8905 14.7232 21 15.0098 21C15.2978 21 15.5859 20.8905 15.8065 20.67C18.4366 18.042 21.4764 15.0075 21.4764 15.0075C21.6939 14.79 21.8019 14.5035 21.8019 14.2185C21.8019 13.9305 21.6909 13.6425 21.4704 13.422C21.0323 12.9825 20.3211 12.981 19.886 13.416L16.135 17.1645V1.125C16.135 0.504 15.6309 0 15.0098 0C14.3886 0 13.8845 0.504 13.8845 1.125V17.1645L10.1365 13.4175C9.70292 12.984 8.99325 12.9885 8.55514 13.4265C8.33458 13.647 8.22356 13.935 8.22206 14.223C8.22206 14.508 8.32858 14.793 8.54464 15.009V15.009Z"
              fill="#fff"
            />
          </Icon>

          <BoxTexts>
            <LinkTextCV>Download CV</LinkTextCV>
          </BoxTexts>
        </BoxCV>

        <ContainerSocialMedias>
          <SocialMedia
            target="blank"
            href="https://www.linkedin.com/in/ryanmourac/"
          >
            <Icon
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.71625 0 0 6.71625 0 15C0 23.2837 6.71625 30 15 30C23.2837 30 30 23.2837 30 15C30 6.71625 23.2837 0 15 0ZM12.5 20H10V12.5H12.5V20ZM11.25 11.3863C10.4913 11.3863 9.875 10.7662 9.875 10C9.875 9.235 10.49 8.61375 11.25 8.61375C12.01 8.61375 12.625 9.235 12.625 10C12.625 10.7662 12.0087 11.3863 11.25 11.3863ZM21.25 20H18.7525V16.4237C18.7525 14.0725 16.25 14.2712 16.25 16.4237V20H13.75V12.5H16.25V13.8663C17.34 11.8463 21.25 11.6962 21.25 15.8012V20Z"
                fill={colors.text}
              />
            </Icon>
          </SocialMedia>

          <SocialMedia target="blank" href="https://github.com/RyanMoura12">
            <Icon
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.7175 0 0 6.88604 0 15.3792C0 22.1743 4.2975 27.9389 10.2587 29.9728C11.0075 30.115 11.25 29.6383 11.25 29.2333V26.3702C7.0775 27.3007 6.20875 24.5555 6.20875 24.5555C5.52625 22.7779 4.5425 22.305 4.5425 22.305C3.18125 21.3502 4.64625 21.3707 4.64625 21.3707C6.1525 21.4783 6.945 22.956 6.945 22.956C8.2825 25.3065 10.4538 24.6272 11.31 24.2338C11.4438 23.2405 11.8325 22.5613 12.2625 22.1781C8.93125 21.7872 5.42875 20.4684 5.42875 14.5769C5.42875 12.8967 6.015 11.5254 6.97375 10.4489C6.81875 10.0606 6.305 8.49573 7.12 6.37853C7.12 6.37853 8.38 5.96585 11.2462 7.95489C12.4425 7.61399 13.725 7.44354 15 7.43713C16.275 7.44354 17.5587 7.61399 18.7575 7.95489C21.6212 5.96585 22.8787 6.37853 22.8787 6.37853C23.695 8.49701 23.1812 10.0618 23.0262 10.4489C23.9887 11.5254 24.57 12.898 24.57 14.5769C24.57 20.4838 21.0612 21.7846 17.7213 22.1653C18.2588 22.642 18.75 23.5776 18.75 25.013V29.2333C18.75 29.6421 18.99 30.1227 19.7512 29.9715C25.7075 27.935 30 22.1717 30 15.3792C30 6.88604 23.2837 0 15 0Z"
                fill={colors.text}
              />
            </Icon>
          </SocialMedia>

          <SocialMedia
            target="blank"
            href="https://www.instagram.com/moura.rvc/"
          >
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill={colors.text}
              />
            </Icon>
          </SocialMedia>
        </ContainerSocialMedias>
      </SubContainerContact>

      <Imagem src={contactImage} />
    </ContainerContact>
  );
};

export default Contact;