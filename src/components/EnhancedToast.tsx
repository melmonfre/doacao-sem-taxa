import { toast as originalToast } from '@/hooks/use-toast';
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface EnhancedToastOptions {
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

const getToastIcon = (type: ToastType) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="w-5 h-5 text-success" />;
    case 'error':
      return <X className="w-5 h-5 text-destructive" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-warning" />;
    case 'info':
    default:
      return <Info className="w-5 h-5 text-primary" />;
  }
};

const getToastVariant = (type: ToastType) => {
  switch (type) {
    case 'error':
      return 'destructive';
    default:
      return 'default';
  }
};

export const toast = {
  success: (options: Omit<EnhancedToastOptions, 'type'>) => {
    return originalToast({
      ...options,
      variant: getToastVariant('success'),
      description: (
        <div className="flex items-start gap-2">
          {getToastIcon('success')}
          <div>
            <div className="font-medium">{options.title}</div>
            {options.description && (
              <div className="text-sm text-muted-foreground mt-1">
                {options.description}
              </div>
            )}
          </div>
        </div>
      ),
      title: undefined,
    });
  },

  error: (options: Omit<EnhancedToastOptions, 'type'>) => {
    return originalToast({
      ...options,
      variant: getToastVariant('error'),
      description: (
        <div className="flex items-start gap-2">
          {getToastIcon('error')}
          <div>
            <div className="font-medium">{options.title}</div>
            {options.description && (
              <div className="text-sm text-muted-foreground mt-1">
                {options.description}
              </div>
            )}
          </div>
        </div>
      ),
      title: undefined,
    });
  },

  warning: (options: Omit<EnhancedToastOptions, 'type'>) => {
    return originalToast({
      ...options,
      variant: getToastVariant('warning'),
      description: (
        <div className="flex items-start gap-2">
          {getToastIcon('warning')}
          <div>
            <div className="font-medium">{options.title}</div>
            {options.description && (
              <div className="text-sm text-muted-foreground mt-1">
                {options.description}
              </div>
            )}
          </div>
        </div>
      ),
      title: undefined,
    });
  },

  info: (options: Omit<EnhancedToastOptions, 'type'>) => {
    return originalToast({
      ...options,
      variant: getToastVariant('info'),
      description: (
        <div className="flex items-start gap-2">
          {getToastIcon('info')}
          <div>
            <div className="font-medium">{options.title}</div>
            {options.description && (
              <div className="text-sm text-muted-foreground mt-1">
                {options.description}
              </div>
            )}
          </div>
        </div>
      ),
      title: undefined,
    });
  },

  // Keep the original toast for backward compatibility
  original: originalToast,
};

// Loading toast with manual dismiss
export const loadingToast = (title: string, description?: string) => {
  return originalToast({
    title,
    description,
    duration: Infinity, // Don't auto-dismiss
  });
};

// Quick notification shortcuts
export const showSuccess = (message: string) => toast.success({ title: message });
export const showError = (message: string) => toast.error({ title: message });
export const showWarning = (message: string) => toast.warning({ title: message });
export const showInfo = (message: string) => toast.info({ title: message });
