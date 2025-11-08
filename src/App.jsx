import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionModal from './components/QuestionModal';
import { initialGameData } from './data/gameData';
import './App.css';

function App() {
  const [gameData, setGameData] = useState(initialGameData);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Play audio helper
  const playAudio = (audioFile) => {
    try {
      const audio = new Audio(audioFile);
      audio.play().catch(err => console.log('Audio play failed:', err));
    } catch (err) {
      console.log('Audio error:', err);
    }
  };

  // Initialize game
  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    setGameStarted(true);
    updatePlayerTurn(0);
    playAudio('/assets/audio/gamestart.wav');
  };

  const updatePlayerTurn = (playerIndex) => {
    setGameData(prevData => ({
      ...prevData,
      players: prevData.players.map((player, idx) => ({
        ...player,
        is_turn: idx === playerIndex
      }))
    }));
    setCurrentPlayer(playerIndex);
  };

  const switchTeam = () => {
    const nextPlayer = (currentPlayer + 1) % gameData.players.length;
    updatePlayerTurn(nextPlayer);
  };

  const addPoints = (points) => {
    setGameData(prevData => ({
      ...prevData,
      players: prevData.players.map((player, idx) =>
        idx === currentPlayer
          ? { ...player, score: player.score + points }
          : player
      )
    }));
    switchTeam();
  };

  const handleQuestionClick = (categoryIndex, questionIndex) => {
    const question = gameData.categories[categoryIndex].data[questionIndex];
    if (question.disabled) return;

    // Mark question as disabled
    setGameData(prevData => ({
      ...prevData,
      categories: prevData.categories.map((cat, cIdx) =>
        cIdx === categoryIndex
          ? {
              ...cat,
              data: cat.data.map((q, qIdx) =>
                qIdx === questionIndex ? { ...q, disabled: true } : q
              )
            }
          : cat
      )
    }));

    setSelectedQuestion(question);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedQuestion(null);
  };

  const getNextTeamName = () => {
    const nextPlayerIndex = (currentPlayer + 1) % gameData.players.length;
    return gameData.players[nextPlayerIndex].name;
  };

  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h1 className="game-title">Disheopardy</h1>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Container>
              {gameData.categories.map((category, categoryIndex) => (
                <Row key={categoryIndex}>
                  <div className="col-md-3 category">{category.title}</div>
                  {category.data.map((question, questionIndex) => (
                    <Button
                      key={questionIndex}
                      className={`col-md-2 ${question.disabled ? 'q-inactive' : 'q-default'}`}
                      onClick={() => handleQuestionClick(categoryIndex, questionIndex)}
                      disabled={question.disabled}
                    >
                      {question.level}
                    </Button>
                  ))}
                </Row>
              ))}
            </Container>
          </Col>
        </Row>

        <br /><br />

        {/* Player Box Row */}
        <Row>
          <Col md={12}>
            <Container>
              <Row>
                <div className="col-md-1"></div>
                {gameData.players.map((team, index) => (
                  <div
                    key={index}
                    className={`col-md-2 ${team.is_turn ? 'p-active' : 'p-inactive'}`}
                    style={{ marginRight: '10px' }}
                  >
                    <div className="row p-score-box">
                      <div className="col-md-3">$</div>
                      <div className="col-md-9 p-score-box-score">{team.score}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-name-box">{team.name}</div>
                    </div>
                  </div>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <QuestionModal
        show={showModal}
        question={selectedQuestion}
        onClose={handleCloseModal}
        onAddPoints={addPoints}
        onNextTeam={switchTeam}
        nextTeamName={getNextTeamName()}
      />
    </div>
  );
}

export default App;
