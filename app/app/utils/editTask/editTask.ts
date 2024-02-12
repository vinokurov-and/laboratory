import { readFileSync } from 'fs'

const editTask = (str: string) => {
	while (~str.indexOf('../common')) {
		let textLinkStart = str.indexOf('../common')
		let textLinkEnd = str.indexOf(']', textLinkStart)
		let strLinkStart = str.lastIndexOf('\n', textLinkStart)
		let strLinkEnd = str.indexOf('\n', textLinkEnd)
		let textLink = str.slice(textLinkStart, textLinkEnd)
		let taskText = readFileSync(textLink, 'utf8')
		str = str.slice(0 ,strLinkStart) + taskText + str.slice(strLinkEnd)
	}
	return str
}

export default editTask
