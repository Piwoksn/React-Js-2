import React, { useState } from "react";

function OnChangeEvent() {
  const [name, setName] = useState("Guest");

  const setEventHandler = (event) => {
    setName(event.target.value);
  };
  // for Number
  const [qty, setQty] = useState(0);

  const handleQtyChange = (e) => setQty(e.target.value);

  // textarea
  const [comment, setComment] = useState("");

  function commentHandler(e) {
    setComment(e.target.value);
  }
  // for select element
  const [payment, setPayment] = useState("");

  const paymentHandle = (event) => setPayment(event.target.value);

  return (
    <div>
      <input type="text" value={name} onChange={setEventHandler} />
      <h3>Name: {name}</h3>
      <input type="number" value={qty} onChange={handleQtyChange} />
      <h3>Name: {qty}</h3>

      <textarea
        value={comment}
        onChange={commentHandler}
        placeholder="Enter Comment"
      ></textarea>

      <p>{comment}</p>
      <select value={payment} onChange={paymentHandle}>
        <option value="">Select Payment Method</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Gift Card">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
  );
}
export default OnChangeEvent;
