import React from "react";
import Link from "next/link";
import { DISCIPLINES } from "@/app/config";
import getTask from "@/app/utils/getTask/getTask";
import { readFileSync } from "fs";

const folders = DISCIPLINES;

export default async function MainPg() {
  return (
    <div>
      {Object.keys(folders).map((item: string) => {
        return (
          <div key={item}>
            <h1>{folders[item].label}</h1>
            <div>
              {Object.keys(folders[item].labs).map((lab) => {
                let task = "/Task/" + folders[item].labs[lab].url;
                let text = readFileSync(folders[item].labs[lab].url, 'utf-8');
                let labNameStart = text.indexOf("#");
                let labNameEnd = text.indexOf('\n', labNameStart);
                text = text.substring(labNameStart, labNameEnd);
                text = text.split("#").join("-");

                return (
                  <div key={lab}>
                    <Link href={task}>{text}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
