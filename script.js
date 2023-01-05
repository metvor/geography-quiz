    const questions = [{
        id:0,
        title: 'Where is Budapest?',
        alternatives: [
        {text:'Czech Republic', isCorrect:false},
        {text:'Slovakia', isCorrect:false},
        {text:'Hungary', isCorrect:true},
        {text:'Bulgaria', isCorrect:false},
    ]},{
        id:1,
        title: 'Which US states borders Illinois?',
        alternatives: [
        {text:'Kentucky', isCorrect:true},
        {text:'Tennessee', isCorrect:false},
        {text:'Ohio', isCorrect:false},
        {text:'South Dakota', isCorrect:false},
    ]},{

    }
]

var start = true;

    function iterate(id) {
        const question=document.getElementById('question');
        question.innerText=questions[id].title;

        const op1 = document.getElementById('option1');
        const op2 = document.getElementById('option2');
        const op3 = document.getElementById('option3');
        const op4 = document.getElementById('option4');

        op1.innerText = questions[id].alternatives[0].text;
        op2.innerText = questions[id].alternatives[1].text;
        op3.innerText = questions[id].alternatives[2].text;
        op4.innerText = questions[id].alternatives[3].text;

        op1.value = questions[id].alternatives[0].isCorrect;
        op2.value = questions[id].alternatives[1].isCorrect;
        op3.value = questions[id].alternatives[2].isCorrect;
        op4.value = questions[id].alternatives[3].isCorrect;

    }

    if (start) {
        iterate('0');
    }
   