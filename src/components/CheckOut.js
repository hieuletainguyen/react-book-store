import React from "react";

function CheckOut() {
    return (
        <div>
            <h2>Check Out</h2>
            <h4>Card Name</h4>
            <input type="text" />

            <h4>Card Number</h4>
            <input type="number" pattern="[0-9]{4}{4}" required />

            <h4>Expired Date</h4>
            <input type="month"  required/>

            <h4>CVV</h4>
            <input type="number" pattern="[0-9]{3}" required/>

            <br />

        </div>
    )
}

export default CheckOut;