import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calculator, Download } from 'lucide-react';
import { WeightInput } from '@/components/WeightInput';
import { FileUploader } from '@/components/FileUploader';
import { useGradeCalculator } from '@/hooks/useGradeCalculator';

function App() {
  const {
    weights,
    studentData,
    totalWeight,
    handleWeightChange,
    handleFileUpload,
    calculateGrades,
    downloadResults,
    calculatedGrades
  } = useGradeCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="shadow-lg">
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
                  <span className={`font-bold ${totalWeight === 100 ? 'text-green-600' : 'text-red-600'}`}>
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
      </div>
    </div>
  );
}

export default App;