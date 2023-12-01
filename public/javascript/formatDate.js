const { DateTime } = require("luxon");

function getDateTime(date) {
    try {
        const dateTime = DateTime.fromISO(date);
        return dateTime.toLocaleString(DateTime.DATETIME_MED);
    } catch (err) {
        console.log(err);
    }
}

module.exports = getDateTime;