describe('Henger felszín számítás', () => {
    it('20, 10 inputra 3769.91 felszín', () => {
        let act = calcSurface(20,10);
        expect(act).toBe(3769.91, 1.0)
    })
   it('25,50 inputra 11780.97 felszín', () => {
    let act = calcSurface(25,50);
        expect(act).toBe(11780.97, 0.7)
   });
   it('98,98 inputra 120687.42 felszín', () => {
    let act = calcSurface(98,98);
        expect(act).toBe(120687.42, 0.6)
   });
   it('45,90 inputra 38170.35 felszín', () => {
    let act = calcSurface(45,90);
        expect(act).toBe(38170.35)
   });
   it('130,65 inputra 159278.74felszín', () => {
    let act = calcSurface(130,65);
        expect(act).toBe(159278.74)
   });
    });
    
describe('Henger felszín számítás', () => {
    it('20, 10 inputra 3769.91 felszín', () => {
        let act = calcSurface(20,10);
        expect(act).toCloseBe(3769.91, 1.0)
    })
   it('25,50 inputra 11780.97 felszín', () => {
    let act = calcSurface(25,50);
        expect(act).toCloseBe(11780.97, 0.7)
   });
   it('98,98 inputra 120687.42 felszín', () => {
    let act = calcSurface(98,98);
        expect(act).toCloseBe(120687.42, 0.6)
   });
   it('45,90 inputra 38170.35 felszín', () => {
    let act = calcSurface(45,90);
        expect(act).toCloseBe(38170.35)
   });
   it('130,65 inputra 159278.74felszín', () => {
    let act = calcSurface(130,65);
        expect(act).toCloseBe(159278.74)
   });
    });
    