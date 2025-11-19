import { create } from "zustand"
import DOMPurify from 'dompurify';
import type { ISvgActions } from "./IActions"
import type { ISvgState } from "./IData"

export type ISvgService = ISvgState & ISvgActions

const InitialData: ISvgState = {
    svgMap: new Map<string, string>()
}

export const useSvgService = create<ISvgService>((set, get) => {

    return ({
        ...InitialData,

        getSvgFromUrl: async (url: string) => {
            const trySvgData = get().svgMap.get(url)
            if (trySvgData != null) return trySvgData

            let svgData: string = ''

            try {
                const res = await fetch(url, { method: 'GET' })
                console.debug(`download ${url}`)

                if (res.status === 200) {
                    svgData = DOMPurify.sanitize(await res.text())
                    set(state => {
                        const newSvgMap = new Map<string, string>(state.svgMap)
                        newSvgMap.set(url, svgData)
                        return ({
                            svgMap: newSvgMap
                        })
                    })
                }
            } catch (err) {
                console.error(err)
            }

            return svgData
        }

    })
})
