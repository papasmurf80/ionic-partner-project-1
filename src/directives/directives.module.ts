import { NgModule } from '@angular/core';
import { TodoDirective } from './todo/todo';
@NgModule({
	declarations: [TodoDirective],
	imports: [],
	exports: [TodoDirective]
})
export class Todo {
	id: number;
    title = '';
    complete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
