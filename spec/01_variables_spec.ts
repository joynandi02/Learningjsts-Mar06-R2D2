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
            describe('tuples', () => {
                it('the syntax first', () => {
                    let warren: [string, string, number];
                    warren = ['Warren', 'Ellis', 56];

                    //let first = warren[0];
                    //let age = warren[2];

                    let [first, , age] = warren;
                    expect(first).toBe('Warren');
                    expect(age).toBe(56);
                });
                it('should behave...', () => {
                    function formatName(first: string, last: string): [string, number] {
                        const fullName = `${last},${first}`;
                        return [fullName, fullName.length];
                    }
                    const [name, len] = formatName('Han', 'Solo');
                    expect(name).toBe('Solo,Han');
                    expect(len).toBe(8);
                });
                it('using destructuring on an array', () => {
                    const friends = ['Reggie', 'Susan', 'Neil'];
                    const [first, last] = friends;
                    expect(first).toBe('Reggie');

                    const [firstFriend, ...restOfMyFriends] = friends;
                    expect(firstFriend).toBe('Reggie');
                    expect(restOfMyFriends).toEqual(['Susan', 'Neil']);
                });
                it('using the spread operator', () => {
                    const friends = ['Susan', 'Neil'];
                    const newFriends = ['Reggie', ...friends];
                    expect(newFriends).toEqual(['Reggie', 'Susan', 'Neil']);
                });
                describe('objects and destructuring of objects', () => {
                    describe('object leteral', () => {
                        interface Movie { title: string, director: string };
                        const movie: Movie = {
                            title: "The Last Jedi",
                            director: "Rian Johnson"
                        }
                        const movie2: Movie = {
                            title: "Thor Ragnarok",
                            director: "Taika Waititi"
                        }
                    });
                    it('duck typing', () => {
                        interface PhoneCall { message: string }
                        function doIt(thing: PhoneCall) {
                            console.log(thing.message);
                        }
                        doIt({ message: 'Call your mom' });

                        const phoneCall = {
                            from: 'Jenny',
                            when: 'noon',
                            callbackNumber: '867-5309',
                            message: 'Pay me!'
                        }
                        doIt(phoneCall);
                    });
                });
            });
        });
    });
});