export type WeatherParams = {
    lon: number
    lat: number
    units: string
    exclude?: string
}

export type GeoParams = {
    version: string
    service: string
    request: string
    crs: string
    format: string
    type: string
    zipcode: boolean
    simple: boolean
    point: string
}

export type GeoPoint = {
    lon: number
    lat: number
}
