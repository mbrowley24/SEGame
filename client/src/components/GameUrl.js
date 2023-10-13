import React, {useState} from "react";




const GameUrl = props => {
    const {game} = props;
    const [isCopied, setIsCopied] = useState(false);



    const copyToClipboard = async () => {
        
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(game.joinId);
        } else {
            return document.execCommand('copy', true, game.joinId);
        }
    };

    const copy = () => {
        copyToClipboard().then(() => {
            setIsCopied(true);
            
            setTimeout(() => {
                setIsCopied(false);
            
            }, 1500);
        }).catch(err => {});
    }

    return(
        <div className="mb-2">
            <button className="btn-small"
                        onClick={copy}
                    >
                    {isCopied ? "Copied!" : "Game Code"}
            </button>
        </div>
        
    )
};

export default GameUrl;