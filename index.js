console.log('hello')

var modal = document.getElementById('pop')
var closer = document.getElementById('closer')


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

closer.addEventListener('click', function(){
	modal.style.display = "none";
})

