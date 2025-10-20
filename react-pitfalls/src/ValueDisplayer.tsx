import { useGlobalService } from "./GlobalService"

export const ValueDisplayer = () => {
    const some = useGlobalService(x => x.value)

    return <div>value={some}</div>
}