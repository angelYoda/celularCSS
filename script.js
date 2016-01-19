var botonCel = document.querySelector(".botonCel");
		var bloqueo = document.querySelector(".bloqueo");
		var pantallaCel = document.querySelector(".pantallaCel");
		var reloj = document.querySelector(".reloj");
		var fecha = document.querySelector(".fecha");
		var icons = document.querySelector(".icons");
		var f = document.querySelector("#f");
		var t = document.querySelector("#t");
		var w = document.querySelector("#w");
		var c = document.querySelector("#c");



		botonCel.addEventListener("click", function(){
			bloqueo.style.opacity="0.3";
			bloqueo.style.transition="all 0.3s ease-in";
		});
		botonCel.addEventListener("mouseout", function(){
			bloqueo.style.opacity="1";
			bloqueo.style.transition="all 0.3s ease-out";
		});
		pantallaCel.addEventListener("mouseover", function(){
			bloqueo.style.opacity="0";
			bloqueo.style.transition="all 0.4s ease-in";
			reloj.style.opacity="0";
			fecha.style.opacity="0";
			f.style.opacity="1";
			w.style.opacity="1";
			t.style.opacity="1";
			c.style.opacity="1";
		});
		pantallaCel.addEventListener("click", function(){
			bloqueo.style.opacity="1";
			bloqueo.style.transition="all 0.4s ease-out";
			reloj.style.opacity="1";
			fecha.style.opacity="1";
			f.style.opacity="0";
			w.style.opacity="0";
			t.style.opacity="0";
			c.style.opacity="0";
		});
