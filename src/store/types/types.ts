export type Weather = {
    main: {
        temp: number,
        feels_like: number,
        pressure: number
    },
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number
    }
    name: string
};