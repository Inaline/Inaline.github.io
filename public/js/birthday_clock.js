$(document).ready(function() {
    function formatDateTime() {
        var now = new Date();

        // 格式化日期
        var year = now.getFullYear();
        var month = ("0" + (now.getMonth() + 1)).slice(-2); // 月份从0开始，所以加1，并补零
        var day = ("0" + now.getDate()).slice(-2); // 补零
        var dateString = year + '-' + month + '-' + day;

        // 格式化时间
        var hours = ("0" + now.getHours()).slice(-2); // 24小时制
        var minutes = ("0" + now.getMinutes()).slice(-2);
        var seconds = ("0" + now.getSeconds()).slice(-2);
        var timeString = hours + ':' + minutes + ':' + seconds;

        // 更新 #date 和 #time 元素的内容
        $('#date').text(dateString);
        $('#time').text(timeString);
    }

    // 页面加载完成后立即更新一次时间
    formatDateTime();
    // 每隔一秒更新一次时间
    setInterval(formatDateTime, 1000);
});

$('#age').text(`我已经${age}岁了`);


$(document).ready(function() {
    function calculateAge(birthday) {
        const now = new Date();
        const birthDate = birthday;

        const diff = now - birthDate;
        const oneYearInMs = 365 * 24 * 60 * 60 * 1000; // 平均每年的毫秒数
        const oneMonthInMs = 30 * 24 * 60 * 60 * 1000; // 大约每月的毫秒数
        const oneDayInMs = 24 * 60 * 60 * 1000; // 每天的毫秒数
        const oneHourInMs = 60 * 60 * 1000; // 每小时的毫秒数
        const oneMinuteInMs = 60 * 1000; // 每分钟的毫秒数
        const oneSecondInMs = 1000; // 每秒的毫秒数

        const years = Math.floor(diff / oneYearInMs);
        const months = Math.floor((diff % oneYearInMs) / oneMonthInMs);
        const days = Math.floor(((diff % oneYearInMs) % oneMonthInMs) / oneDayInMs);
        const hours = Math.floor((((diff % oneYearInMs) % oneMonthInMs) % oneDayInMs) / oneHourInMs);
        const minutes = Math.floor(((((diff % oneYearInMs) % oneMonthInMs) % oneDayInMs) % oneHourInMs) / oneMinuteInMs);
        const seconds = Math.floor((((((diff % oneYearInMs) % oneMonthInMs) % oneDayInMs) % oneHourInMs) % oneMinuteInMs) / oneSecondInMs);

        return { years, months, days, hours, minutes, seconds };
    }

    function updateTable() {
        const age = calculateAge(birthday);

        // 更新表格中的数据
        $('#years').text(age.years + '年');
        $('#months').text(age.months + '月');
        $('#days').text(age.days + '天');
        $('#hours').text(age.hours + '时');
        $('#minutes').text(age.minutes + '分');
        $('#seconds').text(age.seconds + '秒');
    }

    // 页面加载后立即更新一次
    updateTable();
    // 每隔一秒更新一次时间
    setInterval(updateTable, 1000);
});

function calculateDaysToNextBirthday(birthday) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextBirthday = new Date(currentYear, birthday.getMonth(), birthday.getDate());

    // 如果今年的生日已经过去，则计算下一年的生日
    if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    const diff = nextBirthday - now;
    const oneDayInMs = 24 * 60 * 60 * 1000; // 每天的毫秒数
    const oneHourInMs = 60 * 60 * 1000; // 每小时的毫秒数
    const oneMinuteInMs = 60 * 1000; // 每分钟的毫秒数
    const oneSecondInMs = 1000; // 每秒的毫秒数

    const days = Math.floor(diff / oneDayInMs);
    const hours = Math.floor((diff % oneDayInMs) / oneHourInMs);
    const minutes = Math.floor((diff % oneHourInMs) / oneMinuteInMs);
    const seconds = Math.floor((diff % oneMinuteInMs) / oneSecondInMs);

    // 使用jQuery更新DOM元素
    $('.three #time_2').text(`${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`);
}
setInterval(() => calculateDaysToNextBirthday(birthday), 1000);