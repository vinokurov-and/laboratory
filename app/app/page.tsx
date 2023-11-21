import { Markdown } from "./components/Markdown/Markdown";
import { DISCIPLINES } from "./config/index";
import getTask from "./utils/getTask/getTask";
import MainPg from "./components/Main/main";
const folders = DISCIPLINES;

export default async function Home() {

  return (
    <main>
      <MainPg />
    </main>
  );
}
