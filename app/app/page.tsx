import { Markdown } from './components/Markdown/Markdown'
import { DISCIPLINES } from './config/index';
const folders = DISCIPLINES;

export default function Home() {
    // console.log(MD);
    return (
        <main>
            {Object.keys(folders).map(item => {
                return (
                <div>
                    <h1>{folders[item].label}</h1>
                    <div>{Object.keys(folders[item].labs).map(lab =>{
                        return <h2><a href={folders[item].labs[lab].url}>{folders[item].labs[lab].file}</a></h2>
                    })}</div>
                </div>
                )
            })}
        </main>
    )
}
