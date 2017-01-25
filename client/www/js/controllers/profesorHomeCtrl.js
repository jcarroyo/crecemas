angular.module('crecemasCtrl')
    .controller('profesorHomeCtrl', function($scope, $state){

        $scope.cursosAulas = [
            {
                id: 1,
                curso: "Matemáticas",
                aula: "5S-A"
            },
            {
                id: 2,
                curso: "Matemáticas",
                aula: "5S-B"
            },
            {
                id: 3,
                curso: "Álgebra",
                aula: "4S-A"
            },
            {
                id: 4,
                curso: "Álgebra",
                aula: "4S-B"
            }
        ];
        $scope.asignaciones = [
            {
                tarea: "Página 15 impares",
                cursoAula: "Matemáticas 3S-B",
                fecha: "28/06/2015"
            },
            {
                tarea: "Página 20 impares",
                cursoAula: "Álgebra 4S-A",
                fecha: "22/06/2015"
            },
            {
                tarea: "Página 18: 1,2,3 y 4",
                cursoAula: "Aritmética 3S-B",
                fecha: "22/06/2015"
            },
            {
                tarea: "Página 32",
                cursoAula: "Geometría 5S-A",
                fecha: "18/05/2015"
            }
        ];

});