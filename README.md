
# 📊 **Grading System** 🎓

Un sistema eficiente para gestionar y calcular calificaciones de alumnos a partir de un archivo Excel. Este proyecto permite subir las calificaciones de los estudiantes, calcular el promedio final y generar un archivo Excel con los resultados finales.

---

## 🛠 **Tecnologías Utilizadas** 💻

![React Badge](https://img.shields.io/badge/React-18%2B-blue) ![Vite Badge](https://img.shields.io/badge/Vite-5%2B-yellow) ![Tailwind CSS Badge](https://img.shields.io/badge/TailwindCSS-3%2B-purple) ![Shadcn Badge](https://img.shields.io/badge/Shadcn-UI-orange) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-5%2B-blue)


---

## ✨ **Características del Proyecto** 📝

- **Subida de Calificaciones**: Los usuarios pueden subir un archivo Excel con las calificaciones de los alumnos.
- **Formato del Excel**: El archivo debe tener las siguientes columnas:  
  `Nombre del Alumno`, `Tarea 1`, `Tarea 2`, `Tarea 3`, `Tarea 4`, `Tarea 5`, `Asistencias`, `Participación`, `Examen`. ¡Es importante que el archivo respete exactamente este formato! 📑
- **Calificaciones Decimales**: El sistema permite calificar entre 1 y 10, incluyendo decimales como 8.5, 9.4, etc. ✅
- **Cálculo Automático de Promedio**: El sistema calculará automáticamente el promedio de las tareas y aplicará las ponderaciones ingresadas en el formulario.  
  Los porcentajes deben sumar un total de 100%. ⚙️
- **Validaciones**: El sistema verifica que el formato del archivo sea correcto y que los cálculos se realicen correctamente antes de mostrar el resultado. 🔍
- **Descarga del Excel Final**: Una vez calculadas las calificaciones finales, el sistema generará un nuevo archivo Excel con las calificaciones actualizadas para su descarga. 📥

---

## 📁 **Instrucciones de Uso** 🚀

1. **Subir el archivo Excel**:  
   Carga el archivo Excel con las calificaciones de los alumnos. Asegúrate de que tenga las columnas exactas mencionadas anteriormente.

2. **Configurar Ponderaciones**:  
   En el formulario, ingresa los porcentajes de ponderación para las tareas, asistencias, participación y examen. Recuerda que la suma total debe ser 100%.

3. **Calcular las Calificaciones Finales**:  
   Una vez configuradas las ponderaciones, presiona el botón "Calcular". El sistema calculará las calificaciones finales automáticamente.

4. **Descargar el Excel Final**:  
   Después de calcular, el sistema habilitará un botón para descargar el archivo Excel con las calificaciones finales de los estudiantes.

---

## 🔍 **Validaciones Importantes** ⚠️

- **Formato Excel**: El archivo Excel no debe modificarse, no se pueden agregar nuevas tareas ni cambiar los nombres de las columnas. Si se detectan cambios en el formato, el sistema no podrá calcular las calificaciones correctamente. 🛑
- **Cálculos Correctos**: Al finalizar el cálculo, el sistema revisará que los resultados sean correctos y que las ponderaciones sumen 100%. ✅

---

## 📸 **Capturas de Pantalla** 📸

### UI del Sistema
![image](https://github.com/user-attachments/assets/99166491-778c-46f9-967d-294a4e4991e8)

---

## 📢 **¡Contribuye al Proyecto!** 💡

¡Tu ayuda es bienvenida! Si encuentras algún error o tienes una idea para mejorar el sistema, no dudes en hacer un **pull request** o abrir un **issue**. 💪

---

## 📄 **Licencia** 📄

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
