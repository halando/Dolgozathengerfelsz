describe('Bemenet ellenőrzése', () => {
    it('50 inputként', () => {
        let act = isGoodInput(50);
        expect(act).toBe(true);
        
    });
});
