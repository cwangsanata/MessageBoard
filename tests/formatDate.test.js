const formatDate = require('../public/javascript/formatDate.js');

describe('formatDate', () => {
    test('Date is initally in ISO format', () => {
        expect(new Date().toISOString()).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    test ('formatDate returns a string', () => {
        expect(typeof formatDate(new Date())).toBe('string');
    });

    test ('formatDate returns a string in the correct format (fixed date)', () => {
        const fixedDate = new Date('December 17, 1995 03:24:00');
        expect(formatDate(fixedDate)).toBe('Dec 17, 1995, 3:24 AM');
    });

    test ('formatDate returns a string in the correct format (current date)', () => {
        const dateRegex = /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{1,2},\s\d{4},\s\d{1,2}:\d{2}\s(?:AM|PM)\b/;
        expect(formatDate(new Date())).toMatch(dateRegex);
    });
});
