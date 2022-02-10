import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                lunit: 'km',
                lang: 'en_US'
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '57dfc5c35cmsh5e60e57c80445adp1b6c1ajsn5b47f10014e4'
            }
        });
        return data;
    }
    catch (error) {
        console.log(error.message);
    }
}