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
