import { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

function QuestionModal({ show, question, onClose, onAddPoints, onNextTeam, nextTeamName }) {
  const [countdown, setCountdown] = useState(30);
  const [state, setState] = useState(null);
  const [result, setResult] = useState('');
  const [disabledOptions, setDisabledOptions] = useState([]);
  const intervalRef = useRef(null);

  // Play audio helper
  const playAudio = (audioFile) => {
    try {
      const audio = new Audio(audioFile);
      audio.play().catch(err => console.log('Audio play failed:', err));
    } catch (err) {
      console.log('Audio error:', err);
    }
  };

  // Start countdown when modal opens
  useEffect(() => {
    if (show) {
      startCountdown();
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [show]);

  const startCountdown = () => {
    setCountdown(30);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          playAudio('/assets/audio/buzzer.wav');
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const revealAnswer = () => {
    const disabled = question.options
      .map((option, index) => (!option.is_correct ? index : null))
      .filter(index => index !== null);
    setDisabledOptions(disabled);
  };

  const checkAnswer = (option, index) => {
    if (option.is_correct) {
      playAudio('/assets/audio/success.wav');
      setState('correct');
      setResult("You're Correct!!!");
      stopCountdown();
      revealAnswer();
    } else {
      playAudio('/assets/audio/lose.wav');
      if (state === 'nexttry') {
        revealAnswer();
        setState('no_more');
        setResult(`Oh Noes! No more guesses! ${nextTeamName} choose another question!`);
        stopCountdown();
      } else {
        setState('incorrect');
        setResult(`ERRRRR Wrong!!! ${nextTeamName} you're UP!`);
        setDisabledOptions(prev => [...prev, index]);
        stopCountdown();
      }
    }
  };

  const handleAward = () => {
    onAddPoints(question.value);
    handleClose();
  };

  const handleTryAgain = () => {
    onNextTeam();
    startCountdown();
    setState('nexttry');
  };

  const handleEndTurn = () => {
    onNextTeam();
    handleClose();
  };

  const handleClose = () => {
    stopCountdown();
    setCountdown(30);
    setState(null);
    setResult('');
    setDisabledOptions([]);
    onClose();
  };

  if (!question) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop="static"
      centered
    >
      <Modal.Body className="question-container">
        <div className="row">
          <div className="col-md-10 question-box">{question.question}</div>
          <div className="col-md-2 question-timer">
            <div className="row">Timer</div>
            <div className="row">{countdown}</div>
          </div>
        </div>

        {question.options.map((option, index) => (
          <div
            key={index}
            className={`row question-option-box ${disabledOptions.includes(index) ? 'o-inactive' : 'o-active'}`}
          >
            <button
              className="col-md-10 question-option"
              onClick={() => checkAnswer(option, index)}
              disabled={disabledOptions.includes(index)}
            >
              {option.text}
            </button>
          </div>
        ))}

        <div className="row">
          <h1 style={{ color: 'white' }}>{result}</h1>
        </div>

        <div className="row">
          {state === 'correct' && (
            <div className="col-md-3">
              <Button variant="secondary" onClick={handleAward}>Close</Button>
            </div>
          )}
          {state === 'no_more' && (
            <div className="col-md-3">
              <Button variant="secondary" onClick={handleEndTurn}>Close</Button>
            </div>
          )}
          {state === 'incorrect' && (
            <>
              <div className="col-md-3">
                <Button variant="secondary" onClick={handleTryAgain}>Try this question</Button>
              </div>
              <div className="col-md-3">
                <Button variant="secondary" onClick={handleEndTurn}>Choose a different question</Button>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default QuestionModal;
