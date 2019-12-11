document.addEventListener('DOMContentLoaded', function(){
  var popup = document.querySelector('#popup');
  var popupBg = document.querySelector('#popup-bg');
  var close = document.querySelector('#close');
  popupBg.addEventListener('click', function(){
    hide(popup);
  });
});
function show(el){
  el.style.display = 'block';
}
function hide(el){
  el.style.display = 'none';
}

document.body.addEventListener('click', function (evt) {
    if (evt.target.className.includes('three-columns')) {
      document.getElementById('targetImage').src = event.target.src;
      show(popup);
    }
}, false);
