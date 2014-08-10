var QuestionService = function QuestionService($http, $q) {
    var QuestionService = {};
    QuestionService.getQuestions = function getQuestions() {
        var deferred = $q.defer();
        $http
            .get('/questions')
            .success(function(response) {
                deferred.resolve(response.questions);
            });
        return deferred.promise;
    };
    return QuestionService;
}

angular
    .module('family-feud')
    .service('QuestionService', QuestionService);