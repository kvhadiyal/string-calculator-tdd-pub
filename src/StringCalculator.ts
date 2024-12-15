export class StringCalculator {
  add(numbers: string) {
    try {
      if (!numbers) return 0;
      return parseInt(numbers, 10);
    } catch (error) {
      console.log(error)
    }
  }
}
