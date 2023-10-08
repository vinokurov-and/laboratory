import { Markdown } from './components/Markdown/Markdown'
import { DISCIPLINES } from './config/index';
const folders = DISCIPLINES;

export default function Home() {
  // console.log(MD);
  return (
    <main>
      {Object.keys(folders).map(item => {
        return <p>{folders[item].label}</p>
      })}
    </main>
  )
}
