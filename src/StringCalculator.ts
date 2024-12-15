export class StringCalculator {
  add(numbers: string) {
    try {
      if (!numbers) return 0;
    } catch (error) {
      console.log(error)
    }
  }
}
