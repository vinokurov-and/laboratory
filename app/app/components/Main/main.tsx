import { DISCIPLINES } from '@/app/config'
import { readFileSync } from 'fs'
import Link from 'next/link'

const folders = DISCIPLINES

export default async function MainPg() {
	return (
		<div>
			{Object.keys(folders).map((item: string) => {
				return (
					<div key={item}>
						<h1>{folders[item].label}</h1>
						<div>
							{Object.keys(folders[item].labs).map(lab => {
								const task = '/Task/' + folders[item].labs[lab].url
								let text = readFileSync(folders[item].labs[lab].url, 'utf-8')
								const labNameStart = text.indexOf('#')
								const labNameEnd = text.indexOf('\n', labNameStart)
								text = text.substring(labNameStart, labNameEnd)
								text = text.split('#').join('-')

								return (
									<div key={lab}>
										<Link href={task}>{text}</Link>
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}
