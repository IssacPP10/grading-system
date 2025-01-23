export interface RubricWeight {
  name: string;
  weight: number;
  icon: keyof typeof rubricIcons;
}

export interface StudentGrade {
  'Nombre del Alumno': string;
  'Tarea 1': number;
  'Tarea 2': number;
  'Tarea 3': number;
  'Tarea 4': number;
  'Tarea 5': number;
  Asistencias: number;
  Participacion: number;
  Examen: number;
  calificacionFinal: number | null;  // Permite null
}

export const rubricIcons = {
  tasks: '📚',
  attendance: '📅',
  exam: '📝',
  participation: '🗣️'
} as const;