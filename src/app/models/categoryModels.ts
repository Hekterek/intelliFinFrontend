export interface categoryDTO {
  categoryId: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  amount: number;
  isBudgetOn: boolean;
  budget?: number;
}
