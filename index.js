console.log('hello')

var modal = document.getElementById('pop')
var close = document.getElementById('close')


setTimeout(function() {
	modal.style.display = "block";
	modal.fadeIn("slow");
}, 3000);

// function xout(){
// 	modal.addEventListener()
// }

// close.onclick = function() {
//     modal.style.display = "none";
// }

close.addEventListener('click', function(){
	modal.style.display = "none";
})

