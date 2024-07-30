import React from 'react'
import "./Center.css"
import bankpage from "./bank.png"
import arrowright from "./arrow-right.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Center = () => {
  return (
   
<div className='headcenter'>
{/* <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1> */}
  <div className="upperbutton" style={{backgroundColor:"#2a86f3",textAlign:"center",float:"right",width:"150px",height:"30px",borderRadius:"5px",margin:"5px",paddingTop:"4px"}}>+ Payout | \/ </div>
  <div  className="hundred"><p style={{backgroundColor:"rgb(27, 27, 27)"}}>RozarpayXLite as of a few seconds ago  <span style={{fontSize:"40px",position:"relative",top:"10px"}}>|</span> <span style={{color:"blue"}}>+     Add balance</span> </p>
  <p style={{color:"white",fontSize:"20px",backgroundColor:" rgb(27, 27, 27)"}}>$100</p></div>
  <p className='party'   style={{backgroundColor:"rgb(27, 27, 27)"}}>You're all caught up. These are no items pending on you</p>
  <p style={{color:"white",backgroundColor:" rgb(27, 27, 27)",paddingTop:"50px"}}>Onboarding updates (1)</p>
<div className="center" style={{gap:"10%"}}>
      <div className="card">
        <div className="bank-image" style={{ color: 'white' }}>
          <img src={bankpage} style={{ width: '50px', height: '50px', color: 'white' }} alt="Bank" />
          <p>Bank Account</p>
        </div>

        <div className="card1 content">
          <h1 style={{ fontSize: '15px', paddingLeft: '18px' }}>Open your RazorpayX account</h1>
          <p style={{ fontSize: '12px', textAlign: 'center',color:"grey" }}>
            Don't let bankace come in the way of your growth Apply for your RazorpayX account with a few basic details
          </p>
          <p style={{ float: 'right', fontSize: '15px', clear: 'both',color:"grey" }}>0/4</p>
          <div className="line">
            <div className="line1">
              <div></div>
            </div>
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </div>
          <div className="btn">
            Start application
            <img
              className="right-arrow"
              src={arrowright}
              style={{ width: '20px', height: '20px', textAlign: 'center',backgroundColor:"#2a86f3" }}
              alt="Arrow Right"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Center