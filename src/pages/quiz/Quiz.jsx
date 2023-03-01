import React, { useState } from "react";
import s from './Quiz.module.css';

const questions = [
    {
        title: 'React is a ... ?',
        variants: ['library', 'framework', 'application'],
        correct: 0
    },
    {
        title: 'Component is a ... ?',
        variants: ['application', 'a part of application or page', 'not sure'],
        correct: 1
    },
    {
        title: 'What is JSX?',
        variants: [
            'is a simple HTML', 
            'is a function', 
            'This is the same HTML, but with the ability to execute JS code '
        ],
        correct: 2
    },
    {
        title: 'What does React use?',
        variants: ['virtual DOM', 'angular', 'not sure'],
        correct: 0
    },{
        title: 'Props are ... ?',
        variants: [
            'functions', 
            'arguments passed into React components', 
            'unnecessary in React App'],
        correct: 1
    }

]
function Result ({correct}){
    return(
        <div className={s.result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="my-result"/>
            <h2>Your score is {correct} of {questions.length}</h2>
            <a href="/quiz">
            <button>Try again</button>
            </a>
        </div>
    )
}
function Game ({question,onClickVariant,step }){
    const percent = Math.round(step/questions.length *100);
    return(
        <>
        <div className={s.progress}>
            <div style={{width: `${percent}%`}} className={s.progress__inner}></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {
                question.variants.map((text,index)=>
                <li onClick={()=>onClickVariant(index)} key={text}>
                    {text}</li>)
            }
        </ul>
        </>
    )
}
function Quiz(){
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];
    const onClickVariant = (index)=>{
        setStep(step +1);
        if(index=== question.correct){
            setCorrect(correct + 1);
        }
    }
    return(
        <div className={s.Quiz}>
            {
                step !== questions.length 
                ? (<Game step={step} question={question} onClickVariant={onClickVariant}/>)
                : (<Result correct={correct}/>)
            }
        </div>
    )
}
export default Quiz;