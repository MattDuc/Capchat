var canvas1 = document.getElementById("chat1");
var canvas2 = document.getElementById("chat2");
var canvas3 = document.getElementById("chat3");
var canvas4 = document.getElementById("chat4");
var canvas5 = document.getElementById("chat5");
var canvas6 = document.getElementById("chat6");
var canvas7 = document.getElementById("chat7");
var canvas8 = document.getElementById("chat8");
var btn_indice = document.getElementById("btn_indice");
var btn_refresh = document.getElementById("btn_refresh");
var reponse = document.getElementById("reponse")
var contexte1 = canvas1.getContext("2d");
var contexte2 = canvas2.getContext("2d");
var contexte3 = canvas3.getContext("2d");
var contexte4 = canvas4.getContext("2d");
var contexte5 = canvas5.getContext("2d");
var contexte6 = canvas6.getContext("2d");
var contexte7 = canvas7.getContext("2d");
var contexte8 = canvas8.getContext("2d");
var ctx = reponse.getContext("2d")
var t;
var timeChr;
var timeCap;
var indice;
var bon_canvas;
var bon_click;
var faux = 0;
var tentatives = 0;
var bloc = 0;

function Captcha(){
	t = 0;
	clearTimeout(timeCap);
	clearTimeout(timeChr);
	ctx.clearRect(0, 0, reponse.width, reponse.height);
	var tab_neutres = new Array('img/neutres/chat_neutre1.jpg', 'img/neutres/chat_neutre2.jpg', 'img/neutres/chat_neutre3.jpg', 'img/neutres/chat_neutre4.jpg', 
	'img/neutres/chat_neutre5.jpg', 'img/neutres/chat_neutre6.jpg', 'img/neutres/chat_neutre7.jpg', 'img/neutres/chat_neutre8.jpg', 'img/neutres/chat_neutre9.jpg',
	'img/neutres/chat_neutre10.jpg', 'img/neutres/chat_neutre11.jpg', 'img/neutres/chat_neutre12.jpg', 'img/neutres/chat_neutre13.jpg');

	var tab_singuliers = new Array('img/singuliers/chat_amoureux.jpg', 'img/singuliers/chat_bien_coiffe.jpg', 'img/singuliers/chat_borgne.jpg', 'img/singuliers/chat_chapeaute.jpg',
	'img/singuliers/chat_cosmonaute.jpg', 'img/singuliers/chat_cyclope.jpg', 'img/singuliers/chat_licorne.jpg', 'img/singuliers/chat_malade.jpg', 
	'img/singuliers/chat_moustachu.jpg', 'img/singuliers/chat_myope.jpg', 'img/singuliers/chat_pirate.jpg', 'img/singuliers/chat_plongeur.jpg', 'img/singuliers/chat_princesse.jpg',
	'img/singuliers/chat_titi_parisien.jpg');

	var tab_indice = new Array("Saurez vous reconnaître un chat amoureux ?", "Mon chat est une fausse blonde", "Ce chat là a fait une croix sur son oeil", 
	"C'est encore le chat qui porte le chapeau", "Saurez-vous reconnaître le chat de Thomas Pesquet ?", "Ce chat n'a qu'un oeil", 
	"Ne confondons pas une salicorne et un chat-licorne !", "Ce chat là a oublié de se faire vacciner contre la grippe", "Quel type de chat se cache derrière ses moustaches  ?",
	"Chaussez vos lunettes et montrez-moi le chat myope ?", "Après la fiancée du pirate, voici le chat du corsaire", "Chat du grand bleu", 
	"C'est la reine d'Angleterre qui a perdu son chat", "Après les gilets jaunes, voici les foulards rouges");

	a = tab_neutres[Math.floor(Math.random() * tab_neutres.length)];
	tab_neutres.splice(tab_neutres.indexOf(a), 1);
    b = tab_neutres[Math.floor(Math.random() * tab_neutres.length)];
    tab_neutres.splice(tab_neutres.indexOf(b), 1);
    c = tab_neutres[Math.floor(Math.random() * tab_neutres.length)];
    tab_neutres.splice(tab_neutres.indexOf(c), 1);
    d = tab_neutres[Math.floor(Math.random() * tab_neutres.length)];
    tab_neutres.splice(tab_neutres.indexOf(d), 1);
    e = tab_neutres[Math.floor(Math.random() * tab_neutres.length)];
    tab_neutres.splice(tab_neutres.indexOf(e), 1);
    f = tab_neutres[Math.floor(Math.random() * tab_neutres.length)];
    tab_neutres.splice(tab_neutres.indexOf(f), 1);
    g = tab_neutres[Math.floor(Math.random() * tab_neutres.length)];
    h = tab_singuliers[Math.floor(Math.random() * tab_singuliers.length)];
    var lien_validation = h;

    indice =  tab_indice[tab_singuliers.indexOf(h)];

    tab_8images = new Array(a, b, c, d, e, f, g, h);

    a = tab_8images[Math.floor(Math.random() * tab_8images.length)];
	tab_8images.splice(tab_8images.indexOf(a), 1);
    b = tab_8images[Math.floor(Math.random() * tab_8images.length)];
    tab_8images.splice(tab_8images.indexOf(b), 1);
    c = tab_8images[Math.floor(Math.random() * tab_8images.length)];
    tab_8images.splice(tab_8images.indexOf(c), 1);
    d = tab_8images[Math.floor(Math.random() * tab_8images.length)];
    tab_8images.splice(tab_8images.indexOf(d), 1);
    e = tab_8images[Math.floor(Math.random() * tab_8images.length)];
    tab_8images.splice(tab_8images.indexOf(e), 1);
    f = tab_8images[Math.floor(Math.random() * tab_8images.length)];
    tab_8images.splice(tab_8images.indexOf(f), 1);
    g = tab_8images[Math.floor(Math.random() * tab_8images.length)];
    tab_8images.splice(tab_8images.indexOf(g), 1);
    h = tab_8images[Math.floor(Math.random() * tab_8images.length)];


	img1 = new Image();
	img1.src = a;
	if(a == lien_validation){
		bon_canvas = 'canvas1';
	}
	img1.onload = function(){
		contexte1.drawImage(img1, 0, 0, 300, 150);
	}

	img2 = new Image();
	img2.src = b;
	if(b == lien_validation){
		bon_canvas = 'canvas2';
	}
	img2.onload = function(){
		contexte2.drawImage(img2, 0, 0, 300, 150);
	}

	img3 = new Image();
	img3.src = c;
	if(c == lien_validation){
		bon_canvas = 'canvas3';
	}
	img3.onload = function(){
		contexte3.drawImage(img3, 0, 0, 300, 150);
	}

	img4 = new Image();
	img4.src = d;
	if(d == lien_validation){
		bon_canvas = 'canvas4';
	}
	img4.onload = function(){
		contexte4.drawImage(img4, 0, 0, 300, 150);
	}

	img5 = new Image();
	img5.src = e;
	if(e == lien_validation){
		bon_canvas = 'canvas5';
	}
	img5.onload = function(){
		contexte5.drawImage(img5, 0, 0, 300, 150);
	}

	img6 = new Image();
	img6.src = f;
	if(f == lien_validation){
		bon_canvas = 'canvas6';
	}
	img6.onload = function(){
		contexte6.drawImage(img6, 0, 0, 300, 150);
	}

	img7 = new Image();
	img7.src = g;
	if(g == lien_validation){
		bon_canvas = 'canvas7';
	}
	img7.onload = function(){
		contexte7.drawImage(img7, 0, 0, 300, 150);
	}

	img8 = new Image();
	img8.src = h;
	if(h == lien_validation){
		bon_canvas = 'canvas8';
	}
	img8.onload = function(){
		contexte8.drawImage(img8, 0, 0, 300, 150);
	}

	canvas1.addEventListener("mouseover", function(e){
		canvas1.style.cursor = "pointer";
	});
	canvas2.addEventListener("mouseover", function(e){
		canvas2.style.cursor = "pointer";
	});
	canvas3.addEventListener("mouseover", function(e){
		canvas3.style.cursor = "pointer";
	});

	canvas4.addEventListener("mouseover", function(e){
		canvas4.style.cursor = "pointer";
	});
	canvas5.addEventListener("mouseover", function(e){
		canvas5.style.cursor = "pointer";
	});
	canvas6.addEventListener("mouseover", function(e){
		canvas6.style.cursor = "pointer";
	});
	canvas7.addEventListener("mouseover", function(e){
		canvas7.style.cursor = "pointer";
	});
	canvas8.addEventListener("mouseover", function(e){
		canvas8.style.cursor = "pointer";
	});
	canvas1.addEventListener("click", function(e){
		bon_click = 'canvas1';
		Valider();
	});
	canvas2.addEventListener("click", function(e){
		bon_click = 'canvas2';
		Valider();
	});
	canvas3.addEventListener("click", function(e){
		bon_click = 'canvas3';
		Valider();
	});
	canvas4.addEventListener("click", function(e){
		bon_click = 'canvas4';
		Valider();
	});
	canvas5.addEventListener("click", function(e){
		bon_click = 'canvas5';
		Valider();
	});
	canvas6.addEventListener("click", function(e){
		bon_click = 'canvas6';
		Valider();
	});
	canvas7.addEventListener("click", function(e){
		bon_click = 'canvas7';
		Valider();
	});
	canvas8.addEventListener("click", function(e){
		bon_click = 'canvas8';
		Valider();
	});
	btn_indice.addEventListener("mouseover", function(e){
		btn_indice.style.cursor = "pointer";
	});
	btn_refresh.addEventListener("mouseover", function(e){
		btn_refresh.style.cursor = "pointer";
	});

	timeCap = setTimeout(Captcha,30000);
	Chrono();

}

function Chrono(){
	t++;
	document.getElementById("rebours").value = 31-t;
	if(t==30){
		t = 0;
	}else{
		timeChr = setTimeout('Chrono()',1000);
	}
}


function Indice(){
	alert(indice);
}

function Valider(){
	ctx.font = '100px bold times';
	var faux = "Faux";
	var vrai = "Vrai";
	var echec = "Echec"
	tentatives = tentatives + 1;
	if (bon_canvas == bon_click){
		ctx.fillStyle = "#33D028";
		ctx.fillText(vrai, 20, 90);
		setTimeout(function(){location.href="http://localhost:8080"} , 1000);
	}else{
		if (tentatives == 4){
			bloc = 1;
			ctx.fillStyle = "#D02828";
			ctx.fillText(echec, 20, 90);
			setTimeout(function(){location.href="https://www.google.fr/"} , 1000);
		}else if (bloc == 0){
			ctx.fillStyle = "#D02828";
			ctx.fillText(faux, 20, 90);
			setTimeout('Captcha()' , 1000);
		}
	}

	
}
