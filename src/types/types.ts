// teen profile
export type Profile = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

// teen expense
export type Expense = {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;       // e.g., 'Friday', '2023-10-20'
};

// allowance request
export interface AllowanceRequest {
  id: string;
  profileId: string;
  reason: string;
  amount: number;
  status: 'pending' | 'approved' | 'denied';
};

// modals
export type ModalType = 'profile' | 'allowance' | 'request';