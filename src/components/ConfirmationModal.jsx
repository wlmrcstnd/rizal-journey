import React from 'react';

const ConfirmationModal = ({ choice, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-3 sm:p-4">
      <div className="bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-lg w-full mx-3 sm:mx-4 border-2 border-purple-500 shadow-2xl animate-slideIn max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
          ⚠️ Confirm Your Choice
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-2">
          You are about to choose:
        </p>
        <div className="bg-purple-900/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border-l-4 border-purple-400">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl flex-shrink-0">{choice.icon}</span>
            <p className="text-white font-semibold text-base sm:text-lg">
              {choice.text}
            </p>
          </div>
        </div>
        <p className="text-yellow-300 text-xs sm:text-sm mb-4 sm:mb-6">
          💡 This decision will shape your journey through history. Are you sure?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={onConfirm}
            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:scale-95 text-white py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            ✓ Yes, Proceed
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-slate-600 hover:bg-slate-700 active:scale-95 text-white py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all text-sm sm:text-base"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
