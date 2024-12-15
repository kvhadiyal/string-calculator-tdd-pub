import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test("should return 0 for an empty string", () => {
        expect(calculator.add("")).toBe(0);
    });

    test("should return the number itself when a single number is provided", () => {
        expect(calculator.add("1")).toBe(1);
    });

    test("should return the sum of two numbers", () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    test("should return the sum of any number of comma-separated numbers", () => {
        expect(calculator.add("1,2,3,4,5")).toBe(15);
    });

});