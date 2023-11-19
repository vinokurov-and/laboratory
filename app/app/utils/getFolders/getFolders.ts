
import { readdirSync } from "fs";

export const getFolders = (paths: string) => {
    return readdirSync(paths)
}