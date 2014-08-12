var GameCtrl = function GameCtrl(QuestionService) {

    var vm = this;

    QuestionService
        .getQuestions()
        .then(function(questions) {
            vm.questions = questions;
            vm.currentQuestion = questions[0];
        });

    vm.currentQuestion = {};
    vm.setCurrentQuestion = function setCurrentQuestion(idx) {
        vm.currentQuestion = vm.questions[idx];
    };

};

angular
    .module('family-feud')
    .controller('GameCtrl', GameCtrl);