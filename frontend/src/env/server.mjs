// @ts-check
import { serverSchema, serverEnv } from './schema.mjs';
import { formatErrors } from './client.mjs'; // Import formatErrors function

// Validate server-side environment variables
const _serverEnv = serverSchema.safeParse(serverEnv);

if (!_serverEnv.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(_serverEnv.error.format())
  );
  throw new Error('Invalid environment variables');
}

// Check for server-side variables that are mistakenly prefixed with NEXT_PUBLIC_
for (const key of Object.keys(_serverEnv.data)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.warn('❌ You are exposing a server-side env-variable:', key);
    throw new Error('You are exposing a server-side env-variable');
  }
}

// Import client-side environment variables from client.mjs
import { env as clientEnv } from './client.mjs';

// Export the combined environment variables
export const env = { ..._serverEnv.data, ...clientEnv };
