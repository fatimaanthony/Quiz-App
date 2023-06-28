import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
selected={}// storing answers
correctAnswers= 0 // to show the number of correct answers
isSubmitted = false //use to show the results


myQuestions=[
    {
        id: "Question 1",
        question:"Which one of the following is not a template loop?",
        answers:{
            a:"for:each loop",
            b:"iterator loop",
            c:"map loop"
        },
        correctAnswer: "c"
    },
    {
        id: "Question 2",
        question:"Which of the file is invalid in LWC component folder?",
        answers:{
            a:".svg",
            b:".apex",
            c:".js"
        },
        correctAnswer: "b"
    },
    {
        id: "Question 3",
        question:"Which one of the following is not directive?",
        answers:{
            a:"for:each",
            b:"if:true",
            c:"@track"
        },
        correctAnswer: "c"
    }
]
// used for disabling the submit button
get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
}
//for applying dynamic styling to our results
get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
    `slds-text-color_success`:`slds-text-color_error`}`
}
//changeHandler get's called on every click on the options
changeHandler(event){
console.log("name", event.target.name)
console.log("value", event.target.value)
const {name, value} = event.target
this.selected={...this.selected, [name]: value}

}
//form submit handler
submitHandler (event){
    event.preventDefault();
    //this.selected("question1":"a")
    let correct = this.myQuestions.filter(item=>this.selected[item.id]=== item.correctAnswer)
    this.correctAnswers = correct.length
    this.isSubmitted = true;
    console.log("this.correctAnswers", this.correctAnswers)

}
//form reset handler
resetHandler(){
    this.selected={}
    this.correctAnswers=0
    this.isSubmitted = false;

}
}