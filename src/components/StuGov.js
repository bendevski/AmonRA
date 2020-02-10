import React, {useState} from 'react';



export default function StuGov(){
    const [text, setText] = useState(0)
	function flipInfo(e){
		setText(!text);
	}

	if (text)
	return(
	<div className="StuGov">
	<button id="but" onClick={flipInfo}><p id="butext">Click me for Media</p></button>	
        <div className="text">
            <h1>StuGov</h1>
            <p>I wanted to do more things on campus</p>
		<p>I wanted to make a change</p>
		<p>I didn't really make a change in my first year, it was honestly kind of meh</p>
		<p> I continued doing it in second year, deciding to try once again</p>
		<p> What I learned is that nothing comes from inactivity, and when you actually put effort in, change follows</p>
		<p> Now I'm Junior Class rep, and a part of a community without which I think my life on campus would lose most of it's luster</p>
        </div>
	</div>
	)
	return(
        
	
    
        <div className="StuGov">
<button id="but" onClick={flipInfo}><p id="butext">Click me for info</p></button>	            
            <div className="imgs">
                <img src="https://drive.google.com/uc?id=16of8bnkxoOUUw7GCmoyk1aH5Ip7-zv2J"></img>
                <img src="https://drive.google.com/uc?id=1S-oitWxGifm0oQJu5iU4lsj6EcHoXTXw"></img>
            </div>
        </div>
    )
}
