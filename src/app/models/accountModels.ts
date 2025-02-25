export interface account {
  accountId: number;
  name: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  amount: number;
  includeTotal: boolean;
  mainAccount: boolean;
  userId: number;
}

export interface addAccount {
  name: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  includeTotal: boolean;
}

export interface accountId {
  accountId: number;
}

export interface rechargeAccount {
  toAccount: number;
  amount: string;
  notes: string;
  date: Date;
  transactionOfType: string;
}

export interface transferAccount {
  fromAccountId: number;
  toAccountId: number | undefined;
  amount: string;
  notes: string;
  date: Date;
  transactionOfType: string;
}
