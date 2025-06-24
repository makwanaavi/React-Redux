import axios from "axios";

const Api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/a5ac67bc2a7265a7e80ae119"
    // https://v6.exchangerate-api.com/v6/a5ac67bc2a7265a7e80ae119/latest/USD
})

export const currancyConverter = (fromCurrency, tocurrency, amout) => {
    return Api.get(`/pair/${fromCurrency}/${tocurrency}/${amout}`)
}