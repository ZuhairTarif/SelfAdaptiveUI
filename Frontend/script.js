var badRatingCount= 0;
var totalRatingCount = 0; 

function rateExperience(rating) {
    if (rating === '0') {
        badRatingCount++;
    } 
}
function submitRating() {
    totalRatingCount++;
}

document.addEventListener('DOMContentLoaded', function () {
    var misClickCount = 0;
    var thresholdValue = 3;
    var misClickCycle = 0;
    var totalClick = 0;
    

    // var storedData = localStorage.getItem('userData');
    // if (storedData) {
    //     var parsedData = JSON.parse(storedData);
    //     totalClickCycle = parsedData.totalClickCycle;
    //     misclickCycles = parsedData.misClickCycles;
    //     totalRating = parsedData.totalRating;
    //     badRating = parsedData.badRating;
    // }

    document.addEventListener('click', function (event) {
        totalClick++;
        if (!event.target.classList.contains('clickable') ) {
            misClickCount++;
            if (misClickCount >= thresholdValue) {
                misClickCycle++;   
                misClickCount = 0;              
            }
        }
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        generateMisclickReport();
    });

    function totalClickCycleCount() {
        return Math.floor(totalClick/3);
    }

    function generateMisclickReport() {      
        var dataToSave = {
            totalClickCycle: totalClickCycleCount(),
            misClickCycles: misClickCycle,
            totalRating: totalRatingCount,
            badRating: badRatingCount
        };

        localStorage.setItem('userData', JSON.stringify(dataToSave));
        alert('Data saved in local storage.');
    }
});
