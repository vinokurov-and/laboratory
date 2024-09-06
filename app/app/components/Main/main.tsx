import { DISCIPLINES } from '@/app/config'
import { readFileSync } from 'fs'
import Link from 'next/link'

const folders = DISCIPLINES

export default async function MainPg() {
	return (
		<div>
			{Object.keys(folders).map((item, key) => {
				if (key === 0)
					console.log("folders", folders);
				return (
					<div key={item}>
						<h1>{folders[item].label}</h1>
						<div>
							{Object.keys(folders[item].labs).map(lab => {
								console.log("lab", folders[item].labs[lab])
								const task = '/task/' + folders[item].labs[lab].url
								let text = readFileSync(folders[item].labs[lab].url, 'utf-8')

								let labNameStart = text.indexOf('#')

								let labNameStartSecond = text.indexOf('**');

								let minLabNameStart = Math.min(labNameStart, labNameStartSecond);

								const labNameEnd = text.indexOf('\n', minLabNameStart)
								text = text.substring(minLabNameStart, labNameEnd)
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
