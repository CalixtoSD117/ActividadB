var styleSheet = document.getElementById('style-sheet');
var styleState = 1;

document.getElementById('btn').onclick = function() {
  if (styleState == 1) {
    styleSheet.href = 'Actividad4B.css';
    styleState = 2;
  } else {
    styleSheet.href = 'Actividad4A.css';
    styleState = 1;
  }
};