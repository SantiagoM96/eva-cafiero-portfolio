import { masInfoyEntrevistas } from "../../../data/data"

const MasInfo = () => (
  <>
    <article className="flex flex-col w-full px-[2.5rem] pb-[6rem] gap-[2rem] lg:px-[6rem]">
      <h4 className="text-[2em] lg:text-[2.5em] font-bold uppercase">Más información y entrevistas</h4>
      <ul>
        {masInfoyEntrevistas.map((info, index) => (
          <li key={index} className="lg:text-[1.25em] pb-[2rem] lg:pl-[6rem]">
            <a href={info.url} target="_blank" rel="noopener noreferrer" className="underline-light">- {info.title}</a>
          </li>
        ))}
      </ul>
    </article>
  </>
)

export default MasInfo