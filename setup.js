import fs from 'fs';
import path from 'path';

// Create .env.local file with DATABASE_URL
const envContent = 'DATABASE_URL="file:./prisma/dev.db"\nNEXT_PUBLIC_SOCKET_URL="http://localhost:4001"\n';
fs.writeFileSync('.env.local', envContent);

console.log('✅ Created .env.local file with required environment variables');
console.log('📁 File location:', path.resolve('.env.local'));
