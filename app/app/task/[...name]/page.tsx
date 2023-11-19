import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { readFileSync } from "fs";

const getTask = (taskLink) => {
  let task = readFileSync(taskLink, "utf8");

  return task;
};

export default async function task({ params: { name } }) {
  let pathLab = name.join("//");
  pathLab = pathLab.split("%3A").join(":");
  pathLab = pathLab.split("%20").join(" ");
  let task = getTask(pathLab);

  return (
    <main>
      <div>
        <Link href="/">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
      <div>
        <ReactMarkdown children={task} />
      </div>
    </main>
  );
}
