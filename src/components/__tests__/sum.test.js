import { sum } from "../sum"

test("Sum function calculating sum of 2 no.s" , () =>{
    const result = sum(3,4);

    expect(result).toBe(7);
})