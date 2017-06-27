atmGame.controller('atmGameCtrl', ['$scope', '$rootScope', '$uibModal', '$cookies', function ($scope, $rootScope, $uibModal, $cookies) {
    $rootScope.currentPlayer;
    $scope.gameStarted;
    
    $scope.testing = function (player) {
      console.log(player);
    };
    $scope.show_question = function (selected) {
      selected.disabled = true;
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'questionboard.html',
        controller: 'questionCtrl',
        size: 'lg',
        backdrop:'static',
        resolve: {
          question: function () {
            return selected;
          }
        }
      });

      modalInstance.result.then(function (player_result) {
        console.log(player_result);
      });
    };

    $scope.switchTeam = function () {
      if($scope.gameStarted){
         console.log($scope.data.players.length);
        $scope.data.players[$rootScope.currentPlayer].is_turn = false;
        if($rootScope.currentPlayer === $scope.data.players.length -1){
          $rootScope.currentPlayer = 0;
        }else{
          $rootScope.currentPlayer++;
        }
      }else{
        $rootScope.currentPlayer=0;
      }
      $scope.data.players[$rootScope.currentPlayer].is_turn = true;
    };
    
    $scope.addPoints = function(amt){
      $scope.data.players[$rootScope.currentPlayer].score += amt;
    };

    $rootScope.GameManager = function (action,value){
      switch(action){
        case "nextTeam":
          $scope.switchTeam();
          break;
        case"addPoints":
          $scope.addPoints(value);
          $scope.switchTeam();
          break;
        case "startGame":
          $scope.gameStarted = true;
          $rootScope.players = $scope.data.players;
          var audio = new Audio('assets/audio/gamestart.wav');
          audio.play();
          break;
      }
    };

    





    

    //Temporary Static Data Object for the game
    $scope.data = {
      categories: [
        {
          title: "NOC/IM/PMR/ITSD/MSD",
          data: [
            {
              level: "$100",
              value: 100,
              question: "Who's son is on a basketball scholarship for CU?",
              options: [
                {
                  text: "Marcus Bond",
                  is_correct: false
                },
                {
                  text: "Richard White",
                  is_correct: true
                },
                {
                  text: "Doreen Natalewicz",
                  is_correct: false
                },
                {
                  text: "Wade Beckman",
                  is_correct: false
                },
                {
                  text: "Teresa Simpson",
                  is_correct: false
                }
              ]
            },
            {
              level: "$200",
              value: 200,
              question: "Number of Windows servers monitored by NOC?",
              options: [
                {
                  text: "1882",
                  is_correct: true
                },
                {
                  text: "1404",
                  is_correct: false
                },
                {
                  text: "2592",
                  is_correct: false
                },
                {
                  text: "3021",
                  is_correct: false
                },
                {
                  text: "A Billion!!!",
                  is_correct: false
                }
              ]
            },
            {
              level: "$300",
              value: 300,
              question: "ITSD's Average Calls Per Week?",
              options: [
                {
                  text: "300",
                  is_correct: false
                },
                {
                  text: "325",
                  is_correct: false
                },
                {
                  text: "2675",
                  is_correct: false
                },
                {
                  text: "1650",
                  is_correct: true
                },
                {
                  text: "1825",
                  is_correct: false
                }
              ]
            },
            {
              level: "$400",
              value: 400,
              question: "How many IT Communications were sent in 2015?",
              options: [
                {
                  text: "161",
                  is_correct: true
                },
                {
                  text: "233",
                  is_correct: false
                },
                {
                  text: "78",
                  is_correct: false
                },
                {
                  text: "112",
                  is_correct: false
                },
                {
                  text: "86",
                  is_correct: false
                }
              ]
            }
          ]
        }, //End NOC/IM/PMR/ITSD/MSD
        {
          title: "SCM",
          data: [
            {
              level: "$100",
              value: 100,
              question: "If we continue at the rate for Q1 'rapid deployments' how many more deployments will we have for the year as compared to the old release model?",
              options: [
                {
                  text: "2 times as many",
                  is_correct: false
                },
                {
                  text: "5 times as many",
                  is_correct: true
                },
                {
                  text: "10 times as many",
                  is_correct: false
                },
                {
                  text: "20 times as many",
                  is_correct: false
                },
                {
                  text: "50 times as many",
                  is_correct: false
                }
              ]
            },
            {
              level: "$200",
              value: 200,
              question: "How many change requests (SCRs+CRs) were submitted in Q1?",
              options: [
                {
                  text: "527",
                  is_correct: false
                },
                {
                  text: "1054",
                  is_correct: false
                },
                {
                  text: "1669",
                  is_correct: true
                },
                {
                  text: "2004",
                  is_correct: false
                },
                {
                  text: "2491",
                  is_correct: false
                }
              ]
            },
            {
              level: "$300",
              value: 300,
              question: "Since IT operations took over Sling deployments, how much time have we reduced in the deployment process?",
              options: [
                {
                  text: "27%",
                  is_correct: false
                },
                {
                  text: "56%",
                  is_correct: false
                },
                {
                  text: "68%",
                  is_correct: false
                },
                {
                  text: "88%",
                  is_correct: true
                },
                {
                  text: "99%",
                  is_correct: false
                }
              ]
            },
            {
              level: "$400",
              value: 400,
              question: "How many middleware servers (Tomcat & WebMethods) were virtualized and setup for deployments?",
              options: [
                {
                  text: "143",
                  is_correct: false
                },
                {
                  text: "273",
                  is_correct: false
                },
                {
                  text: "316",
                  is_correct: false
                },
                {
                  text: "450",
                  is_correct: true
                },
                {
                  text: "585",
                  is_correct: false
                }
              ]
            }
          ]
        }, //End of SCM
        {
          title: "App/Cloud Support",
          data: [
            {
              level: "$100",
              value: 100,
              question: "Shark Tank in Paul's last ATM, what was Jon's nick name?",
              options: [
                {
                  text: "Multitasking Master",
                  is_correct: false
                },
                {
                  text: "App Guru",
                  is_correct: false
                },
                {
                  text: "Cloud Ninja",
                  is_correct: true
                },
                {
                  text: "Java Junkie",
                  is_correct: false
                },
                {
                  text: "ServiceNow Samurai",
                  is_correct: false
                }
              ]
            },
            {
              level: "$200",
              value: 200,
              question: "Almost all the Dev teams in DISH use this application.",
              options: [
                {
                  text: "FileNet",
                  is_correct: false
                },
                {
                  text: "Kronos",
                  is_correct: false
                },
                {
                  text: "Autosys",
                  is_correct: true
                },
                {
                  text: "Vertex",
                  is_correct: false
                },
                {
                  text: "SecureAuth",
                  is_correct: false
                }
              ]
            },
            {
              level: "$300",
              value: 300,
              question: "How many applications does Application Support.. Suport?",
              options: [
                {
                  text: "70",
                  is_correct: false
                },
                {
                  text: "28",
                  is_correct: true
                },
                {
                  text: "42",
                  is_correct: false
                },
                {
                  text: "0",
                  is_correct: false
                },
                {
                  text: "80",
                  is_correct: false
                }
              ]
            },
            {
              level: "$400",
              value: 400,
              question: "How many tickets are opened in ServiceNow per day?",
              options: [
                {
                  text: "500",
                  is_correct: false
                },
                {
                  text: "700",
                  is_correct: false
                },
                {
                  text: "1200",
                  is_correct: false
                },
                {
                  text: "1900",
                  is_correct: true
                },
                {
                  text: "3000",
                  is_correct: false
                }
              ]
            }
          ]
        }, //End of Application/Cloud Support
        {
          title: "IT Tools",
          data: [
            {
              level: "$100",
              value: 100,
              question: "How many individuals on IT-Tools support ServiceNow?",
              options: [
                {
                  text: "2",
                  is_correct: false
                },
                {
                  text: "10",
                  is_correct: false
                },
                {
                  text: "8",
                  is_correct: false
                },
                {
                  text: "4",
                  is_correct: true
                },
                {
                  text: "7",
                  is_correct: false
                }
              ]
            },
            {
              level: "$200",
              value: 200,
              question: "What is the primary language ServiceNow developers use?",
              options: [
                {
                  text: "PHP",
                  is_correct: false
                },
                {
                  text: "JavaScript",
                  is_correct: true
                },
                {
                  text: "Fortran",
                  is_correct: false
                },
                {
                  text: "Foul Language",
                  is_correct: false
                },
                {
                  text: "Ruby",
                  is_correct: false
                }
              ]
            },
            {
              level: "$300",
              value: 300,
              question: "On average: How many SCOM Alerts are triggered per day?",
              options: [
                {
                  text: "70",
                  is_correct: false
                },
                {
                  text: "28",
                  is_correct: true
                },
                {
                  text: "42",
                  is_correct: false
                },
                {
                  text: "0",
                  is_correct: false
                },
                {
                  text: "80",
                  is_correct: false
                }
              ]
            },
            {
              level: "$400",
              value: 400,
              question: "On Average: How many logs are processed by Qradar each day?",
              options: [
                {
                  text: "500",
                  is_correct: false
                },
                {
                  text: "700",
                  is_correct: false
                },
                {
                  text: "1200",
                  is_correct: false
                },
                {
                  text: "1900",
                  is_correct: true
                },
                {
                  text: "3000",
                  is_correct: false
                }
              ]
            }
          ]
        }, //IT Tools
        {
          title: "Tosha's Fun Facts",
          data: [
            {
              level: "$100",
              value: 100,
              question: "What was Tosha's word of the week before going on vacation?",
              options: [
                {
                  text: "Chachkies",
                  is_correct: true
                },
                {
                  text: "Fiddle Sticks",
                  is_correct: false
                },
                {
                  text: "Bogart",
                  is_correct: false
                },
                {
                  text: "Synergize",
                  is_correct: false
                },
                {
                  text: "Canoodled",
                  is_correct: false
                }
              ]
            },
            {
              level: "$100",
              value: 100,
              question: "What is the primary language ServiceNow developers use?",
              options: [
                {
                  text: "PHP",
                  is_correct: false
                },
                {
                  text: "JavaScript",
                  is_correct: true
                },
                {
                  text: "Fortran",
                  is_correct: false
                },
                {
                  text: "Foul Language",
                  is_correct: false
                },
                {
                  text: "Ruby",
                  is_correct: false
                }
              ]
            },
            {
              level: "$100",
              value: 100,
              question: "On average: How many SCOM Alerts are triggered per day?",
              options: [
                {
                  text: "70",
                  is_correct: false
                },
                {
                  text: "28",
                  is_correct: true
                },
                {
                  text: "42",
                  is_correct: false
                },
                {
                  text: "0",
                  is_correct: false
                },
                {
                  text: "80",
                  is_correct: false
                }
              ]
            },
            {
              level: "$100",
              value: 100,
              question: "On Average: How many logs are processed by Qradar each day?",
              options: [
                {
                  text: "500",
                  is_correct: false
                },
                {
                  text: "700",
                  is_correct: false
                },
                {
                  text: "1200",
                  is_correct: false
                },
                {
                  text: "1900",
                  is_correct: true
                },
                {
                  text: "3000",
                  is_correct: false
                }
              ]
            }
          ]
        } //End of Tosha
      ],
      players: [
        {
          name: "SCM",
          score: 0,
          is_turn: false
        },
        {
          name: "Application/Cloud Support",
          score: 0,
          is_turn: false
        },
        {
          name: "IT Tools",
          score: 0,
          is_turn: false
        },
        {
          name: "Team Awesome",
          score: 0,
          is_turn: false
        }
      ]
    };
  }]);