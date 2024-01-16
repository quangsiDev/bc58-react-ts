export interface I_Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface I_PropsList {
  listTodo: I_Todo[];
  handleDelete: (id: number) => void;
  handleChangeChecked: (id: number) => void;
}

export interface I_PropsItem {
  todo: I_Todo;
  handleRemove: (id: number) => void;
  handleChangeChecked: (id: number) => void;
}
