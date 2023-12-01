import Link from "next/link";
import ReactMarkdown from "react-markdown";

import getTask from "@/app/utils/getTask/getTask";

type TaskProps = {
  params: {
    name: string[];
  };
};

export default async function Task({ params: { name } }: TaskProps) {
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
