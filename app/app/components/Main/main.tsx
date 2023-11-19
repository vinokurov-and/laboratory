import React from "react";

import { DISCIPLINES } from "@/app/config";
import Task from "../Task/Task";
const folders = DISCIPLINES;

export default async function MainPg() {
  return (
    <div>
      {Object.keys(folders).map((item) => {
        return (
          <div>
            <h1>{folders[item].label}</h1>
            <div>
              {Object.keys(folders[item].labs).map((lab) => {
                let task = folders[item].labs[lab].url;
                let text = folders[item].labs[lab].file;
                return (
                  <div>
                    <Task labLink={task} text={text} />
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
