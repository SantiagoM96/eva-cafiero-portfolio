import { Variants } from "framer-motion";

export interface NavlinkItem {
    to: string;
    title: string;
}

export type TextColor = "#fff" | "#000";
export interface ProjectI {
    id: string;
    title: string;
    location: string;
    year: string;
    listImage: string;
    textColor: TextColor;
    data: Data
}
interface Data {
    coverImage: string;
    staticImage: string;
    staticImage2?: string;
    figure1: string;
    figcaption1?: string;
    figure2: string;
    figcaption2?: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4?: string;
    sliderImages: SliderImages[]
}

export interface ProjectArticleProps {
    textColor: TextColor;
    paragraphClassname: string;
    paragraph1: string;
    paragraph2?: string;
    figure: string;
    figcaption?: string;
    staticImage2?: string;
}

export interface ProjectFigureProps {
    textColor: TextColor;
    figure: string;
    figcaption?: string;
    styles?: string;
}

export interface ProjectHeadProps {
    title: string;
    location: string;
    year: string;
    textColor: TextColor;
}
export interface ResumeSection {
    title: string;
    items: ExperienceItem[];
}
export interface ExperienceItem {
    subtitle: string;
    list: ExperienceSubItem[];
}
export interface ExperienceSubItem {
    spanBold?: string;
    text: string;
}

export type ResumeData = ResumeSection[];

export interface InfoYEntrevistas {
    title: string;
    url: string
}

export interface CustomVariants extends Variants {
    hidden: { opacity?: number; x?: number; y?: number };
    visible: { opacity?: number; x?: number; y?: number };
}

export interface Transition {
    duration: number;
    delay: number;
}

export interface RevealProps {
    children: JSX.Element,
    width?: 'fit-content' | '100%',
    variants: CustomVariants;
    transition: Transition
}

export interface SliderImages {
    original: string;
    originalAltText?: string;
}