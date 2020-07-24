export class Task {
    id: number;
    name: string;
    description: string;
    status = 'do zrobienia'; //domyślnie/----/checkbox
    date: Date; // domyślnie brak
    priority = 'medium'; //domyślnie/----/radioButton
    completed = false;
    inProgress = false;
    editing = false;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    set desc(description: string) {
        this.description = description;
    }
}