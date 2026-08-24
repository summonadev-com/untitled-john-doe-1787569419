import type { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 cursor-pointer rounded border-slate-300 text-slate-700 focus:ring-slate-400"
      />
      <span
        className={
          todo.completed
            ? 'flex-1 text-sm text-slate-400 line-through'
            : 'flex-1 text-sm text-slate-800'
        }
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="text-slate-400 transition hover:text-red-500"
      >
        ✕
      </button>
    </li>
  );
}
