export interface ISvgActions {
    /** retrieve svg from given url, purifying and caching result */
    getSvgFromUrl: (url: string) => Promise<string>
}