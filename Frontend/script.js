document.addEventListener('DOMContentLoaded', function () {
    var misclickCount = 0;
    var thresholdValue = 3;
    var userRating = '';
    var misclickCycles = 0;
    var totalClick = 0;

    document.addEventListener('click', function (event) {
        totalClick++;
        if (!event.target.classList.contains('clickable') ) {
            misclickCount++;
            if (misclickCount >= thresholdValue) {
                misclickCycles++;   
                misclickCount = 0;              
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
        var reportText = 'Total click: '+ totalClick +
                         '\nMisclick Cycles: '+ misclickCycles +
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
