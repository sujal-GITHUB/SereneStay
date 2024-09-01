import { z } from 'zod';

// Define schema for server-side environment variables
export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

// Fetch server-side environment variables
export const serverEnv = {
  NODE_ENV: process.env.NODE_ENV,
};

// Define schema for client-side environment variables
export const clientSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
});

// Fetch client-side environment variables
export const clientEnv = {
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
};
