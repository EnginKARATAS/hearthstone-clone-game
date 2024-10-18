import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "../game/gameSlice.ts";
import "./Menu.css";
 
export default function Menu(){
    const gameState = useSelector((state) => state.game.gameState);
    const dispatch = useDispatch();
    return(gameState === "menu" && (
        <div className="bg-outer absolute z-20">
            <div className="menu flex items-center justify-center text-center flex flex-col space-y-4 gap-3" >
                <p onClick={() => dispatch(setGameState("game"))} className="px-4 py-2 text-white menu-item">Start Game</p>
                <p onClick={() => dispatch(setGameState("settings"))} className="px-4 py-2 text-white menu-item">Settings</p>
                <p onClick={() => dispatch(setGameState("contact"))} className="px-4 py-2 text-white menu-item">Contact</p>
                <p onClick={() => dispatch(setGameState("credits"))} className="px-4 py-2 text-white menu-item">Credits</p>
            </div>
        </div>
    ))
}