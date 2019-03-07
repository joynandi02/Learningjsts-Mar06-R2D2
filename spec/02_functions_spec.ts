import * as formatter from "../src/formatter";
describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {
            function add(a: number, b: number): number {
                return a + b;
            }
            expect(add(2, 2)).toBe(4);

            const subtract = function (a: number, b: number) {
                return (a - b);
            }
            expect(subtract(10, 2)).toBe(8);

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('You almost destroyed the universe!');
                }
                else {
                    return a / b;
                }
            }

            const age = 21;
            const message = age >= 21 ? "Old Enough" : "Too Young";
        });
        it('passing arguments to functions', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('using rest parameters', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(2, 2, 3)).toBe(7);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });

        describe('higher Order functions', () => {
            /* 
            * - takes one or more functions as arguments (i.e. procedural parameters),
            *-  returns a function as its result. 
            */
            it('takes a function as an argument', () => {
                const answer = formatter.formatName('Han', 'Solo');
                expect(answer).toBe('Solo, Han');
                expect(formatter.PI).toBe(3.1415);

                expect(formatter.formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
                const wrapInStars = wrap('***');
                expect(wrapInStars('Tacos')).toBe('***Tacos***');
                expect(formatter.formatName('Han', 'Solo', wrapInStars)).toBe('***Solo, Han***');

                //const wrapInCarots: formatters.Transform = (x) => `^^^${x}^^^`;
                const wrapInCarots = wrap('^^^');
                expect(formatter.formatName('Han', 'Solo', wrapInCarots)).toBe('^^^Solo, Han^^^');

                // function wrapInStars(what: string): string {
                //     return `***${what}***`;
                // }

                function wrap(chars: string): formatter.Transform {
                    return (x) => `${chars}${x}${chars}`;
                }
            });
        });
        describe('array methods', () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            it('taking a look at every number of an array', () => {
                numbers.forEach((x) => console.log(x));
            });
            describe('methods that return new arrays', () => {
                it('has a filter', () => {
                    function isEven(n: number): boolean {
                        return n % 2 === 0;
                    }
                    const evens = numbers.filter(isEven);
                    expect(evens).toEqual([2, 4, 6, 8]);
                    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                });
                it('map', () => {
                    const doubled = numbers.map(n => n * 2);
                    expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
                });
                it('should behave...', () => {
                    interface Vehicle {
                        vin: string;
                        makeAndModel: string;
                        mileage: number;
                    }
                    const vehicles: Vehicle[] = [
                        { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                        { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                        { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                    ];

                    const lowMileageVehicles = vehicles.filter(v => v.mileage < 100_100).map(v => v.makeAndModel); // add your code to this line.

                    expect(lowMileageVehicles).toEqual(['Toyota Prius', 'Ford Explorer']);
                });
            });

            describe('methods that produce a single (scalar) value', () => {
                it('has methods that check the membership of an array', () => {
                    expect(numbers.some(n => n > 8)).toBe(true);
                    expect(numbers.every(n => n % 2 === 0)).toBe(false);
                });
                it('has reduce', () => {
                    expect(numbers.reduce((s, n) => s + n)).toBe(45);
                    expect(numbers.reduce((s, n) => s + n, 100)).toBe(145);
                });

            });
            describe('a demo', () => {
                it('using reduce for something "real"', () => {
                    interface Vehicle {
                        vin: string;
                        makeAndModel: string;
                        mileage: number;
                    }
                    const vehicles: Vehicle[] = [
                        { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                        { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                        { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                    ];

                    interface HighestMileageVehicle {
                        vin: string;
                        mileage: number;
                    }

                    const seed: HighestMileageVehicle = {
                        vin: null,
                        mileage: -1
                    };

                    const answer = vehicles.reduce((p, n) => {
                        if (n.mileage > p.mileage) {
                            return {
                                vin: n.vin,
                                mileage: n.mileage
                            };
                        } else {
                            return p
                        }

                    }, seed);

                    expect(answer).toEqual({
                        vin: '9999',
                        mileage: 182000
                    });
                });
            });
        });
    });
})