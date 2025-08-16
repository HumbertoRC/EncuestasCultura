export interface Question {
  id: string;
  text: string;
  description?: string;
  typeId: number;
  categoryId: string;
  isRequired: boolean;
  weight: number;
}
