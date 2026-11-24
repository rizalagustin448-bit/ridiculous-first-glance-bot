import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We auction naming rights to potholes so cities fix the sponsored ones first, because brands pay $500 a month to put their logo on the smoothest road in town.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
