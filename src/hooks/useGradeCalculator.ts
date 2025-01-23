import { useState } from 'react';
import { RubricWeight, StudentGrade } from '@/types';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';

export function useGradeCalculator() {
  const [weights, setWeights] = useState<RubricWeight[]>([
    { name: 'Tareas', weight: 0, icon: 'tasks' },
    { name: 'Asistencias', weight: 0, icon: 'attendance' },
    { name: 'Examen', weight: 0, icon: 'exam' },
    { name: 'Participación', weight: 0, icon: 'participation' }
  ]);

  const [studentData, setStudentData] = useState<StudentGrade[]>([]);
  const [calculatedGrades, setCalculatedGrades] = useState<StudentGrade[]>([]);

  const totalWeight = weights.reduce((sum, item) => sum + item.weight, 0);

  const handleWeightChange = (index: number, value: string) => {
    const newValue = value === '' ? 0 : Math.min(100, Math.max(0, Number(value)));
    const newWeights = [...weights];
    newWeights[index] = { ...newWeights[index], weight: newValue };
    setWeights(newWeights);
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json<StudentGrade>(firstSheet);
        setStudentData(jsonData);
        toast.success('Archivo cargado correctamente');
      } catch (error) {
        toast.error('Error al leer el archivo', {
          description: error instanceof Error ? error.message : 'Asegúrate de que el archivo tenga el formato correcto.'
        });
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const calculateGrades = () => {
    // Verifica que la suma de los pesos sea 100
    if (totalWeight !== 100) {
      toast.error('La suma de los porcentajes debe ser 100%');
      return;
    }
  
    if (studentData.length === 0) {
      toast.error('No hay datos de estudiantes para calcular');
      return;
    }
  
    const calculated = studentData.map(student => {
      console.log(`Calculando calificación para: ${student['Nombre del Alumno']}`);
  
      // Verificar que los datos de tareas sean números válidos
      const taskGrades = [
        student['Tarea 1'],
        student['Tarea 2'],
        student['Tarea 3'],
        student['Tarea 4'],
        student['Tarea 5']
      ];
  
      // Validación de calificaciones de tareas
      const allTasksValid = taskGrades.every(grade => !isNaN(grade) && grade !== null);
      if (!allTasksValid) {
        toast.error(`Las calificaciones de las tareas no son válidas para el alumno ${student['Nombre del Alumno']}`);
        return { ...student, calificacionFinal: null };
      }
  
      console.log(`Calificaciones de tareas para ${student['Nombre del Alumno']}:`, taskGrades);
  
      // Calcular el promedio de las tareas
      const taskAverage = taskGrades.reduce((sum, grade) => sum + grade, 0) / taskGrades.length;
      console.log(`Promedio de tareas para ${student['Nombre del Alumno']}:`, taskAverage);
  
      // Validar otros campos
      const isValid = !isNaN(student['Asistencias']) && !isNaN(student['Examen']) && !isNaN(student['Participacion']);
      if (!isValid) {
        toast.error(`Faltan datos válidos para el alumno ${student['Nombre del Alumno']}`);
        return { ...student, calificacionFinal: null };
      }
  
      console.log(`Asistencias: ${student['Asistencias']}, Examen: ${student['Examen']}, Participación: ${student['Participacion']}`);
  
      // Calcular la calificación final con ponderación
      const finalGrade =
        (taskAverage * weights[0].weight / 100) +
        (student['Asistencias'] * weights[1].weight / 100) +
        (student['Examen'] * weights[2].weight / 100) +
        (student['Participacion'] * weights[3].weight / 100);
      
      console.log(`Calificación final antes de ajustar para ${student['Nombre del Alumno']}:`, finalGrade);
  
      // Redondear la calificación final a dos decimales
      const finalGradeClamped = parseFloat(finalGrade.toFixed(3)); // Ajusta la precisión a 3 decimales si lo prefieres
  
      console.log(`Calificación final ajustada para ${student['Nombre del Alumno']}:`, finalGradeClamped);
  
      // Devolver el resultado con la calificación final calculada
      return {
        ...student,
        calificacionFinal: finalGradeClamped
      };
    });
  
    setCalculatedGrades(calculated);
    toast.success('Calificaciones calculadas correctamente');
  };  
  
  
  const downloadResults = () => {
    if (calculatedGrades.length === 0) {
      toast.error('No hay calificaciones calculadas para descargar');
      return;
    }

    try {
      // Validamos que los datos estén completos antes de generar el archivo
      const validGrades = calculatedGrades.filter(student => {
        return student['Nombre del Alumno'] && student.calificacionFinal !== undefined;
      });

      if (validGrades.length === 0) {
        toast.error('No hay calificaciones válidas para descargar');
        return;
      }

      // Convertimos los datos válidos a formato de hoja de cálculo
      const worksheet = XLSX.utils.json_to_sheet(validGrades);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Calificaciones Finales');
      
      // Generamos el archivo Excel
      XLSX.writeFile(workbook, 'calificaciones_finales.xlsx');
      toast.success('Archivo de calificaciones descargado');
    } catch (error) {
      toast.error('Hubo un problema al generar el archivo', {
        description: error instanceof Error ? error.message : 'Por favor, intente nuevamente.'
      });
    }
  };

  return {
    weights,
    studentData,
    calculatedGrades,
    totalWeight,
    handleWeightChange,
    handleFileUpload,
    calculateGrades,
    downloadResults
  };
}
