import axios from "axios"

const localApi = axios.create({ baseURL: 'https://localhost:8000' })
const wantedApi = axios.create({ baseURL: 'https://pre-onboarding-selection-task.shop' })
wantedApi.defaults.headers.common['Content-Type'] = 'application/json'

export {localApi, wantedApi}
