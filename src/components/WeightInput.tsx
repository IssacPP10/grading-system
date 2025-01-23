import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RubricWeight, rubricIcons } from '@/types';

interface WeightInputProps {
  weight: RubricWeight;
  index: number;
  onChange: (index: number, value: string) => void;
}

export function WeightInput({ weight, index, onChange }: WeightInputProps) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center space-x-2">
        <span>{rubricIcons[weight.icon]}</span>
        <span>{weight.name}</span>
      </Label>
      <div className="relative">
        <Input
          type="number"
          min="0"
          max="100"
          value={weight.weight}
          onChange={(e) => onChange(index, e.target.value)}
          className="pr-12"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
          %
        </span>
      </div>
    </div>
  );
}