
export type InputProps = {
  id: string;
  sizes?: 'small' | 'medium';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  className?: string;
};
