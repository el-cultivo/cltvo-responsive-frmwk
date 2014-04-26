(function($) {
	$(document).ready(function(){

		// Variables
		// ---------

		//Meter en este objeto todos los selectores que se usen más de una vez
		var slctr = {
			ventana : $(window),
			menu_fijo : $('.el-menu.fijo'),
		};

		// Meter en este objeto todas las variables Globales
		var glbl = {
			tamano : ''
		}

		// El nombre de la primera sección (usado para mostrar el menú con scrollit)
		var primera_seccion = $('.seccion:first').attr('data-scroll-index');

		//Scrollit
		$.scrollIt({
			onPageChange: function(seccion){
				if(primera_seccion == seccion && slctr.menu_fijo.hasClass('seccion-visible')){
					el_menu('esconde', 'seccion-visible');
				}
				else if( primera_seccion != seccion && !slctr.menu_fijo.hasClass('tamano-visible') ){
					el_menu('muestra', 'seccion-visible');
				}
			}
		});

		escalar();
		slctr.ventana.resize(function(){
			escalar();
		});



		// Funciones
		// ---------

		function escalar(){
			if(slctr.ventana.width() >= 1024){ glbl.tamano = 'desktop'; }
			else if(slctr.ventana.width() >= 768 && slctr.ventana.width() < 1024 ){ glbl.tamano = 'grande'; }
			else if(slctr.ventana.width() >= 568 && slctr.ventana.width() < 768 ){ glbl.tamano = 'medio'; }
			else if(slctr.ventana.width() < 568 ){ glbl.tamano = 'chico'; }

			if( glbl.tamano == 'chico' && !slctr.menu_fijo.hasClass('seccion-visible') ){
				el_menu('muestra', 'tamano-visible');
			}else if( glbl.tamano != 'chico' && !slctr.menu_fijo.hasClass('seccion-visible') ){
				el_menu('esconde', 'tamano-visible');
			}
		}

		function el_menu(accion, clase){

			if(accion == 'esconde'){
				slctr.menu_fijo.slideUp('fast', function(){
					if( clase ){ slctr.menu_fijo.removeClass(clase); }
				});
			}else{
				slctr.menu_fijo.slideDown('fast', function(){
					if( clase ){ slctr.menu_fijo.addClass(clase); }
				});
			}

		}



	});
})(jQuery);