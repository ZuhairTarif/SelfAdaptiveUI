document.addEventListener('DOMContentLoaded', function () {
    var prMisclick = 0;
    var prBadRating = 0;
    var prIncreaseSize = 0;

    var totalClickCycle = 0;
    var misclickCycles = 0;
    var totalRating = 0;
    var badRating = 0;

    var storedData = localStorage.getItem('userData');
    if (storedData) {
        var parsedData = JSON.parse(storedData);
        totalClickCycle = parsedData.totalClickCycle;
        misclickCycles = parsedData.misClickCycles;
        totalRating = parsedData.totalRating;
        badRating = parsedData.badRating;
    }

    prMisclick = misclickCycles / totalClickCycle;
    prBadRating = badRating / totalRating;


});