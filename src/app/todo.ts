export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;
    search: string ='';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  