import { resolve } from "path";
import { getFolders } from "../utils/getFolders/getFolders"

const PATH = '../../../../programming-language/javascript/'

const disciplinesFolders = getFolders(resolve(__dirname, PATH));

const LABELS = {
    react: 'Современные языки программирования',
    'react-native': 'Мобильные приложения',
    'webpack-react': 'Администрирование и разработка Web-приложений (Webpack)'
}

type DisciplinesType = Record<string, {label: string, labs: {
    file: string, url: string
}}>[];

export const DISCIPLINES = disciplinesFolders.reduce((prevValue, curVal, index) => {

    const lab = getFolders(resolve(__dirname, PATH+curVal)).reduce((prevLab, curLab, indexLab) => {
        return {...prevLab, [indexLab+1]: { file: curLab, url: resolve(__dirname, PATH+curVal+curLab)} }
    }, {});

    console.log(lab)


    return {...prevValue, [curVal]: {label: LABELS[curVal], labs: lab}} }, {}) as DisciplinesType;