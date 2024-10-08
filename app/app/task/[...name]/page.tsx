import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import getTask from '@/app/utils/getTask/getTask'
import editTask from '@/app/utils/editTask/editTask'

type TaskProps = {
	params: {
		name: string[]
	}
}

export default async function Task({ params: { name } }: TaskProps) {
	let task = getTask(name)
	task = editTask(task)
	return (
		<main style={{ padding: 20 }}>
			<div style={{marginBottom: 20, marginTop: 20, marginRight: 20, fontWeight: 800, textAlign: 'end'}}>
				<Link href='/'>ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
			</div>
			<div>
				<ReactMarkdown>{task}</ReactMarkdown>
			</div>
		</main>
	)
}
