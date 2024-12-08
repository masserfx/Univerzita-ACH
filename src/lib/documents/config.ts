export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain'
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const DOCUMENT_CATEGORIES = {
  TECHNICAL: 'technical',
  TRAINING: 'training',
  PRODUCT: 'product',
  SERVICE: 'service',
  SALES: 'sales',
  OTHER: 'other'
} as const; 