export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id: string;
  title: string;
  subtitle?: string;
  bgColor?: 'primary' | 'secondary' | 'white' | 'gray';
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export interface CardProps extends BaseComponentProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  tags?: string[];
  href?: string;
  onClick?: () => void;
}
