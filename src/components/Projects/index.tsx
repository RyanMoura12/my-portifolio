import React from "react";
import ProjectsData, { featuredProject } from "../../projectsdata";
import { FiExternalLink, FiScissors, FiSmartphone } from "react-icons/fi";
import {
  ContainerProjects, SubContainerProjects, SubTitle, ContainerAllProjects,
  Project, BoxImage, Image, ContainerTitle, SubContainerTitle, TitleProject,
  Description, Tools, Introduction, FeaturedProject, FeaturedContent,
  FeaturedVisual, FeaturedLabel, FeaturedTitle, FeaturedDescription,
  FeatureList, TechnologyList, ProjectIdentity,
} from "./styles";

interface Props {
  toggleTheme(): void;
}

const Projects: React.FC<Props> = () => (
  <ContainerProjects id="projetos">
    <SubContainerProjects>
      <SubTitle>Sistemas e aplicativos</SubTitle>
    </SubContainerProjects>
    <Introduction>Projetos em que trabalhei, da gestão pública à experiência mobile.</Introduction>

    <FeaturedProject aria-labelledby="barber-title">
      <FeaturedVisual aria-hidden="true">
        <FiScissors size={56} />
        <strong>@barber</strong>
        <span><FiSmartphone /> Aplicativo mobile</span>
      </FeaturedVisual>
      <FeaturedContent>
        <FeaturedLabel>Projeto em destaque · App</FeaturedLabel>
        <FeaturedTitle id="barber-title">{featuredProject.title}</FeaturedTitle>
        <FeaturedDescription>{featuredProject.description}</FeaturedDescription>
        <FeatureList>
          {featuredProject.features.map((feature) => (
            <li key={feature.title}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </li>
          ))}
        </FeatureList>
        <TechnologyList aria-label="Tecnologias do aplicativo">
          {featuredProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </TechnologyList>
      </FeaturedContent>
    </FeaturedProject>

    <ContainerAllProjects>
      {ProjectsData.map(({ id, img, title, description, tool, link }) => (
        <Project key={id}>
          <BoxImage>
            {img ? <Image src={img} alt={`Sistema ${title}`} loading="lazy" /> : (
              <ProjectIdentity aria-hidden="true"><span>SISTEMA WEB</span><strong>{title}</strong></ProjectIdentity>
            )}
          </BoxImage>
          <ContainerTitle>
            <TitleProject>{title}</TitleProject>
            {link && <SubContainerTitle>
              <a target="_blank" rel="noopener noreferrer" href={link} aria-label={`Acessar ${title} (abre em nova aba)`}>
                <FiExternalLink size={25} aria-hidden="true" />
              </a>
            </SubContainerTitle>}
          </ContainerTitle>
          <Description>{description}</Description>
          <Tools>{tool}</Tools>
        </Project>
      ))}
    </ContainerAllProjects>
  </ContainerProjects>
);

export default Projects;
