import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Calculator,
  Download,
  HelpCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { WeightInput } from "@/components/WeightInput";
import { FileUploader } from "@/components/FileUploader";
import { useGradeCalculator } from "@/hooks/useGradeCalculator";
import Questions from "./components/Questions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function App() {
  const {
    weights,
    studentData,
    totalWeight,
    handleWeightChange,
    handleFileUpload,
    calculateGrades,
    downloadResults,
    calculatedGrades,
  } = useGradeCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="shadow-lg relative">
          <div className="absolute top-3 right-3">
            <Dialog>
              <DialogTrigger asChild>
                <HelpCircle className="h-6 w-6 text-primary cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Grading System</DialogTitle>
                  <DialogDescription>
                    Este sistema de calificaciones fue creado con el propósito
                    de ayudar a los maestros a calcular los promedios finales de
                    manera más eficiente, además de servir como una práctica
                    para mejorar mis habilidades en el desarrollo de
                    herramientas con React y Vite. A continuación, dejo los
                    enlaces al repositorio para que esté disponible para su uso
                    o para que quienes lo deseen puedan contribuir. ¡Muchas
                    gracias! 🙂
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2"></div>
                </div>
                <DialogFooter className="flex flex-row sm:flex-nowrap sm:justify-start justify-center text-sm gap-2">
                  <a
                    href="https://github.com/IssacPP10/grading-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-800 transition w-24"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/issac-puentes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition w-28"
                  >
                    <Linkedin className="w-5 h-5" />
                    Linkedin
                  </a>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl font-bold text-center">
                Calculadora de Calificaciones
              </CardTitle>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Ingrese los porcentajes para cada rubro de evaluación
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                {weights.map((weight, index) => (
                  <WeightInput
                    key={weight.name}
                    weight={weight}
                    index={index}
                    onChange={handleWeightChange}
                  />
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 px-4 bg-secondary rounded-lg">
                  <span className="font-medium">Total:</span>
                  <span
                    className={`font-bold ${
                      totalWeight === 100 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {totalWeight}%
                  </span>
                </div>

                <div className="space-y-4">
                  <FileUploader onFileUpload={handleFileUpload} />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      className="flex-1"
                      onClick={calculateGrades}
                      disabled={totalWeight !== 100 || studentData.length === 0}
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Calcular
                    </Button>

                    <Button
                      type="button"
                      className="flex-1"
                      onClick={downloadResults}
                      disabled={calculatedGrades.length === 0}
                      variant="outline"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {studentData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Datos Cargados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {studentData.length} estudiantes cargados
              </div>
            </CardContent>
          </Card>
        )}

        <Questions />
      </div>
    </div>
  );
}

export default App;
