import {type Task} from './task.model'
import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class TaskService {
  private readonly tasks: Task[] = [
    {
      taskId: "t1",
      "userId": "u1",
      "createdDate": "2026-06-01",
      "dueDate": "2026-06-05",
      "title": "Finalize Q2 Marketing Plan",
      "description": "Complete and submit the Q2 marketing strategy document for executive review.",
      "notes": "Focus on social media growth targets and budget allocation.",
      "relatedTasks": [
        "Marketing Strategy Draft v3",
        "Q1 Performance Report"
      ],
      "relatedPeople": [
        "Sarah Johnson",
        "Michael Chen"
      ]
    },
    {
      taskId: "t2",
      "userId": "u2",
      "createdDate": "2026-06-02",
      "dueDate": "2026-06-10",
      "title": "Prepare Client Onboarding Materials",
      "description": "Create onboarding documentation and welcome package for new enterprise clients.",
      "notes": "Include updated pricing and support contact information.",
      "relatedTasks": [
        "Onboarding Checklist",
        "Service Catalog"
      ],
      "relatedPeople": [
        "Emma Wilson",
        "David Garcia"
      ]
    },
    {
      taskId: "t3",
      "userId": "u3",
      "createdDate": "2026-05-28",
      "dueDate": "2026-06-07",
      "title": "Website Accessibility Audit",
      "description": "Review the company website for WCAG compliance and identify improvements.",
      "notes": "Prioritize issues affecting navigation and screen readers.",
      "relatedTasks": [
        "Accessibility Guidelines",
        "Audit Template"
      ],
      "relatedPeople": [
        "Lisa Brown",
        "James Miller"
      ]
    },
    {
      taskId: "t4",
      "userId": "u4",
      "createdDate": "2026-06-01",
      "dueDate": "2026-06-15",
      "title": "Product Launch Readiness Review",
      "description": "Verify all launch requirements are met before the upcoming product release.",
      "notes": "Coordinate with engineering and customer support teams.",
      "relatedTasks": [
        "Launch Checklist",
        "Release Notes"
      ],
      "relatedPeople": [
        "Olivia Davis",
        "Noah Martinez"
      ]
    },
    {
      taskId: "t5",
      "userId": "u5",
      "createdDate": "2026-05-30",
      "dueDate": "2026-06-08",
      "title": "Recruitment Pipeline Assessment",
      "description": "Evaluate current hiring pipeline and recommend improvements.",
      "notes": "Review candidate conversion rates and interview feedback.",
      "relatedTasks": [
        "Hiring Dashboard",
        "Candidate Survey Results"
      ],
      "relatedPeople": [
        "Sophia Anderson",
        "William Taylor"
      ]
    },
    {
      taskId: "t6",
      "userId": "u6",
      "createdDate": "2026-06-02",
      "dueDate": "2026-06-20",
      "title": "Customer Feedback Analysis",
      "description": "Analyze recent customer feedback and identify recurring issues and opportunities.",
      "notes": "Segment findings by customer tier and product area.",
      "relatedTasks": [
        "Customer Survey Responses",
        "Support Ticket Summary"
      ],
      "relatedPeople": [
        "Ava Thomas",
        "Benjamin White"
      ]
    }
  ]

  get Count() {
    return this.tasks.length;
  }

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  removeTask(id: string) {
    const index = this.tasks.findIndex(task => task.taskId === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    this.saveTasks();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  getAllTasks() {
    return this.tasks;
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
