export class Task {
    id: number;
    name: string;
    description: string;
    status: string = 'do zrobienia'; //domyślnie/----/checkbox
    date: Date; // domyślnie brak
    priority: string = 'medium'; //domyślnie/----/radioButton
    completed: boolean = false;
    editing: boolean = false;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    set desc(description: string) {
        this.description = description;
    }
}