// Copyright 2020-2021 the denosaurs team. All rights reserved. MIT license.

import { levenshtein } from "../deps.ts";

/** Returns the closest string in the array */
export function closest(word: string, words: string[]): string | undefined {
  if (words.length === 0) return;

  const dist = words.map((w) => levenshtein(word, w));
  const index = dist.indexOf(Math.min(...dist));

  return words[index];
}
