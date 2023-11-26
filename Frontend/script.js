document.addEventListener('DOMContentLoaded', function () {
    var clickCount = 0;
    var misclickCount = 0;
    var totalClickCycles = 0;
    var thresholdValue = 4;
    var userRating = '';
    var misclickCycles = [];

    document.addEventListener('click', function (event) {
        clickCount++;

        if (
            event.target !== document.getElementById('text') &&
            event.target !== document.getElementById('icon') &&
            event.target.id !== 'goodButton' &&
            event.target.id !== 'badButton' &&
            event.target.id !== 'submitButton'
        ) {
            misclickCount++;
        }

        if (clickCount % thresholdValue === 0) {
            totalClickCycles++;
            if (misclickCount > 0) {
                misclickCycles.push(1); 
                misclickCount = 0;
            } else {
                misclickCycles.push(0);
            }
        }
    });

    function rateExperience(rating) {
        userRating = rating;
    }

    document.getElementById('closeButton').addEventListener('click', function() {
        generateMisclickReport();
    });

    function generateMisclickReport() {
        var misclickCycleCount = misclickCycles.reduce((sum, current) => sum + current, 0);
        var reportText = 'Total Click Cycles: ' + totalClickCycles +
                         '\nMisclick Cycles: ' + misclickCycleCount +
                         '\nUser Rating: ' + userRating;
        
        var blob = new Blob([reportText], { type: 'text/plain' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'misclick_report.txt';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    document.getElementById('goodButton').addEventListener('click', function() {
        rateExperience('1');
    });
    document.getElementById('badButton').addEventListener('click', function() {
        rateExperience('0');
    });
});
