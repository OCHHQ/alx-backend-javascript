import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class React extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingReact !== undefined) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  }
}