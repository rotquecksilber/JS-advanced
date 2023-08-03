export class User {
	constructor(Task) {
		this.Task = Task;
	}
	do(message) {
		this.Task.run(message);
	}
}
