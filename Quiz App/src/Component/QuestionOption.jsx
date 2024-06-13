import React, { useState } from 'react';
const QuestionOption = () => {
    const [allQuestions, setallQuestions] = useState([{
        question: "1) HTML stands for _____",
        a: 'Hyper Text Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Home Tool Markup Language',
        d: 'Hyperlinks and Text Markup Level',
        ans: 'a' // Correct answer
    },
    {
        question: "2) CSS stands for _____",
        a: 'Creative Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Colorful Style Sheets',
        d: 'Computer Style Sheets',
        ans: 'b' // Correct answer
    },
    {
        question: "3) What does DOM stand for?",
        a: 'Document Object Model',
        b: 'Digital Object Model',
        c: 'Direct Object Manipulation',
        d: 'Desktop Oriented Mode',
        ans: 'a' // Correct answer
    },
    {
        question: "4) JavaScript is a _____ language.",
        a: 'Client-side scripting',
        b: 'Server-side scripting',
        c: 'Both',
        d: 'None of the above',
        ans: 'c' // Correct answer
    },
    {
        question: "5) Which symbol is used for comments in JavaScript?",
        a: '//',
        b: '/* */',
        c: '#',
        d: '--',
        ans: 'a' // Correct answer
    }]);
    const [count, setCount] = useState(0)
    const [right, setRight] = useState(0)
    const [worng, setWorng] = useState(0)

    let handleinput = (inputValue) => {
        if (inputValue === allQuestions[count].ans) {
            setRight((right) => right + 1)
        } else {
            setWorng((worng) => worng + 1)
        }
    }
    let nextQuestion = () => {
        setCount((count) => count + 1)
        console.log(allQuestions);

    }
    let AddQuestion = () => {

        let QuestionNO = parseInt(prompt("Please enter your QuestionNO"));
        let Question = prompt("Please enter your Question");
        let optionA = prompt("Please enter your OptionA ");
        let optionB = prompt("Please enter your  OptionB ");
        let optionC = prompt("Please enter your  OptionC");
        let optionD = prompt("Please enter your OptionD ");
        let Answer = prompt("Please enter your  AnswerF");
        let newobj = {
            question: `${QuestionNO}) ${Question}`,
            a: `${optionA}`,
            b: `${optionB}`,
            c: `${optionC}`,
            d: `${optionD}`,
            ans: `${Answer}` // Correct answer
        }
        setallQuestions((allQuestions) => [...allQuestions , newobj])
        // console.log(allQuestions);
        // console.log(allQuestions.length);
    }
    return (

        <div id='Container' className='h-screen w-full text-white' style={{ backgroundColor: '#242424' }}>
            <div>
                <h1>Current Questions {allQuestions.length}</h1>
                <h1>{allQuestions[count].question} {count}</h1>
            </div>
            <div>
                <input value={'a'} type="radio" className='input' name='input' onClick={() => { return handleinput('a') }} />
                <label htmlFor="">{allQuestions[count].a}</label>
            </div>
            <div>
                <input value={'b'} type="radio" className='input' name='input' onClick={() => { return handleinput('b') }} />
                <label htmlFor="">{allQuestions[count].b}</label>
            </div>
            <div>
                <input value={'c'} type="radio" className='input' name='input' onClick={() => { return handleinput('c') }} />
                <label htmlFor="">{allQuestions[count].c}</label>
            </div>
            <div>
                <input value={'d'} type="radio" className='input' name='input' onClick={() => { return handleinput('d') }} />
                <label htmlFor="">{allQuestions[count].d}</label>
            </div>
            <div>
                <button onClick={nextQuestion} >Next</button> <br />
                <button onClick={AddQuestion} >  Add Question</button>
            </div>
            {/* <p>Right{right}</p> */}
            {/* <p>Worng{worng}</p> */}
        </div>
    );

}

export default QuestionOption