// delgetstei ajillah controller
var uiController = (function () {})();

// Sanhuutei ajillah controller
var financeController = (function () {})();
// Programiin holbogch controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log("delgetsees ugugdul avah heseg");
    // 1. Oruulah ugugdliig delgetsees orlj avna
    // 2. Olj avsan ugugdluudee sanhuugiin controllerluu damjuulj tendee hadgalna
    // 3. Olj avsan ugugdluudee web deeree tohiroh hesegt ni gargana.
    // 4. Tusviig tootsoolno
    // 5. Etsiin uldegdel tootsoog delgetsen gargana
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
