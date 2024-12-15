export class StringCalculator {
  add(numbers: string) {
    try {
      if (!numbers) return 0;
      const nums = numbers.replace(/\n/g, ",").split(",").map(Number);
      return nums.reduce((sum, num) => sum + num, 0);
    } catch (error) {
      console.log(error)
    }
  }
}
