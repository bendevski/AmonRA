import React, {useState} from 'react';



export default function Friends(){
    const [text, setText] = useState(0)
	function flipInfo(e){
		setText(!text);
	}

	if (text)
	return(
	<div className="Friends">

        <button id="but" onClick={flipInfo}><p id="butext">Media</p></button>
	<div className="text">
            <p>I have some friends</p>
            <p>They're really really really good friends</p>
            <p>I'm really thankful for the NYUAD community allowing me to meet people like this</p>

        </div>
	</div>
	)
	return(
        
	
    
        <div className="Friends">
                    <button id="but" onClick={flipInfo}><p id="butext">Click me for info</p></button>

            <div className="imgs">
                <img src="https://drive.google.com/uc?id=1PKHcVjQwmx-CV8zi_RmtuQyYnxZRHiDH"></img>
                <img id="flip" src="https://drive.google.com/uc?id=1zV5AO8xX65S0rWB_x9UjZtn707inO3vl"></img>
                <img src="https://drive.google.com/uc?id=1K1c8bQjTzDFz3ResQl9taVCtS7F85pbc"></img>
                <img src="https://drive.google.com/uc?id=1SIRowF6vDEdZSzcYTj1MkRP3a1tjyfi6"></img>
            </div>
        </div>
    )
}
