document.addEventListener("DOMContentLoaded", function () {
  // function generateMisclickReport() {

  //     var dataToSave = {
  //         prIncreaseSize: prIncreaseSize
  //     };

  //     localStorage.setItem('userData', JSON.stringify(dataToSave));
  //     //alert('Data saved in local storage.');
  // }

  document.getElementById("closeButton").addEventListener("click", function () {
    //generateMisclickReport();

    var prMisclickTrue = 0;
    var prMisclickFalse = 0;
    var prBadRatingTrue = 0;
    var prBadRatingFalse = 0;

    var prMisclickTrueBadRatingFalse = 0.4;
    var prMisclickFalseBadRatingTrue = 0.6;
    var prIncreaseSize = 0;

    var totalClickCycle = 0;
    var misclickCycles = 0;
    var totalRating = 0;
    var badRating = 0;

    var storedData = localStorage.getItem("userData");
    if (storedData) {
      var parsedData = JSON.parse(storedData);
      totalClickCycle = parsedData.totalClickCycle;
      misclickCycles = parsedData.misClickCycles;
      totalRating = parsedData.totalRating;
      badRating = parsedData.badRating;
    }

    prMisclickTrue = misclickCycles / totalClickCycle;
    prMisclickFalse = 1 - prMisclickTrue;
    prBadRatingTrue = badRating / totalRating;
    prBadRatingFalse = 1 - prBadRatingTrue;
    console.log("prMisclickTrue: " + prMisclickTrue);
    console.log("prBadratingTrue: " + prBadRatingTrue);

    prBadRatingFalseGivenTextTrue =
      prMisclickTrueBadRatingFalse * prMisclickTrue * prBadRatingFalse;
    console.log("prBadRatingFalseGivenTextTrue" + prBadRatingFalseGivenTextTrue);
    
    prTextTrue =
      prMisclickTrue * prBadRatingTrue +
      prMisclickTrueBadRatingFalse * prMisclickTrue * prBadRatingFalse +
      prMisclickFalseBadRatingTrue * prMisclickFalse * prBadRatingTrue;
    console.log("prTextTrue" + prTextTrue);

    prIncreaseSize = prBadRatingFalseGivenTextTrue / prTextTrue;
    console.log("Increase size: " + prIncreaseSize);
  });
});
