export class Card{

    public title : string;
    public text : string;
    public temp?: string;

    constructor(title: string, text:string,temp:string){
        this.title = title;
        this.text = text;
        this.temp = temp;
    }
}