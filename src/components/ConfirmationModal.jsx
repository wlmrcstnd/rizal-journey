import React from 'react';

const ConfirmationModal = ({ choice, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-slate-800 rounded-2xl p-8 max-w-lg mx-4 border-2 border-purple-500 shadow-2xl animate-slideIn">
        <h3 className="text-2xl font-bold text-white mb-4">
          ⚠️ Confirm Your Choice
        </h3>
        <p className="text-gray-300 mb-2">
          You are about to choose:
        </p>
        <div className="bg-purple-900/30 rounded-xl p-4 mb-6 border-l-4 border-purple-400">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{choice.icon}</span>
            <p className="text-white font-semibold text-lg">
              {choice.text}
            </p>
          </div>
        </div>
        <p className="text-yellow-300 text-sm mb-6">
          💡 This decision will shape your journey through history. Are you sure?
        </p>
        <div className="flex gap-4">
          <button
            onClick={onConfirm}
            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all transform hover:scale-105"
          >
            ✓ Yes, Proceed
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-slate-600 hover:bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold transition-all"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
