describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            let x = 12;
            expect(x).toBe(12);
            x = 13;
            expect(x).toBe(13);
            let y;
            y = 18;
            expect(y).toBe(18);
            y = 'Tacos';
            expect(y).toBe('Tacos');
        });
        it('using the const keyword', () => {
            const MIN_AGE = 13;
            const FAVORITE_NUMBER = [9, 20, 108];
            FAVORITE_NUMBER[0] = 10;

            const ACTOR = {
                name: 'Peter Mayhew',
                role: 'Chewbacca'
            }
            ACTOR.role = 'Chewie';
        });
        it('still has var but it is bad and you should feelbad if you use it', () => {
            const age = 22;
            if (age >= 21) {
                var oldEnough = true;
            }
            expect(oldEnough).toBe(true);
        });
        describe('literals', () => {
            it('has numeric literals', () => {
                let first = 10;
                let second = 3.12
                let salary = 10_001_000;
                let hexaNumber = 0xff;
                let binary = 0b101010;
                let octal = 0o744;
            });
            it('has string literals', () => {
                let firstString = 'Hello, World';
                expect(firstString).toBe("Hello, World");

                let story = 'He said "Oh My gosh"';
                let author = "Flanner O'Connel";

                expect("hi").toBe(`hi`);

                let lifeStory = `I am scared of Raju

                the end.`;

                let name = 'Joy', age = 47;

                let info = `His name is ${name} and his age is ${age}`;
                console.log(info);
            });
            it('has array literals ', () => {
                const things = [];
                things[0] = 'Hello';
                things[1] = 42;
                things[989] = 'You went this far';
                things[990] = things;

                expect(things[2]).toBeUndefined();

                const friends: (string | number)[] = [];
                friends[0] = 'David';
                friends[1] = 'Stacey';
                friends[2] = 42;
            });
        });
    });
});