const isDebugging = false;
export default {
  enemyTurnTime: isDebugging ? 6000 : 0,
  enemyHandToBoardTime: isDebugging ? 1000 : 0,
  enemyCloseTurnTime: isDebugging ? 2000 : 0,
  totalEnemyWaitTime: isDebugging ? 5000 : 0,
  yourTurnPopupWaitTime: isDebugging ? 700 : 0,

  //for debugging 2000 1000 700 
  debugReducedTime: isDebugging ? 2000 : 0,
  debugReducedTimeShort: isDebugging ? 1000 : 0,
  debugReducedTimeLoading: isDebugging ? 7000 : 0,

};