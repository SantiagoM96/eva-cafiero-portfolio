import { ring } from 'ldrs'


ring.register()
const Loader = () => {
    return (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full min-h-screen z-[99999]"
            style={{
                background: "rgb(181,181,181)",
                backgroundImage: "linear-gradient(90deg, rgba(181,181,181,1) 0%, rgba(255,255,255,1) 43%)"
            }}>
            <l-ring
                size="40"
                stroke="5"
                bg-opacity="0"
                speed="2"
                color="black"
            ></l-ring>
        </div>
    )
}

export default Loader

