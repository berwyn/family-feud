var GameCtrl = function GameCtrl(QuestionService) {

    var vm = this;

    QuestionService.getQuestions()
        .then(function(questions) {
            vm.questions = questions;
            vm.currentQuestion = questions[0];
        })

    this.currentQuestion = {};
    this.setCurrentQuestion = function setCurrentQuestion(idx) {
        this.currentQuestion = questions[idx];
    };

};

angular
    .module('family-feud')
    .controller('GameCtrl', GameCtrl);