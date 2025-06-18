
export interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  expectedUse: string;
}

export interface WaitlistFormProps {
  children: React.ReactNode;
  destination?: string;
  selectedDate?: string;
  selectedTime?: string;
}
