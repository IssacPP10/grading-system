import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const columns = [
  "Nombre del Alumno",
  "Tarea 1",
  "Tarea 2",
  "Tarea 3",
  "Tarea 4",
  "Tarea 5",
  "Asistencias",
  "Participación",
  "Examen",
];

export default function Questions() {
  return (
    <div className="gap-6 rounded-xl border bg-card text-card-foreground shadow-lg p-5">
      <div className="flex items-center justify-center space-x-2">
        <HelpCircle className="h-6 w-6 text-primary mt-1" />
        <h1 className="text-2xl font-bold text-center">Preguntas</h1>
      </div>
      <div className="my-4 text-sm text-muted-foreground text-center">
        <p>
          Encuentra aquí respuestas rápidas sobre el formato del Excel,
          validaciones y cómo calcular las calificaciones finales.
        </p>
      </div>
      <div className="text-left mx-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>1. ¿Cómo funciona el sistema?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              El sistema permite subir un archivo Excel con calificaciones de
              alumnos. Una vez cargado el archivo, el usuario puede ingresar las
              ponderaciones de cada rubro (tareas, asistencias, participación,
              examen) en un formulario. Estas ponderaciones deben sumar un 100%.
              Después de ingresar las ponderaciones, el sistema calcula las
              calificaciones finales con base en los promedios de las tareas y
              las ponderaciones definidas. Finalmente, el sistema genera un
              archivo Excel con las calificaciones finales que se puede
              descargar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. ¿Se necesita un formato específico para el Excel que se subirá?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Sí, el Excel debe cumplir con las siguientes características:
              <div className="flex flex-wrap gap-1 mt-2">
                {columns.map((column, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md shadow-sm border"
                  >
                    {column}
                  </span>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. ¿El sistema tiene validaciones para errores?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Sí, el sistema incluye las siguientes validaciones:
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Verifica que el archivo Excel tenga exactamente las columnas
                  especificadas, sin modificaciones en nombres u orden.
                </li>
                <li>
                  Valida que las calificaciones ingresadas estén dentro del
                  rango permitido (1-10).
                </li>
                <li>
                  Comprueba que las ponderaciones ingresadas en el formulario
                  sumen exactamente 100%.
                </li>
                <li>
                  Revisa que los cálculos finales no generen errores antes de
                  habilitar la descarga del Excel final.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. ¿Qué sucede si el archivo Excel contiene datos incorrectos o no
              cumple con el formato?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              El sistema notificará al usuario con un mensaje de error
              detallado, indicando qué parte del archivo no cumple con las
              especificaciones. En este caso, no se permitirá continuar hasta
              que se corrija el archivo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. ¿El sistema permite cambiar las ponderaciones después de subir
              el Excel?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Sí, el usuario puede modificar las ponderaciones en el formulario
              tantas veces como desee antes de presionar el botón de calcular.
              Sin embargo, una vez realizado el cálculo, no se pueden hacer
              cambios sin recargar el archivo Excel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. ¿Es posible agregar más tareas en el futuro?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              No, el sistema está configurado para trabajar con cinco tareas
              específicas. Si se desea agregar más tareas, será necesario
              realizar modificaciones en el diseño del sistema.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
