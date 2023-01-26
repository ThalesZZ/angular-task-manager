import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tasksByStatus',
    pure: false
})
export class TasksByStatus implements PipeTransform {
    transform(tasks: Task[], status: TaskStatus): any {
        if (!tasks || !status)
            return tasks;

        return tasks.filter(task => task.status === status);
    }
}
