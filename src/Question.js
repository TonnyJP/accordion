import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {

  const [isTextShown, setIsTextShown ] = React.useState(false)

  const showText = () => {
    setIsTextShown(!isTextShown)
  }

  return (
  <article className="question">
    <header>
      <h4>{title}</h4> <button className="btn" onClick={showText}> {isTextShown? <AiOutlineMinus /> : < AiOutlinePlus />} </button>
    </header>
    {isTextShown && <p> {info} </p>}
  </article>)
};

export default Question;
