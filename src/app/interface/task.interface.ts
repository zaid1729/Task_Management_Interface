interface ITask {
  id?: string;
  title: string;
  type: string;
  dueDate: Date;
  finalldate: Date;
  description: string;
}
interface ITaskTypeOption {
  type: string;
}

interface ITypePercentage {
  count: number;
  type: string;
}

export { ITask, ITaskTypeOption, ITypePercentage };
