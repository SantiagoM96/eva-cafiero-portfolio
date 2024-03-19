import Reveal from "../../../../components/Reveal/Reveal";
import { ProjectFigureProps } from "../../../../models/types";
import React from "react";

const ProjectFigure: React.FC<ProjectFigureProps> = ({ textColor, figure, figcaption, styles }) => (
  <>
    <Reveal variants=
      {{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: .8, delay: .3 }}>
      <figure className={`flex flex-col md:flex-row-reverse items-center md:items-end md:justify-between w-full gap-[1rem] ${styles}`}>
        <img src={figure} alt={figcaption} className='w-full md:w-3/4 max-h-screen object-contain' />
        {figcaption && (
          <figcaption className={`text-[${textColor}] lg:mr-[4rem] text-center md:text-left lg:w-2/3`}>
            <p className={`text-${textColor} lg:text-[1.5em] text-[1em]`}>{figcaption}</p>
          </figcaption>
        )}
      </figure>
    </Reveal>
  </>

)

export default ProjectFigure