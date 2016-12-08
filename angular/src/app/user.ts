export class User {
  id: number;
  name: string = '';
  age: string = '';
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
