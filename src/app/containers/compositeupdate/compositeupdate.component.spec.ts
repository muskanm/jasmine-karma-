import { sum,value } from "./compositeupdate.component"

describe('Call',() => {
    it('check',() => {
        expect(sum(10,20)).toEqual(30);
    });
    it('negative value return zero',() => {
        expect(value(-2)).toEqual(0);
    });
    it('positive value increments by 1',() => {
        expect(value(3)).toEqual(4);
    })
})
