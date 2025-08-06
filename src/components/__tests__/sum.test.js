
import { sum } from "../sum";
test("Sum function should calc sum of two numbers",()=>{
    
    
    const result=sum(3,4);
    expect(result).toBe(7);//this line is known as assertion
})