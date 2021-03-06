
var app = angular.module('universidadApp',[ ]);


app.controller('profesorCtrl', function($scope){
		
	$scope.profesor = profesorData;
	$scope.editando = {};


	$scope.editarProfesor = function(){

		angular.copy( $scope.profesor, $scope.editando );

	}

	$scope.guardarProfesor = function() {
		angular.copy($scope.editando, $scope.profesor);
	}

	$scope.cancelarFormulario = function() {
		$scope.editando = {};
	}
	
});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante. Mi nombre es Juan Carlos, encantado de conocerte. Soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. ¡Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!",
	edad: 47,
	foto: "img/juancarlos.jpg"
}