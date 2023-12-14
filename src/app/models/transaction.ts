export interface transactionFromDB {
  transactionId: number;
  transactionType: string;
  fromAccountId: number | null;
  toAccountId: number;
  amount: number;
  date: string;
  userId: number;
}
