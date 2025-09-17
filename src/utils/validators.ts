// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Email validation
export const validateEmail = (email: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!email) {
    errors.push('E-mail é obrigatório');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('E-mail inválido');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Password validation
export const validatePassword = (password: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!password) {
    errors.push('Senha é obrigatória');
  } else {
    if (password.length < 8) {
      errors.push('Senha deve ter pelo menos 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Senha deve ter pelo menos uma letra maiúscula');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Senha deve ter pelo menos uma letra minúscula');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Senha deve ter pelo menos um número');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Username validation
export const validateUsername = (username: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!username) {
    errors.push('Nome de usuário é obrigatório');
  } else {
    if (username.length < 3) {
      errors.push('Nome de usuário deve ter pelo menos 3 caracteres');
    }
    if (username.length > 20) {
      errors.push('Nome de usuário deve ter no máximo 20 caracteres');
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      errors.push('Nome de usuário pode conter apenas letras, números, _ e -');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// PIX key validation
export const validatePixKey = (pixKey: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!pixKey) {
    errors.push('Chave PIX é obrigatória');
  } else {
    // CPF validation (11 digits)
    const cpfPattern = /^\d{11}$/;
    // Phone validation (10-11 digits with optional country code)
    const phonePattern = /^(\+55)?[1-9]\d{8,10}$/;
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Random key validation (UUID format)
    const randomKeyPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    
    const isValidCPF = cpfPattern.test(pixKey.replace(/\D/g, ''));
    const isValidPhone = phonePattern.test(pixKey.replace(/\D/g, ''));
    const isValidEmail = emailPattern.test(pixKey);
    const isValidRandomKey = randomKeyPattern.test(pixKey);
    
    if (!isValidCPF && !isValidPhone && !isValidEmail && !isValidRandomKey) {
      errors.push('Chave PIX inválida. Use CPF, telefone, e-mail ou chave aleatória');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Campaign title validation
export const validateCampaignTitle = (title: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!title) {
    errors.push('Título é obrigatório');
  } else {
    if (title.length < 10) {
      errors.push('Título deve ter pelo menos 10 caracteres');
    }
    if (title.length > 100) {
      errors.push('Título deve ter no máximo 100 caracteres');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Campaign description validation
export const validateCampaignDescription = (description: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!description) {
    errors.push('Descrição é obrigatória');
  } else {
    if (description.length < 50) {
      errors.push('Descrição deve ter pelo menos 50 caracteres');
    }
    if (description.length > 2000) {
      errors.push('Descrição deve ter no máximo 2000 caracteres');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Target amount validation
export const validateTargetAmount = (amount: number): ValidationResult => {
  const errors: string[] = [];
  
  if (!amount || amount <= 0) {
    errors.push('Meta deve ser maior que zero');
  } else {
    if (amount < 100) {
      errors.push('Meta mínima é R$ 100,00');
    }
    if (amount > 1000000) {
      errors.push('Meta máxima é R$ 1.000.000,00');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Donation amount validation
export const validateDonationAmount = (amount: number): ValidationResult => {
  const errors: string[] = [];
  
  if (!amount || amount <= 0) {
    errors.push('Valor da doação deve ser maior que zero');
  } else {
    if (amount < 5) {
      errors.push('Valor mínimo de doação é R$ 5,00');
    }
    if (amount > 50000) {
      errors.push('Valor máximo de doação é R$ 50.000,00');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// File validation for images
export const validateImageFile = (file: File): ValidationResult => {
  const errors: string[] = [];
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  
  if (!allowedTypes.includes(file.type)) {
    errors.push('Formato de imagem inválido. Use JPG, PNG ou WebP');
  }
  
  if (file.size > maxSize) {
    errors.push('Imagem muito grande. Máximo 5MB');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Complete form validation utilities
export const validateLoginForm = (email: string, password: string) => {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  
  return {
    isValid: emailValidation.isValid && passwordValidation.isValid,
    errors: [...emailValidation.errors, ...passwordValidation.errors]
  };
};

export const validateRegisterForm = (
  name: string,
  email: string,
  username: string,
  password: string,
  confirmPassword: string
) => {
  const errors: string[] = [];
  
  if (!name || name.length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres');
  }
  
  const emailValidation = validateEmail(email);
  const usernameValidation = validateUsername(username);
  const passwordValidation = validatePassword(password);
  
  if (password !== confirmPassword) {
    errors.push('Senhas não coincidem');
  }
  
  return {
    isValid: emailValidation.isValid && usernameValidation.isValid && passwordValidation.isValid && errors.length === 0,
    errors: [...errors, ...emailValidation.errors, ...usernameValidation.errors, ...passwordValidation.errors]
  };
};