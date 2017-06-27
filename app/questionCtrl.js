atmGame.controller('questionCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$interval', 'question', function ($scope, $rootScope, $uibModalInstance, $interval, question) {
      $scope.question = question;
      $scope.countdown = 30;
      $scope.state;
      var myinterval;

      $scope.countDown = function () {
         $scope.countDownReset();
         myinterval = $interval(function () {
            if ($scope.countdown <= 0) {
               var audio = new Audio('assets/audio/buzzer.wav');
               audio.play();
               $interval.cancel(myinterval);
            } else {
               $scope.countdown--;
            }

         }, 1000, 0);
      };

      $scope.countDownReset = function () {
         $scope.countdown = 30;
      };

      $scope.checkAnswer = function (answer) {
         if (answer.is_correct) {
            var audio = new Audio('assets/audio/success.wav');
            audio.play();
            $scope.state = 'correct';
            $scope.result = "You're Correct!!!";
            $interval.cancel(myinterval);
            $scope.revealAnswer();
         } else {
            var audio = new Audio('assets/audio/lose.wav');
            audio.play();
            if ($scope.state === 'nexttry') {
               $scope.revealAnswer();
               $scope.state = "no_more";
               $scope.result = "Oh Noes! No more guesses! "+$scope.nextTeam()+" choose another question!";
               $interval.cancel(myinterval);
            } else {
               $scope.state = 'incorrect';
               $scope.result = "ERRRRR Wrong!!! "+$scope.nextTeam()+" you're UP!";
               answer.disabled = true;
               $interval.cancel(myinterval);
            }
         }
      };

      $scope.revealAnswer = function () {
         for (i = 0; i <= 4; i++) {
            if (!$scope.question.options[i].is_correct) {
               $scope.question.options[i].disabled = true;
            }
         }
      };

      $scope.award = function () {
         $rootScope.GameManager('addPoints', question.value);
         console.log("I gave points");
         $uibModalInstance.close();
      };

      $scope.tryagain = function () {
         $rootScope.GameManager("nextTeam");
         $scope.countDown();
         $scope.state = "nexttry";
      };

      $scope.endturn = function () {
         $rootScope.GameManager("nextTeam");
         $uibModalInstance.close();
      };

      $scope.newquestion = function () {
         $uibModalInstance.close();
      };
      
      $scope.nextTeam = function (){
        if($rootScope.currentPlayer !== $rootScope.players.length -1){
           return $rootScope.players[$rootScope.currentPlayer+1].name;
        } else{
           return $rootScope.players[0].name;
        }
      };

   }]);