import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Offcanvas } from 'bootstrap';

export interface Ticket {
  id: number;
  title: string;
  project: string;
  parentTicket: string;
  tags: string[];
  relatedComponent: string;
  description: string;
  verificationSteps: string;
  attachments: string[] | null;
  watchers: string[];
  comments: { text: string; author: string; date: string }[];
}

@Component({
  selector: 'app-kanban-board-main',
  templateUrl: './kanban-board-main.component.html',
  styleUrls: ['./kanban-board-main.component.scss'],
})
export class KanbanBoardMainComponent implements OnInit {
  columns: { name: string; tickets: Ticket[] }[] = [
    {
      name: 'To Do',
      tickets: [
        {
          id: 1,
          title: 'Fix login issue',
          project: 'Authentication',
          parentTicket: 'None',
          tags: ['bug', 'login'],
          relatedComponent: 'Frontend',
          description: 'Login not working for users.',
          verificationSteps: 'Try logging in with test account.',
          attachments: ['error-log.txt', 'screenshot.png'],
          watchers: ['john.doe@example.com', 'support@example.com'],
          comments: [
            {
              text: 'Initial investigation shows a bug in login flow.',
              author: 'John Doe',
              date: '2024-12-25',
            },
            {
              text: 'Please provide more details about affected users.',
              author: 'Jane Smith',
              date: '2024-12-26',
            },
          ],
        },
      ],
    },
    {
      name: 'Done',
      tickets: [],
    },
  ];

  connectedDropLists: string[] = [];
  selectedTicket: Ticket | null = null;
  newWatcher: string = '';
  newTag: string = '';
  newComment: string = '';

  ngOnInit(): void {
    this.connectedDropLists = this.columns.map(
      (_, index) => `cdk-drop-list-${index}`
    );
  }

  openDetails(ticket: Ticket): void {
    this.selectedTicket = ticket;
    const offcanvasElement = document.getElementById('ticketDetailsOffcanvas');
    if (offcanvasElement) {
      const bsOffcanvas = new Offcanvas(offcanvasElement);
      bsOffcanvas.show();
    }
  }

  onDrop(event: CdkDragDrop<Ticket[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const movedTicket = event.container.data[event.currentIndex];
      const targetColumnName = this.columns.find(
        (col) => col.tickets === event.container.data
      )?.name;

      if (movedTicket && targetColumnName) {
        console.log(
          `Ticket moved: ${movedTicket.id}, Column: ${targetColumnName}`
        );
      }
    }
  }

  addWatcher(): void {
    if (
      this.selectedTicket &&
      this.newWatcher.trim() &&
      !this.selectedTicket.watchers.includes(this.newWatcher.trim())
    ) {
      this.selectedTicket.watchers.push(this.newWatcher.trim());
      this.newWatcher = '';
    }
  }

  removeWatcher(email: string): void {
    if (this.selectedTicket) {
      this.selectedTicket.watchers = this.selectedTicket.watchers.filter(
        (watcher) => watcher !== email
      );
    }
  }

  addTag(): void {
    if (
      this.selectedTicket &&
      this.newTag.trim() &&
      !this.selectedTicket.tags.includes(this.newTag.trim())
    ) {
      this.selectedTicket.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  removeTag(tag: string): void {
    if (this.selectedTicket) {
      this.selectedTicket.tags = this.selectedTicket.tags.filter(
        (t) => t !== tag
      );
    }
  }

  addComment(): void {
    if (this.newComment.trim() && this.selectedTicket) {
      this.selectedTicket.comments.push({
        text: this.newComment.trim(),
        author: 'Current User',
        date: new Date().toISOString().split('T')[0],
      });
      this.newComment = '';
    }
  }
}
