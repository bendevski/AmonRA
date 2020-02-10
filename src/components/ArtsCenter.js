import React, {useState} from 'react';



export default function ArtsCenter(){
	const [text, setText] = useState(0)
	function flipInfo(e){
		setText(!text);
	}

	if (text)
	return(
	

	
	<div className="Arts">
	
	<button id="but" onClick={flipInfo}><p id="butext">Media</p></button>	
		<div className="text">
		
		<h1>Arts Center</h1>
        	        <p>I needed a job on campus</p>
			<p>Arts Center seemed chill enough</p>
			<p>What I got instead of a chill time was life long friends and a community that now holds a special place in my heart</p>

       		</div>
	</div>
	)
	return(
<div>
        <div className="Arts">
	<button id="but" onClick={flipInfo}><p id="butext">Click me for info</p></button>	
	<div className="imgs">
                <img src="https://drive.google.com/uc?id=1yjOVm_LYVyGPzZESd_HquydsQR524qgK"/>
                <img src="https://drive.google.com/uc?id=1hAlm8CHrq7g6496nmtSH3tbphZV2PP9f"/>
                <img src="https://drive.google.com/uc?id=1SiFI90C_drOTrgWIIma57xHLFs_VL0Te"/>
            </div>
        </div>
</div>
    )
}
