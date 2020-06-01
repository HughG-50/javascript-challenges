'use strict';

const reverse = require('/reverse');

describe('reverse()', () => {
    test.each([
        ['abc', 'cba'],
        ['Hello JavaScript!', '!tpircSavaJ olleH'],
        ['desreveR', 'Reversed'],
        ['rotator', 'rotator'],
    ])('it reverses input \'%s\' into \'%s\'', (input, expected) => {
        expect(reverse(input)).toBe(expected);
    });
});