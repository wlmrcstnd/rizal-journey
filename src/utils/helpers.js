export const getDecisionLabel = (sceneId) => {
  const labels = {
    'start': '🌅 Beginning',
    'd1_violence': '⚔️ Choose Violence',
    'd1_comfort': '💰 Choose Comfort',
    'd1_education': '📚 Choose Education',
    'd2_stay': '🏠 Stay in Philippines',
    'd2_quit': '❌ Quit the Movement',
    'd2_europe': '✈️ Go to Europe',
    'd3_armed': '⚔️ Armed Resistance',
    'd3_lobby': '🤝 Spanish Lobbying',
    'd3_write': '✍️ Write Noli Me Tangere',
    'd4_fight': '🛡️ Stay and Fight',
    'd4_flee': '🏃 Flee Abroad',
    'd4_strategic': '🎯 Strategic Retreat',
    'd5_uprising': '🔥 Join Uprising',
    'd5_abandon': '❌ Abandon Cause',
    'd5_preparation': '⏰ Continue Preparation',
    'd6_escape': '🏃 Escape Dapitan',
    'd6_bitter': '😠 Become Bitter',
    'd6_serve': '🏥 Serve Community',
    'd7_mercy': '🙏 Beg for Mercy',
    'd7_escape': '🏃 Attempt Escape',
    'd7_martyr': '⭐ Accept Martyrdom'
  };
  return labels[sceneId] || sceneId;
};

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
