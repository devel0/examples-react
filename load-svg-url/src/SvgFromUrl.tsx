import { useState, useEffect, useId } from "react"
import { useSvgService } from "./services/svg/Service"

export const SvgFromUrl = (props: {
    url: string,
    fill?: string,
    width?: string,
    height?: string
}) => {
    const { width, height, url, fill } = props
    const svgMap = useSvgService(x => x.svgMap)
    const getSvgFromUrl = useSvgService(x => x.getSvgFromUrl)
    const classNameStr = useId()
    const [svgData, setSvgData] = useState('')

    useEffect(() => {
        const load = async () => {
            const q = await getSvgFromUrl(url)
            setSvgData(q)
        }

        load()
    }, [url])

    return <div>        
        <style>{`
        .${classNameStr} > svg {
            width:${width};
            height:${height};
            fill:${fill};
        }
        `}</style>
        <div
            className={classNameStr}
            dangerouslySetInnerHTML={{ __html: svgData }}
        />
    </div>
}