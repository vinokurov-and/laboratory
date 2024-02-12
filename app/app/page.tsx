import MainPg from './components/Main/main'
import { DISCIPLINES } from './config/index'
import { getDocBySlug } from './utils/getDoc'

const folders = DISCIPLINES


export default async function Home() {
	return (
		<main>
			<MainPg />
		</main>
	)
}
