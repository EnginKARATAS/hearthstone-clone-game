import "./EndTurnButton.css";
import { useDispatch } from "react-redux";
import {
  closeYourTurn,
  resetInGameMana,
  increment,
  openYourTurn,
} from "../../counter/counterSlice";
import { useSelector } from "react-redux";
import {
  addHealth,
  syncCardBaseLenght,
  advanceScenarioMove,
  drawCard,
  playCardToBoard,
  clickBoardCard,
  clickedProfile,
  makeLastCardsPlayable,
} from "../../hand/handSlice";
import { useEffect, useCallback } from "react";
import { useState } from "react";
import GameConstants from "../../../GameConstants";
import { WINDOW_HEIGHT } from "../../../../constants/dimensions";

export default function EndTurnButton() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const dispatch = useDispatch();
  const dispatchActions = useCallback((actions) => {
    actions.forEach((action) => dispatch(action));
  }, [dispatch]);
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const playerCardBaseCount = useSelector(
    (state) => state.hand.cardBaseCount.player
  );
  const enemyCardBaseCount = useSelector(
    (state) => state.hand.cardBaseCount.enemy
  );
  const enemyBoardCard = useSelector((state) => state.hand.board.enemy);
  const playerBoardCard = useSelector((state) => state.hand.board.player);
  const cannotPairedCardCount = enemyBoardCard.length - playerBoardCard.length;
  const [turnCount, setTurnCount] = useState(0);
  const cardCache = useSelector((state) => state.hand.cardCache);
  const enemyHandCard = useSelector((state) => state.hand.hand.enemy);

  useEffect(() => {
    dispatch(syncCardBaseLenght());
  }, [dispatch]);

  const onEndTurnButtonClick = async () => {
    if (isClientTurn === true) {
      dispatchActions([
        advanceScenarioMove(),
        makeLastCardsPlayable("enemy"),
        closeYourTurn(),
      ]);
    }
  };

  const isEnemyLowOnCards = (enemyCardBaseCount, playerCardBaseCount) => {
    if (enemyCardBaseCount <= 0) {
      dispatch(addHealth({ value: -1, player: "enemy" }));
    }
    if (playerCardBaseCount <= 0) {
      dispatch(addHealth({ value: -1, player: "player" }));
    }
    dispatch(syncCardBaseLenght());
  };
  useEffect(() => {
    if (isClientTurn === false) {
      const timer = setTimeout(async () => {
        dispatchActions([
          increment({ player: "enemy" }),
          resetInGameMana({ player: "enemy" }),
          drawCard({ isEnemy: true }),
        ]);

        isEnemyLowOnCards();
        await delay(GameConstants.controlDelayWithDebug(cardCache.length * 2000)).then(async () => {
          if (enemyHandCard.length >= 1)
            dispatch(playCardToBoard({ isEnemy: true }));
          enemyDecide();
          isEnemyLowOnCards(enemyCardBaseCount, playerCardBaseCount);
          await delay(GameConstants.controlDelayWithDebug(enemyBoardCard.length * 2000));
          dispatch(advanceScenarioMove());
          setTurnCount(turnCount + 1);
          dispatchActions([
            makeLastCardsPlayable("player"),
            openYourTurn(),
            increment({ player: "player" }),
            resetInGameMana({ player: "player" }),
            drawCard({ isEnemy: false }),
          ]);
        });
      }, GameConstants.turnDelay);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);
  const shuffleSequenceNoEnemy = Array.from(
    Array(enemyBoardCard.length).keys()
  ).sort(() => Math.random() - 0.5);
  const enemyDecide = async () => {
    if (playerBoardCard.length < 1) {
      for (let i = 0; i < enemyBoardCard.length; i++) {
        await delay(200);
        dispatch(
          clickBoardCard({
            clickedCard: enemyBoardCard[shuffleSequenceNoEnemy[i]],
            actionMaker: "enemy",
          })
        );
        await delay(200);
        dispatch(clickedProfile("player"));
        await delay(200);
      }
      return;
    }

    const pairCount = enemyBoardCard.length - cannotPairedCardCount;
    const shuffleSequence = Array.from(Array(pairCount).keys()).sort(
      () => Math.random() - 0.5
    );
    const shuffleSequenceEnemy = Array.from(
      Array(enemyBoardCard.length).keys()
    ).sort(() => Math.random() - 0.5);

    for (let i = 0; i < enemyBoardCard.length; i++) {
      const enemyCard = enemyBoardCard[shuffleSequenceEnemy[i]];
      if (enemyCard && enemyCard.isPlayedLastTurn) {
        await delay(500);
        dispatch(
          clickBoardCard({
            clickedCard: enemyCard,
            actionMaker: "enemy",
          })
        );
        await delay(500);
        if (i < pairCount) {
          dispatch(
            clickBoardCard({
              clickedCard: playerBoardCard[shuffleSequence[i]],
              actionMaker: "enemy",
            })
          );
        } else {
          dispatch(clickedProfile("player"));
        }
        await delay(500);
      }
    }
  };

  return (
    <div className="end-turn">
      <button
        style={{
          backgroundImage: isClientTurn
            ? "url('/menu/turn/end-turn.png')"
            : "url('/menu/turn/enemy-turn.png')",
          backgroundSize: WINDOW_HEIGHT > 768 ? 113 : 60,
          backgroundRepeat: "no-repeat",
          transition: "all 0.3s ease-in-out",
        }}
        className="end-turn-button m-3"
        onClick={onEndTurnButtonClick}
      ></button>
    </div>
  );
}
