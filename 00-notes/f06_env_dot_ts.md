This is used to set environment variables

You can name this file whatever you want.

By default these variables a private, 
so they are only accessible on the server.

src/env.ts
```typescript
import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DATABASE_URL: { description: 'The database connection string.' },
	DATABASE_AUTH_TOKEN: {
		description: 'Auth token for the [Turso](https://turso.tech) database.'
	}
});
```

-------------------------------------------------------------------------------

`.env` is where the values are set

-------------------------------------------------------------------------------
