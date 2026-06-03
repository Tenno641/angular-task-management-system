export type Task = {
  taskId: string;
  userId: string;
  createdDate: string;
  dueDate: string;
  title: string;
  description: string;
  relatedTasks: string[];
  notes: string;
  relatedPeople: string[];
}
