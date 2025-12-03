import React from 'react';

const Navigation = ({ 
  history, 
  currentScene, 
  lockedChoices, 
  endingReached, 
  showHistory, 
  setShowHistory,
  getDecisionLabel,
  jumpTo,
  goBack,
  restart
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 animate-fadeIn">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            🇵🇭 Rizal's Journey
          </h1>
          <p className="text-purple-300 text-sm">
            An Interactive Decision Game Based on Philippine History
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            {showHistory ? 'Hide' : 'Show'} Path
          </button>
          {history.length > 1 && !endingReached && (
            <button
              onClick={goBack}
              className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
            >
              ← Go Back
            </button>
          )}
          <button
            onClick={restart}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            🔄 Restart
          </button>
        </div>
      </div>

      {showHistory && (
        <div className="mt-6 pt-6 border-t border-purple-500/30">
          <p className="text-purple-300 font-semibold mb-3">Your Journey So Far:</p>
          <div className="flex flex-wrap gap-2">
            {history.map((sceneId, index) => (
              <button
                key={index}
                onClick={() => jumpTo(sceneId)}
                disabled={lockedChoices.includes(sceneId)}
                className={`px-3 py-1 rounded-lg text-sm transition-all ${
                  sceneId === currentScene
                    ? 'bg-purple-600 text-white ring-2 ring-white'
                    : lockedChoices.includes(sceneId)
                    ? 'bg-green-600/50 text-green-200 border-2 border-green-400 cursor-not-allowed'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                {lockedChoices.includes(sceneId) && '🔒 '}
                {getDecisionLabel(sceneId)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
