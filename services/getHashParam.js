import { API_KEY, API_URL } from 'services/settings'
import CryptoJS from "crypto-js"

export default function getHashParam({ search, limit }) {

    const ts = new Date().getTime();
    const toHash = ts + process.env.PRIVATE_KEY_API + API_KEY
    const hash = CryptoJS.MD5(toHash).toString();
    let limitStr = null;
    limit
        ? limitStr = `&limit=${limit}`
        : limitStr = ''
    const url = `${API_URL}/${search}?ts=${ts}&apikey=${API_KEY}&hash=${hash}${limitStr}`;

    return url
}