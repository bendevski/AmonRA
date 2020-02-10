import React, {useState} from 'react';



export default function Attitude(){
    const [text, setText] = useState(0)
	function flipInfo(e){
		setText(!text);
	}

	if (text)
	return(
	<div className="Attitude">
	
	<button id="but" onClick={flipInfo}><p id="butext">Click me for Media</p></button>	
        <div className="text">
                <h1>Attitude</h1>
                <p>Coming in, I had no idea how to dance</p>
                <p>As you can notice, I still have no idea how to dance</p>
                <p>Thankfully, I am now a part of a community that makes me want to continue trying to do so</p>
        </div>
	</div>
	)
	return(
        
	
    
        <div className="Attitude">
<button id="but" onClick={flipInfo}><p id="butext">Click me for info</p></button>	            
            <div className="imgs">
                <div classname="Vids">
                    <iframe src="https://drive.google.com/file/d/1g3kEiBPz6o--di2uzjNRw4bMTpWtzaPy/preview" width="640" height="480"></iframe>
                    <iframe src="https://drive.google.com/file/d/1VxEquwL7PzKT5AbKw3x5g8Bq8MZlJQQF/preview" width="640" height="480"></iframe>
                    <iframe src="https://drive.google.com/file/d/1YvlLPO3kiM1_-tnia12lLDf9ETVDL0IB/preview" width="640" height="480"></iframe>
                    <iframe src="https://drive.google.com/file/d/12-GgBh6nILvKJbZV-sdFsj4pVH3pIH7g/preview" width="640" height="480"></iframe>
                </div>
                <div className="Pics">
                    <img src="https://drive.google.com/uc?id=1ZeKcsmffQ1qWk6Cw795g5cSw_POmULap"></img>
                </div>
            </div>
        </div>
        

    )
}
