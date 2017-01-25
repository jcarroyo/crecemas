angular.module('crecemasCtrl')
    .controller('profesorHomeCtrl', function($scope, $state){

        $scope.cursosAulas = [
            {
                id: 1,
                curso: "Matem�ticas",
                aula: "5S-A"
            },
            {
                id: 2,
                curso: "Matem�ticas",
                aula: "5S-B"
            },
            {
                id: 3,
                curso: "�lgebra",
                aula: "4S-A"
            },
            {
                id: 4,
                curso: "�lgebra",
                aula: "4S-B"
            }
        ];
        $scope.asignaciones = [
            {
                tarea: "P�gina 15 impares",
                cursoAula: "Matem�ticas 3S-B",
                fecha: "28/06/2015"
            },
            {
                tarea: "P�gina 20 impares",
                cursoAula: "�lgebra 4S-A",
                fecha: "22/06/2015"
            },
            {
                tarea: "P�gina 18: 1,2,3 y 4",
                cursoAula: "Aritm�tica 3S-B",
                fecha: "22/06/2015"
            },
            {
                tarea: "P�gina 32",
                cursoAula: "Geometr�a 5S-A",
                fecha: "18/05/2015"
            }
        ];

});