// Utility functions for PIX key validation

export interface PixValidationResult {
  isValid: boolean;
  type: 'cpf' | 'cnpj' | 'email' | 'phone' | 'random' | 'unknown';
  message: string;
}

// CPF validation
const validateCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, '');
  
  if (cpf.length !== 11 || !/^\d{11}$/.test(cpf)) return false;
  
  // Check for known invalid patterns
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  
  // Validate check digits
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let checkDigit = (sum * 10) % 11;
  if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
  if (checkDigit !== parseInt(cpf.charAt(9))) return false;
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  checkDigit = (sum * 10) % 11;
  if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
  if (checkDigit !== parseInt(cpf.charAt(10))) return false;
  
  return true;
};

// CNPJ validation
const validateCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  
  if (cnpj.length !== 14 || !/^\d{14}$/.test(cnpj)) return false;
  
  // Check for known invalid patterns
  if (/^(\d)\1{13}$/.test(cnpj)) return false;
  
  // Validate check digits
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * weights1[i];
  }
  let checkDigit = sum % 11;
  checkDigit = checkDigit < 2 ? 0 : 11 - checkDigit;
  if (checkDigit !== parseInt(cnpj.charAt(12))) return false;
  
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * weights2[i];
  }
  checkDigit = sum % 11;
  checkDigit = checkDigit < 2 ? 0 : 11 - checkDigit;
  if (checkDigit !== parseInt(cnpj.charAt(13))) return false;
  
  return true;
};

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Phone validation (Brazilian format)
const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/[^\d]+/g, '');
  
  // Brazilian phone numbers: 10 or 11 digits
  if (cleanPhone.length < 10 || cleanPhone.length > 11) return false;
  
  // Must start with area code (11-99)
  const areaCode = parseInt(cleanPhone.substring(0, 2));
  if (areaCode < 11 || areaCode > 99) return false;
  
  // Mobile numbers (11 digits) must have 9 as the third digit
  if (cleanPhone.length === 11) {
    const thirdDigit = parseInt(cleanPhone.charAt(2));
    if (thirdDigit !== 9) return false;
  }
  
  return true;
};

// Random key validation (UUID v4 format)
const validateRandomKey = (key: string): boolean => {
  const randomKeyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return randomKeyRegex.test(key);
};

// Main PIX validation function
export const validatePixKey = (pixKey: string): PixValidationResult => {
  if (!pixKey || pixKey.trim().length === 0) {
    return {
      isValid: false,
      type: 'unknown',
      message: 'Chave PIX é obrigatória'
    };
  }
  
  const trimmedKey = pixKey.trim();
  
  // Check if it's a CPF
  const cleanedForCPF = trimmedKey.replace(/[^\d]/g, '');
  if (cleanedForCPF.length === 11 && /^\d+$/.test(cleanedForCPF)) {
    if (validateCPF(cleanedForCPF)) {
      return {
        isValid: true,
        type: 'cpf',
        message: 'CPF válido'
      };
    } else {
      return {
        isValid: false,
        type: 'cpf',
        message: 'CPF inválido'
      };
    }
  }
  
  // Check if it's a CNPJ
  const cleanedForCNPJ = trimmedKey.replace(/[^\d]/g, '');
  if (cleanedForCNPJ.length === 14 && /^\d+$/.test(cleanedForCNPJ)) {
    if (validateCNPJ(cleanedForCNPJ)) {
      return {
        isValid: true,
        type: 'cnpj',
        message: 'CNPJ válido'
      };
    } else {
      return {
        isValid: false,
        type: 'cnpj',
        message: 'CNPJ inválido'
      };
    }
  }
  
  // Check if it's an email
  if (trimmedKey.includes('@')) {
    if (validateEmail(trimmedKey)) {
      return {
        isValid: true,
        type: 'email',
        message: 'Email válido'
      };
    } else {
      return {
        isValid: false,
        type: 'email',
        message: 'Email inválido'
      };
    }
  }
  
  // Check if it's a phone number
  const cleanedForPhone = trimmedKey.replace(/[^\d]/g, '');
  if (cleanedForPhone.length >= 10 && cleanedForPhone.length <= 11) {
    if (validatePhone(trimmedKey)) {
      return {
        isValid: true,
        type: 'phone',
        message: 'Telefone válido'
      };
    } else {
      return {
        isValid: false,
        type: 'phone',
        message: 'Telefone inválido'
      };
    }
  }
  
  // Check if it's a random key (UUID)
  if (validateRandomKey(trimmedKey)) {
    return {
      isValid: true,
      type: 'random',
      message: 'Chave aleatória válida'
    };
  }
  
  return {
    isValid: false,
    type: 'unknown',
    message: 'Formato de chave PIX não reconhecido. Use CPF, CNPJ, email, telefone ou chave aleatória.'
  };
};

// Format PIX key for display
export const formatPixKey = (pixKey: string, type: PixValidationResult['type']): string => {
  switch (type) {
    case 'cpf':
      const cpf = pixKey.replace(/[^\d]/g, '');
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    case 'cnpj':
      const cnpj = pixKey.replace(/[^\d]/g, '');
      return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    
    case 'phone':
      const phone = pixKey.replace(/[^\d]/g, '');
      if (phone.length === 11) {
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else {
        return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      }
    
    default:
      return pixKey;
  }
};