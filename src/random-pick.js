import randomIndex from "@rojo2/random-index";

/**
 * Returns a random value from an Array.
 *
 * @param {Array} list - List of values.
 * @param {Function} [random=Math.random] - Random generator function to be used.
 * @returns {*|undefined} - Returns a value from the list (without removing it) or undefined if the list is empty.
 */
export default function randomPick(list, random = Math.random) {
  const index = randomIndex(list, random);
  if (index < 0) {
    return undefined;
  }
  return list[index];
}

