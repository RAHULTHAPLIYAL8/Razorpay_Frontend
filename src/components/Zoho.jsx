import React from 'react'
import "./Zoho.css"
import zohopng from "./zoho.png"


const Zoho = () => {
  return (
    <div className="Zoho">
        <img style={{width:"100px",height:"100px"}}src={zohopng} alt="dlfhdoih" />
        <div>
            <h1 style={{fontSize:"20px",color:"white"}}>Automate Bookkeeping for Payouts</h1>
            <p style={{fontSize:"13px",color:"grey"}}>Close your books 60% faster and with better accuracy by</p>
            <p style={{fontSize:"13px",color:"grey"}}>by automation bookkeeping for your payouts</p>
        </div>
        <p style={{color:"blue",border:"2px solid blue",marginRight:"20px"}}>connect Zoho books</p>
    </div>
  )
}

export default Zoho 