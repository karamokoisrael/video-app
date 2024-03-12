export interface LayoutStore {
  hydrated: boolean;
  termsAndConditionsAccepted: boolean;
  acceptTermsAndConditions: () => void;
  rejectTermsAndConditions: () => void;
}

export interface ValidationBadgeProps {
  condition: boolean;
  warning?: boolean;
}
