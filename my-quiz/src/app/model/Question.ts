import {Option} from "src/app/model/Option";
export class Question{
    constructor(public id: number,public text: string,public choices:Array<Option>)
    {
        
    }
}