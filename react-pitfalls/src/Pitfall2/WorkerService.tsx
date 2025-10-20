import { useEffect } from "react"
import { useGlobalService } from "../GlobalService"

export const useWorkerService = () => {
    const increment = useGlobalService(x => x.increment)
    const value = useGlobalService(x => x.value)

    useEffect(() => {
        const hdl = setInterval(() => {
            increment()            
        }, 1000)

        return () => clearTimeout(hdl)
    }, [value])

}