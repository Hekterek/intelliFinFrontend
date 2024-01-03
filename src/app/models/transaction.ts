import { account } from './accountModels';

export interface transactionFromDB {
  transactionId: number;
  transactionType: string;
  fromAccount: account | null;
  toAccount: account;
  amount: number;
  date: string;
  userId: number;
}
