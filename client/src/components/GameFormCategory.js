import React from "react";
import CategoryQAndA from "./CategoryQAndA";
import GameFormQAndAToolTip from "./GameFormQAndAToolTip";
import GameFormQAndAPreview from "./GameFormQAndAPreview";



const GameFormCategory = props => {
 const {data} = props;

        console.log(data)
        return(
            <div className={'w-25'}>
                <GameFormQAndAPreview data={data} value={200}/>
                <GameFormQAndAPreview data={data} value={400}/>
                <GameFormQAndAPreview data={data} value={600}/>
                <GameFormQAndAPreview data={data} value={800}/>
                <GameFormQAndAPreview data={data} value={1000}/>
            </div>
        )
};
export default GameFormCategory;