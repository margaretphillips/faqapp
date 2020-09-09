import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
/*
    this.questions=[
      {
        text: 'What is your name?',
        answer: 'My Name is Margaret',
        hide: true
      },
      {
        text: 'What is your favorite color?',
        answer: 'Probably blue',
        hide: true
    },
      {
          text: 'What is your dogs name?',
          answer: 'Her name is Sophia',
          hide: true
      }
  ] */

  }
 //get questions from local storage//
  getQuestions(){
    if(localStorage.getItem('questions') === null){
       this.questions=[];
    }
    else{
       this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  //add question to local storage//
  addQuestion(question:Question){
  this.questions.unshift(question);
    //init local vars
    let questions;

    if(localStorage.getItem('questions') === null){
      questions=[];
      //push new question
      questions.unshift(question);
      //send to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
    else{
      questions = JSON.parse(localStorage.getItem('questions'));
      //add new question
      questions.unshift(question);
      //reset local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }

      
  }
  //remove question from local storage//
  removeQuestion(question:Question){
      for(let i = 0; i < this.questions.length;i++){
          if(question == this.questions[i])
            {
              this.questions.splice(i, 1);
              localStorage.setItem('questions', JSON.stringify(this.questions));
            }
      }
  }

}
