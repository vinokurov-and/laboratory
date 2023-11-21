import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { readFileSync } from "fs";
import getTask from "@/app/utils/getTask/getTask";




export default async function task({ params: { name } }) {
    let task = getTask(name);
  return (
    <main>
      <div>
        <Link href="/">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
      <div>
        <ReactMarkdown>{task}</ReactMarkdown>
      </div>
    </main>
  );
}
