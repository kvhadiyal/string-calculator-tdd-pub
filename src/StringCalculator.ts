export class StringCalculator {
  add(numbers: string) {
    try {
      if (!numbers) return 0;

      let delimiter = ",";
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2);
        numbers = parts[1];
      }

      const nums = numbers
        .replace(/\n/g, delimiter)
        .split(delimiter)
        .map(Number);

      const negatives = nums.filter(num => num < 0);
      if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
      }

      return nums.reduce((sum, num) => sum + num, 0);
    } catch (error) {
      console.log(error)
    }
  }
}

const calculator = new StringCalculator();

console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1,2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3
console.log(calculator.add("1,-2,3,-4")); // Throws an error
