const isDebugging = true;
export default {
  enemyTurnTime: 6000,
  enemyHandToBoardTime: 1000,
  enemyCloseTurnTime: 2000,
  totalEnemyWaitTime: 5000,
  yourTurnPopupWaitTime: 700,

  //for debugging 2000 1000 700 
  debugReducedTime: isDebugging ? 2000 : 0,
  debugReducedTimeShort: isDebugging ? 1000 : 0,
  debugReducedTimeLoading: isDebugging ? 7000 : 0,

};