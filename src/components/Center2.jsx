import React from 'react'
import "./Center2.css"
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
const Center2 = () => {
  return (
<>
    <div className="cardtwo" style={{margin:"20px"}}>
        <div className="cardtwo-heading" style={{fontSize:"10px"}} >
          <h1>Amazon Instant</h1>
          <h1>Settlements</h1>
        </div>
         <div  className="cardtwo-content">
        <p ><span class="bluecircle"style={{color:"blue"}}><Brightness1OutlinedIcon/></span>Let's get your started</p>
          <p style={{paddingTop:"10px",paddingLeft:"10px"}}>
            Complete your application and get instant access to your Amazon <span style={{marginTop:"5px"}} >Payment</span>
          </p>
          <div className="cardtwo-btn">
            Apply now
          </div>
        </div>
        <div className="cardtwo-heading" style={{fontSize:"10px"}} >
          <h1>Creating Payouts</h1>
          <h1>in Live mode</h1>
        </div>
         <div className="cardtwo-content">
          <p style={{color:"grey"}}>
          <span class="bluecircle"style={{color:"blue"}}><Brightness1OutlinedIcon/></span>Add balance to create payouts in Live mode
          </p>
        
          <p style={{marginTop:"5px",paddingLeft:"30px"}}>Creating Payouts</p>
          <p style={{color:"grey"}}>
          <span class="bluecircle" style={{color:"blue"}}><Brightness1OutlinedIcon/></span>There are multiple ways in which you can create a first payouts
          </p>
          <div style={{display:"flex"}}>
          <div className="cardtwo-btn">
            Apply now
          </div>
          <div  style={{backgroundColor:"grey"}}className="cardtwo-btn">
            Show apps 
          </div>
          <div style={{backgroundColor:"grey"}} className="cardtwo-btn">
            API Payouts
          </div>
          </div>
        </div>
      </div>
      
      
      </>
  )
}

export default Center2