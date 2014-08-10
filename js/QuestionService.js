var QuestionService = function QuestionService($http, $q) {
    var QuestionServiceHost = {};
    QuestionServiceHost.getQuestions = function getQuestions() {
        var deferred = $q.defer();
        $http
            .get('/questions')
            .success(function(response) {
                deferred.resolve(response.questions);
            });
        return deferred.promise;
    };
    return QuestionServiceHost;
};

angular
    .module('family-feud')
    .service('QuestionService', QuestionService);