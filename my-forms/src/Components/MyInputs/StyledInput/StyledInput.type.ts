export interface StyledInputProps {
  type: string;
  id: string;
  title: string;
  refObject: React.LegacyRef<HTMLInputElement>;
  error?: string;
}
