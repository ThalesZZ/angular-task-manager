import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tasksByStatus',
    pure: false
})
export class TasksByStatus implements PipeTransform {
    transform(entries: KeyValue<number, Task>[], statusIdentifier: string): Task[] {
        if (!entries || !statusIdentifier)
            return entries.map(entry => entry.value);

        return entries.filter(entry => entry.value.status?.identifier === statusIdentifier).map(entry => entry.value);
    }
}
