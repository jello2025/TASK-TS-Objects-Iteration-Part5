// don't change this interface
interface Fruit {
  id: number;
  name: string;
  color: string;
  taste: string;
}

/**
 * You can use this array
 * to manually test your code
 */
const fruits: Fruit[] = [
  {
    id: 501,
    name: "Apple",
    color: "Red",
    taste: "Sweet",
  },
  {
    id: 502,
    name: "Banana",
    color: "Yellow",
    taste: "Sweet",
  },
  {
    id: 503,
    name: "Orange",
    color: "Orange",
    taste: "Citrusy",
  },
  {
    id: 504,
    name: "Grapes",
    color: "Purple",
    taste: "Sweet",
  },
  {
    id: 505,
    name: "Kiwi",
    color: "Green",
    taste: "Tangy",
  },
];

/**
 * `getFruitColor` function that:
 * - Accepts a `fruit` parameter of type `Fruit`.
 * - Returns the color of the specified fruit.
 * Example:
 *  getFruitColor(fruits[0]); // => "Red"
 */
function getFruitColor(fruit: Fruit): string {
  return fruit.color;
}

/**
 * `isFruitTasteMatching` function:
 * - Accepts:
 *   - A `fruit` parameter of type `Fruit`.
 *   - A `taste` parameter of type `string`.
 * - Returns `true` if the fruit's taste matches the provided description, otherwise returns `false`.
 * Example:
 *  isFruitTasteMatching(fruits[2], "Citrusy"); // => true
 */
function isFruitTasteMatching(fruit: Fruit, taste: string): boolean {
  if (fruit.taste == taste) {
    return true;
  } else {
    return false;
  }
}

/**
 * `addFruit` function:
 * - Accepts:
 *   - A `fruits` array of type `Fruit[]`.
 *   - An `id` of type `number`
 *   - A `name` of type `string`
 *   - A `color` of type `string`
 *   - A `taste` of type `string`
 * - Creates a new `Fruit` object and adds it to the end of the array.
 * - Returns the updated array of fruits.
 * Example:
 *  addFruit(fruits, 506, "Mango", "Yellow", "Sweet");
 *    // => [
 *    //   { id: 501, name: "Apple", color: "Red", taste: "Sweet" },
 *    //   ...
 *    //   { id: 506, name: "Mango", color: "Yellow", taste: "Sweet" }
 *    // ]
 */
function addFruit(
  fruits: Fruit[],
  id: number,
  name: string,
  color: string,
  taste: string
): Fruit[] {
  let newFruit = {
    id: id,
    name: name,
    color: color,
    taste: taste,
  };
  fruits.push(newFruit);
  return fruits;
}

/**
 * `countSweetFruits` function:
 * - Accepts:
 *   - A `fruits` array of type `Fruit[]`.
 * - Returns the number of fruits with a sweet taste.
 * Example:
 *  countSweetFruits(fruits); // => 3
 */
function countSweetFruits(fruits: Fruit[]): number {
  return fruits.filter((fruit) => {
    return fruit.taste == "Sweet";
  }).length;
}

export {
  Fruit,
  getFruitColor,
  isFruitTasteMatching,
  addFruit,
  countSweetFruits,
};
