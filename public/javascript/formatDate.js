const { DateTime } = require("luxon");

function getDateTimeFromISO(date) {
    return DateTime.fromISO(date.toISOString()).toLocaleString(DateTime.DATETIME_MED);
}

module.exports = getDateTimeFromISO;