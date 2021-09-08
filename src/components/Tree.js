import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


function Tree(props){
    const [waterHistory, setWaterHistory] = React.useState(() => { return '' })
    
    const water = (e) => {
    
        var currentdate = new Date();
        
        e.target.disabled = true;
        setWaterHistory("Last Water History: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds());
        
        window.setTimeout(function(){  
            e.target.disabled = false;
        }, 30000);
    }

    return(
       
            <div class="card col-md-4">
                <img className="card-img-top" src={props.imgUrl} alt="Card image cap" width="300" height="300"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.titie}</h5>
                        <p className="card-text" name="lastHistory">{waterHistory}</p>
                        <button onClick={water} name="water" className="btn btn-primary">Water IT</button>
                    </div>
            </div>
        
    )
}

export default Tree