import {Question} from "src/app/model/Question";
export class Quiz{
    constructor(public id: number,public name: string,public question:Array<Question>)
    {

    }
}