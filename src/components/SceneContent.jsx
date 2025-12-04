import React from 'react';

const SceneContent = ({ 
  scene, 
  currentScene, 
  endingReached, 
  history,
  showConfirmation,
  lockedChoices,
  getEndingColor,
  getDecisionLabel,
  shuffleArray,
  handleChoiceClick
}) => {
  return (
    <div className="bg-slate-800/70 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl animate-fadeIn">
      {/* Scene Header */}
      <div className={`bg-gradient-to-r ${getEndingColor()} rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 text-center`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
          {scene.title}
        </h2>
        <p className="text-white/90 text-base sm:text-lg">
          📅 {scene.year}
        </p>
        {lockedChoices.includes(currentScene) && (
          <div className="mt-3 inline-block bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-semibold">
            🔒 Historical Path - Choice Locked
          </div>
        )}
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Main Story */}
        <div className="bg-slate-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-purple-500">
          <p className="text-xs font-bold text-purple-300 mb-2">📜 MAIN STORY:</p>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            {scene.story}
          </p>
        </div>

        {/* Historical Context */}
        {scene.context && (
          <div className="bg-indigo-900/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-indigo-400">
            <p className="text-xs font-bold text-indigo-300 mb-2">📚 HISTORICAL CONTEXT:</p>
            <p className="text-indigo-100 text-sm leading-relaxed">
              {scene.context}
            </p>
          </div>
        )}

        {/* Additional Info (Deeper Knowledge) */}
        {scene.additionalInfo && (
          <div className="bg-purple-900/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-purple-400">
            <p className="text-xs font-bold text-purple-300 mb-2">📖 DEEPER KNOWLEDGE:</p>
            <p className="text-purple-100 text-sm leading-relaxed">
              {scene.additionalInfo}
            </p>
          </div>
        )}

        {/* Impact (for endings) */}
        {scene.impact && (
          <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5">
            <p className="text-xs font-bold text-slate-300 mb-2">💥 IMPACT:</p>
            <p className="text-slate-100 text-sm leading-relaxed">
              {scene.impact}
            </p>
          </div>
        )}

        {/* Quote (for ideal ending) */}
        {scene.quote && (
          <div className="bg-white/10 rounded-xl p-5 italic border-l-4 border-yellow-400">
            <p className="text-yellow-100 text-base">
              "{scene.quote}"
            </p>
          </div>
        )}

        {/* Decision Path (for endings) */}
        {scene.isEnding && (
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-5">
            <p className="text-sm font-bold text-purple-300 mb-4">🗺️ YOUR DECISION PATH:</p>
            <div className="space-y-2">
              {history.map((sceneId, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-slideIn" 
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-semibold">
                      {getDecisionLabel(sceneId)}
                    </div>
                    {index < history.length - 1 && (
                      <div className="text-purple-400 text-xs mt-1">↓</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rubric Elements Coverage */}
        {scene.rubricElements && (
          <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-5">
            <p className="text-sm font-bold text-indigo-300 mb-4">📋 RUBRIC ELEMENTS COVERAGE:</p>
            <div className="space-y-3">
              {scene.rubricElements.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 animate-slideIn" 
                  style={{animationDelay: `${i * 0.1}s`}}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                    item.covered === true ? 'bg-green-500 text-white' : 
                    item.covered === 'partial' ? 'bg-yellow-500 text-black' : 
                    'bg-red-500 text-white'
                  }`}>
                    {item.covered === true ? '✓' : item.covered === 'partial' ? '~' : '✗'}
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-semibold">{item.element}</div>
                    <div className="text-gray-300 text-xs mt-1">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Analysis */}
        {scene.detailedAnalysis && (
          <div className="bg-slate-800/50 border-l-4 border-slate-400 rounded-r-xl p-5">
            <p className="text-xs font-bold text-slate-300 mb-2">📖 DETAILED ANALYSIS:</p>
            <p className="text-slate-100 text-sm leading-relaxed">
              {scene.detailedAnalysis}
            </p>
          </div>
        )}

        {/* Achievements */}
        {scene.achievements && (
          <div className="bg-white/10 rounded-xl p-5">
            <p className="text-sm font-bold text-white mb-3">🏆 ACHIEVEMENTS UNLOCKED:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {scene.achievements.map((achievement, i) => (
                <div 
                  key={i} 
                  className="text-green-300 text-sm animate-slideIn" 
                  style={{animationDelay: `${i * 0.1}s`}}
                >
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Question */}
        {scene.question && !scene.isEnding && (
          <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30">
            <p className="text-purple-200 text-lg font-semibold text-center">
              ❓ {scene.question}
            </p>
          </div>
        )}

        {/* Choices */}
        {scene.choices && !scene.isEnding && !showConfirmation && (
          <div className="space-y-3 sm:space-y-4">
            {shuffleArray(scene.choices).map((choice, index) => (
              <button
                key={choice.id}
                onClick={() => handleChoiceClick(choice)}
                className="choice-btn w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-purple-700 hover:to-indigo-700 border-2 border-slate-600 hover:border-purple-400 rounded-lg sm:rounded-xl p-4 sm:p-5 text-left transition-all animate-slideIn active:scale-98"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{choice.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-base sm:text-lg mb-1">
                      {choice.text}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Choose this path →
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Ending Message */}
        {scene.isEnding && (
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border-2 border-purple-400">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              {endingReached === 'ideal' && '⭐ IDEAL ENDING ACHIEVED! ⭐'}
              {endingReached === 'neutral' && '⚖️ NEUTRAL ENDING'}
              {endingReached === 'bad' && '💔 CAUTIONARY ENDING'}
            </p>
            <p className="text-purple-200 text-xs sm:text-sm">
              Your journey has concluded. Click "🔄 Restart" to try different choices and discover other paths through history.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SceneContent;
