import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-create-new',
  templateUrl: './ticket-create-new.component.html',
  styleUrls: ['./ticket-create-new.component.scss'],
})
export class TicketCreateNewComponent {
  projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
  ];

  relatedComponents = [
    { id: 1, name: 'Frontend' },
    { id: 2, name: 'Backend' },
    { id: 3, name: 'Database' },
  ];

  assignees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Team Lead' },
  ];

  form = {
    title: '',
    project: null,
    parentTicket: '',
    tags: '',
    relatedComponent: null,
    description: '',
    verificationSteps: '',
    attachments: null,
    watchers: '',
    initialComment: '',
  };

  selectedAssignees: number[] = [];
  attachments: File[] = [];

  toggleAssigneeSelection(id: number): void {
    const index = this.selectedAssignees.indexOf(id);
    if (index > -1) {
      this.selectedAssignees.splice(index, 1);
    } else {
      this.selectedAssignees.push(id);
    }
  }

  getAssigneeName(id: number): string {
    const assignee = this.assignees.find((a) => a.id === id);
    return assignee ? assignee.name : '';
  }

  isAssigneeSelected(id: number): boolean {
    return this.selectedAssignees.includes(id);
  }

  onAttachmentAdded(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const files = Array.from(target.files);
      const availableSlots = 5 - this.attachments.length;

      files
        .slice(0, availableSlots)
        .forEach((file) => this.attachments.push(file));
      target.value = '';
    }
  }

  removeAttachment(index: number): void {
    this.attachments.splice(index, 1);
  }

  onSubmit(): void {
    console.log('Form Data:', this.form);
    console.log('Selected Assignees:', this.selectedAssignees);
    console.log('Attachments:', this.attachments);
  }
}
