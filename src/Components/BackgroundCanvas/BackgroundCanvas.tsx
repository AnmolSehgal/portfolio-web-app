import { useRef } from "react"

const BackgroundCanvas = ()=>{
    const ref = useRef();

    return(
        <div>
            <canvas ref={ref} width="100%" height="100%" />
        </div>
    )

}

export default BackgroundCanvas;