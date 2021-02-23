import { get } from './http'
import { WeatherMap } from './WeatherMap.type'

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEATHER_MAP_API_KEY = process.env.WEATHER_MAP_API_KEY as string

export const getWeatherMap = async (): Promise<WeatherMap> => {
  const params = {
    id: 2113014,
    units: 'metric',
    appid: WEATHER_MAP_API_KEY,
  }
  return await get<WeatherMap>(OPEN_WEATHER_MAP_URL, params)
}
