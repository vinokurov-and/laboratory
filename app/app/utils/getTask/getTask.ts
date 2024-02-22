import { readFileSync } from 'fs'

const getTask = (name: string[]) => {
	let pathLab = name.join('//')
	pathLab = pathLab.split('%3A').join(':')
	pathLab = pathLab.split('%20').join(' ')
	let task
	try {
		task = readFileSync(pathLab, 'utf8')
	} catch {
		pathLab = '//' + pathLab
		task = readFileSync(pathLab, 'utf8')
	}
	return task
}

export default getTask
