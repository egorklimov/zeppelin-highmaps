import { RU } from './RU';
import { UA } from './UA';
import { RU_DT } from "./RU_DT";


export const maxmindToHighmaps = {
    regions: {
        RU,
        UA,
        RU_DT
    },
    mapsPaths: {
        UA: 'countries/ua',
        RU: 'countries/ru/custom/ru-all-disputed',
        RU_DT: 'countries/ru/custom/ru-all-disputed',
        worldPalestine: 'custom/world-palestine'
    }
};
