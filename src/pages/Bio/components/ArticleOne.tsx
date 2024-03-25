import Reveal from "../../../components/Reveal/Reveal";
import styles from "../../../styles"

const ArticleOne = () =>  (
        <>
            <article className='flex flex-col justify-center px-[2.5rem] py-[2rem] lg:p-[6rem] gap-[2rem] lg:gap-[3rem]' >
                <h1 className={`${styles.titleStyles} lg:mt-[6rem] mb-[3.5rem] lg:mb-[8rem]`}>Eva M. Cafiero</h1>
                <p className={styles.paragraphStyles}>Eva nació en agosto de 2002 en la ciudad de La Plata, donde actualmente reside y trabaja. A los once años su interés por la exploración artística se vio impulsada por la participación en diversos espacios de formación, destacando el taller y clínica de obra con Manuel Rubín (2013-2015). La artista nació en plena era de la globalización, con el acceso a la tecnología pudo participar simultáneamente en actividades como jugar al Tera con una inglesa, conversar con mexicanos en un chat fandom de Amino y ver anime japonés en la televisión. En este sentido sus barreras del ocio cultural -al igual que el de toda su generación- se desdibujaron, denotando una interconexión interpersonal inmediata y simultánea, difuminando así las fronteras geográficas en el espacio virtual.</p>
                <Reveal variants=
                    {{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: .8, delay: .3 }}>
                    <figure className='flex flex-col md:flex-row-reverse items-center md:items-end md:justify-between w-full py-[1rem] lg:py-[6rem] gap-[1rem]'>
                        <img loading="lazy" src="https://i.ibb.co/1RqBTjM/retrato-RESIZE.jpg" alt="Foto de perfil de Eva Moro Cafiero" className='w-full md:w-3/4 max-h-screen ' />
                    </figure>
                </Reveal>
                <p className={styles.paragraphStyles}>Vivió en San Juan por un tiempo, donde estudió en el Centro Polivalente de Arte y el Colegio Central Universitario UNSJ, ambos con orientación en Artes Visuales. En 2020 regresó a La Plata, completó sus estudios secundarios en el Bachillerato de Bellas Artes de la UNLP teniendo clínica y clases con Leonel Pinola, Agustina Girardi, Andrea Poli y Alberto Dreizzen, entre otres. Participó en el taller de escultura con Daniel Basso, Ramos Generales (2023), y desde 2022 realiza clínica de obra con Flavia Da Rin. Actualmente forma parte del Programa de artistas de la Universidad Di Tella para el período 2023-24, cursa la carrera de Diseño de Imagen y Sonido en la FADU y participa del taller de escultura y clínica de obra de Luis Terán.</p>
                <p className={styles.paragraphStyles}>Su obra se articula con su formación, trabajo y participación en ONGs ambientalistas como Jóvenes por el Clima, Eco Raíces y Climate Action Network Latino América. Ha exhibido en el Centro Cultural Recoleta, el Centro Cultural Borges, MUNAR Arte, el Museo Pettoruti de Bellas Artes y galerías. Participó en el 110° Salón Nacional (2022), obteniendo una mención especial en escultura, y en el 100° y 101º Salón de Arte Joven del Museo Pettoruti (2023 y 2024). Ganó el premio en obra UTOPÍA ARTEBA 2023.</p>
            </article>
        </>
    )


export default ArticleOne