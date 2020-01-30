export default {
    getCurrentDateTimeInEST: function() {
        // -5.0 refers to EST
        var offset = -5.0;
        var clientDate = new Date();
        var  utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
        var serverDate = new Date(utc + (3600000*offset));
        return new Date(serverDate);
    },

    addLeadingZero: function(num) {
        if (num < 10) return "0" + num;
        return num;
    },

    calculateTimeRemaining: function(endDate) {
        // console.log(seminarDate);
        const oneMillisecond = 1;
        const oneSecond = 1000 * oneMillisecond;
        const oneMinute = 60 * oneSecond;
        const oneHour = 60 * oneMinute;
        const oneDay = 24 * oneHour;
        const currentDateTimeEST = this.getCurrentDateTimeInEST();
        var timeRemainingInMilliseconds = endDate - currentDateTimeEST;
        const daysRemaining = Math.floor(timeRemainingInMilliseconds / oneDay);
        timeRemainingInMilliseconds -= daysRemaining * oneDay;
        const hoursRemaining = Math.floor(timeRemainingInMilliseconds / oneHour);
        timeRemainingInMilliseconds -= hoursRemaining * oneHour;
        const minutesRemaining = Math.floor(timeRemainingInMilliseconds / oneMinute);
        timeRemainingInMilliseconds -= minutesRemaining * oneMinute;
        const secondsRemaining = Math.floor(timeRemainingInMilliseconds / oneSecond);
        timeRemainingInMilliseconds -= secondsRemaining * oneSecond;
        return {
                    daysRemaining: this.addLeadingZero(daysRemaining),
                    hoursRemaining: this.addLeadingZero(hoursRemaining),
                    minutesRemaining: this.addLeadingZero(minutesRemaining),
                    secondsRemaining: this.addLeadingZero(secondsRemaining)
        }
    }

}