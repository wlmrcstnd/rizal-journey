import React from 'react';

const GoodChoiceModal = ({ data, onProceed }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn p-3 sm:p-4">
      <div className="bg-gradient-to-br from-green-900 to-emerald-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl w-full mx-3 sm:mx-4 border-2 sm:border-4 border-green-400 shadow-2xl animate-slideIn max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-4 sm:mb-6">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 animate-pulse">✨</div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            {data.title}
          </h3>
          <p className="text-green-200 text-base sm:text-lg md:text-xl font-semibold">
            {data.message}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-yellow-400">
            <p className="text-xs font-bold text-yellow-300 mb-2">📚 HISTORICAL CONTEXT:</p>
            <p className="text-white text-xs sm:text-sm leading-relaxed">
              {data.historicalContext}
            </p>
          </div>

          <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-blue-400">
            <p className="text-xs font-bold text-blue-300 mb-2">📊 PROGRESS:</p>
            <p className="text-white text-xs sm:text-sm font-semibold">
              {data.elementProgress}
            </p>
          </div>

          <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-400">
            <p className="text-xs font-bold text-purple-300 mb-2">🔮 WHAT'S NEXT:</p>
            <p className="text-white text-xs sm:text-sm leading-relaxed">
              {data.nextStep}
            </p>
          </div>

          <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-orange-400">
            <p className="text-xs font-bold text-orange-300 mb-2">💥 IMPACT:</p>
            <p className="text-white text-xs sm:text-sm leading-relaxed">
              {data.impact}
            </p>
          </div>
        </div>

        <div className="bg-green-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-green-400">
          <p className="text-green-200 text-xs sm:text-sm text-center font-semibold">
            🔒 This choice will be locked. You're on the historical path - commit to seeing it through!
          </p>
        </div>

        <button
          onClick={onProceed}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 active:scale-95 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          ✓ Continue on the Historical Path →
        </button>
      </div>
    </div>
  );
};

export default GoodChoiceModal;
