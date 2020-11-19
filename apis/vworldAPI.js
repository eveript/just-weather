// http://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&crs=epsg:4326&point=-122.406417,37.785834&format=json&type=road&zipcode=true&simple=false&key=796D8161-C406-318B-855C-E0AA24AAA426
import { ADDRESS_URL, API_VERSION } from '../constants/Geo'
import { getGeo } from './apiUtils'

export const getAddress = ({ lon, lat, ...rest }) =>
    getGeo(`${ADDRESS_URL}`, {
        version: API_VERSION,
        service: 'address',
        request: 'getAddress',
        crs: 'epsg:4326',
        format: 'json',
        type: 'both',
        zipcode: true,
        simple: false,
        point: `${lon},${lat}`,
        ...rest,
    })
