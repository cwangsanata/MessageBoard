const formatDate = require('../public/javascript/formatDate.js');

test ('formatDate returns a string', () => {
    expect(typeof formatDate(new Date())).toBe('string');
});

test ('formatDate returns a string in the correct format', () => {
    expect(formatDate(new Date())).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}:\d{2} [AP]M/);
});

