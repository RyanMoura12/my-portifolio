import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerProjects = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 150px 0px;
`;

export const SubContainerProjects = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 630px){    
        flex-direction: column;
        
        align-items: baseline;
    }
`;

export const SubTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 40px;

    @media screen and (max-width: 468px){    
        font-size: 35px;
    }
`;

export const ContainerAllProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 20px;
`;

export const Project = styled.article`
    display: flex;
    background: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow};
    flex-direction: column;
    border-radius: 20px;
`;

export const BoxImage = styled.div`
    display: flex;
    background: #E6E9F0;
    height: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
`;

export const Image = styled.img`
    display: flex;
    height: 70%;
    max-width: 90%;
    object-fit: contain;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`;

export const SubContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    a { color: ${props => props.theme.colors.text}; display: inline-flex; }
    a:focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
`;

export const TitleProject = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    font-size: 25px;
`;

export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.secundary};
    margin: 0 30px;
    text-align: left;
    flex: 1;
    line-height: 1.7;
    hyphens: auto;
    -webkit-hyphens: auto;
    word-spacing: -0.05em;
`;

export const Tools = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${props => props.theme.colors.secundary};
    margin: 20px 30px 30px 30px;
`;

export const Introduction = styled.p`
    color: ${props => props.theme.colors.secundary};
    font-family: 'Poppins', sans-serif;
    line-height: 1.7;
`;

export const FeaturedProject = styled.article`
    display: grid;
    grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
    border: 1px solid #e9456050;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: ${props => props.theme.colors.shadow};
    font-family: 'Poppins', sans-serif;
    @media (max-width: 800px) { grid-template-columns: 1fr; }
`;

export const FeaturedVisual = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
    min-height: 280px;
    padding: 40px 24px;
    background: radial-gradient(ellipse at top left, #763047, transparent 70%), #16213e;
    color: #fff;
    > svg { color: #ff8095; }
    strong { font-family: 'Space Grotesk', sans-serif; font-size: clamp(36px, 5vw, 60px); }
    span { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #e4dbe6; }
`;

export const FeaturedContent = styled.div`
    padding: clamp(24px, 4vw, 48px);
    color: ${props => props.theme.colors.text};
`;

export const FeaturedLabel = styled.p`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`;

export const FeaturedTitle = styled.h3`
    font-size: 38px;
    margin: 12px 0;
`;

export const FeaturedDescription = styled.p`
    color: ${props => props.theme.colors.secundary};
    line-height: 1.8;
`;

export const FeatureList = styled.ul`
    display: grid;
    gap: 16px;
    margin: 24px 0;
    h4 { font-size: 14px; margin-bottom: 4px; }
    p { color: ${props => props.theme.colors.secundary}; font-size: 14px; line-height: 1.6; }
`;

export const TechnologyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    li { padding: 6px 12px; border: 1px solid #e9456050; border-radius: 20px; font-size: 12px; }
`;


export const ProjectIdentity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    padding: 30px;
    border-radius: inherit;
    background: linear-gradient(135deg, #16213e, #293b55);
    color: #fff;
    font-family: 'Space Grotesk', sans-serif;
    span { font-size: 11px; letter-spacing: 2px; color: #a7dccc; }
    strong { font-size: 36px; }
`;
