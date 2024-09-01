import { z } from 'zod';
import { clientSchema } from './schema.mjs';

// Fetch and validate client-side environment variables
const clientEnv = {
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
};

const validatedClientEnv = clientSchema.safeParse(clientEnv);

if (!validatedClientEnv.success) {
  console.error(
    '❌ Invalid client environment variables:\n',
    ...formatErrors(validatedClientEnv.error.format())
  );
  throw new Error('Invalid client environment variables');
}

export const env = validatedClientEnv.data;

/**
 * Format Zod errors into a readable format.
 * @param {Object} errors - The Zod formatted errors.
 * @returns {string[]} - Array of formatted error messages.
 */
export function formatErrors(errors) {
  return Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) {
        return `${name}: ${value._errors.join(', ')}\n`;
      }
      return null;
    })
    .filter(Boolean);
}
