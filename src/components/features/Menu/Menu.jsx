import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "../game/gameSlice.ts";

export default function Menu(){
    const gameState = useSelector((state) => state.game.gameState);
    const dispatch = useDispatch();
    return(gameState === "menu" && (
        <div>
            <button onClick={() => dispatch(setGameState("game"))}>Start Game</button>
            <button onClick={() => dispatch(setGameState("settings"))}>Settings</button>
            <button onClick={() => dispatch(setGameState("contact"))}>Contact</button>
            <button onClick={() => dispatch(setGameState("credits"))}>Credits</button>
        </div>
    ))
}