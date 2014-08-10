function GameDirective() {
    return {
        restrict: 'EA',
        template: [
            '<div class="game row">',
                '<div class="question">',
                    '<h1 class="col-xs-12 title">{{game.currentQuestion.text}}</h1>',
                    '<span class="answer col-xs-4" ',
                        'ng-class="{\'col-xs-offset-1\':$index % 2 === 0, \'col-xs-offset-2\':$index % 2 === 1}" ',
                        'ng-repeat="answer in game.currentQuestion.answers">',
                        '{{ answer.text }}',
                    '</span>',
                '</div>',
            '</div>'
        ].join('')
    };
}

angular
    .module('family-feud')
    .directive('game', GameDirective);