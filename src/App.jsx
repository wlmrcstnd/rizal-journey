import React, { useState } from 'react';
import scenes from './data/scenes';
import { goodChoices } from './data/goodChoices';
import { getDecisionLabel, shuffleArray } from './utils/helpers';
import ConfirmationModal from './components/ConfirmationModal';
import GoodChoiceModal from './components/GoodChoiceModal';
import SceneContent from './components/SceneContent';
import Navigation from './components/Navigation';

function App() {
  const [currentScene, setCurrentScene] = useState('start');
  const [history, setHistory] = useState(['start']);
  const [endingReached, setEndingReached] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [pendingChoice, setPendingChoice] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showGoodChoice, setShowGoodChoice] = useState(false);
  const [goodChoiceData, setGoodChoiceData] = useState(null);
  const [lockedChoices, setLockedChoices] = useState([]);

  const handleChoiceClick = (choice) => {
    setPendingChoice(choice);
    setShowConfirmation(true);
  };

  const confirmChoice = () => {
    if (pendingChoice) {
      if (goodChoices[pendingChoice.id]) {
        setGoodChoiceData(goodChoices[pendingChoice.id]);
        setShowGoodChoice(true);
        setShowConfirmation(false);
      } else {
        setHistory([...history, pendingChoice.id]);
        setCurrentScene(pendingChoice.id);
        
        if (scenes[pendingChoice.id]?.isEnding) {
          setEndingReached(scenes[pendingChoice.id].endingType);
        }
        setShowConfirmation(false);
        setPendingChoice(null);
      }
    }
  };

  const proceedAfterGoodChoice = () => {
    if (pendingChoice) {
      setHistory([...history, pendingChoice.id]);
      setCurrentScene(pendingChoice.id);
      setLockedChoices([...lockedChoices, currentScene]);
      
      if (scenes[pendingChoice.id]?.isEnding) {
        setEndingReached(scenes[pendingChoice.id].endingType);
      }
    }
    setShowGoodChoice(false);
    setGoodChoiceData(null);
    setPendingChoice(null);
  };

  const cancelChoice = () => {
    setShowConfirmation(false);
    setPendingChoice(null);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousScene = newHistory[newHistory.length - 1];
      
      if (lockedChoices.includes(previousScene)) {
        alert('⚠️ You cannot go back! You made a commitment to the historical path. Once you choose the right path, you must see it through to the end.');
        return;
      }
      
      setHistory(newHistory);
      setCurrentScene(previousScene);
      setEndingReached(null);
      setShowConfirmation(false);
      setPendingChoice(null);
    }
  };

  const restart = () => {
    setCurrentScene('start');
    setHistory(['start']);
    setEndingReached(null);
    setShowConfirmation(false);
    setPendingChoice(null);
    setLockedChoices([]);
  };

  const jumpTo = (sceneId) => {
    if (lockedChoices.includes(sceneId)) {
      alert('⚠️ This choice is locked! You\'ve committed to the historical path and cannot revisit this decision.');
      return;
    }
    
    const index = history.indexOf(sceneId);
    if (index !== -1) {
      setHistory(history.slice(0, index + 1));
      setCurrentScene(sceneId);
      setEndingReached(null);
    }
  };

  const scene = scenes[currentScene];

  if (!scene) {
    return <div className="text-white p-8">Scene not found</div>;
  }

  const getEndingColor = () => {
    if (endingReached === 'ideal') return 'from-green-600 to-emerald-700';
    if (endingReached === 'neutral') return 'from-yellow-600 to-orange-700';
    if (endingReached === 'bad') return 'from-red-600 to-rose-700';
    return 'from-purple-600 to-indigo-700';
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 max-w-4xl">
        <Navigation 
          history={history}
          currentScene={currentScene}
          lockedChoices={lockedChoices}
          endingReached={endingReached}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          getDecisionLabel={getDecisionLabel}
          jumpTo={jumpTo}
          goBack={goBack}
          restart={restart}
        />

        <SceneContent 
          scene={scene}
          currentScene={currentScene}
          endingReached={endingReached}
          history={history}
          showConfirmation={showConfirmation}
          lockedChoices={lockedChoices}
          getEndingColor={getEndingColor}
          getDecisionLabel={getDecisionLabel}
          shuffleArray={shuffleArray}
          handleChoiceClick={handleChoiceClick}
        />

        {showConfirmation && pendingChoice && (
          <ConfirmationModal 
            choice={pendingChoice}
            onConfirm={confirmChoice}
            onCancel={cancelChoice}
          />
        )}

        {showGoodChoice && goodChoiceData && (
          <GoodChoiceModal 
            data={goodChoiceData}
            onProceed={proceedAfterGoodChoice}
          />
        )}
      </div>
    </div>
  );
}

export default App;
