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
export type AllowanceRequest = {
  id: string;
  teenId: string;     // Links to Profile.id
  amount: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;    // For sorting/filtering
};

// modals
export type ModalType = 'profile' | 'allowance' | 'request';