import path from 'path'
import { getFolders } from '../utils/getFolders/getFolders'
import { existsSync } from 'fs'

const PATH = '../../../../programming-language/javascript/'

const disciplinesFolders = getFolders(path.resolve(__dirname, PATH))

const LABELS = {
	react: 'Современные языки программирования',
	'react-native': 'Мобильные приложения',
	'webpack-react': 'Администрирование и разработка Web-приложений (Webpack)',
}

type LabelsType = keyof typeof LABELS

type DisciplinesType = Record<
	string,
	{ label: LabelsType; curPath: string; labs: { file: string; url: string } }
>[]

export const DISCIPLINES = disciplinesFolders.reduce((prevValue, curVal) => {
	const lab = getFolders(path.resolve(__dirname, PATH + curVal)).reduce(
		(prevLab, curLab, indexLab) => {

			const getUrl = (split: string) => path.resolve(__dirname, [PATH + curVal, curLab].join(split));

			const windowsUri = getUrl('\\');
			let url;

			if (existsSync(windowsUri)) {
				url = windowsUri;
			} else {
				url = getUrl('/');
			}

			return {
				...prevLab,
				[indexLab + 1]: {
					file: curLab,
					url,
				},
			}
		},
		{}
	)

	return {
		...prevValue,
		[curVal]: { label: LABELS[curVal as LabelsType], labs: lab },
	}
}, {}) as DisciplinesType
