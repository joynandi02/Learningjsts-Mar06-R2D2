describe('Writing basic steps', () => {
    it('can add two numbers', () => {
        //Given
        const a = 10, b = 20;
        //When
        const answer = a + b;
        //Then
        expect(answer).toBe(30);
    });
});