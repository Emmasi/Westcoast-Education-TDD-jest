import React from "react"
import ReactDom from "react-dom"

const PortalModal = ({ message,secendmessage, isOpen,onClose})=>{
  if(!isOpen) return null;
  return ReactDom.createPortal(
    <div className="modal">
      <h2>{message}</h2>
      <h3>{secendmessage}</h3>
      <button className="close" onClick={onClose}>Döda Viruset</button>
    </div>,
    document.body
  )
}
export default PortalModal
