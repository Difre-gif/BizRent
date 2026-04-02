const crypto = require('crypto');
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});
const fs = require('fs');

const privateBase64 = Buffer.from(privateKey).toString('base64');
const publicBase64 = Buffer.from(publicKey).toString('base64');

const envContent = `DATABASE_URL="postgresql://postgres:BizNetManage321%3F@db.ippbpimivjuabjijuwvv.supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:BizNetManage321%3F@db.ippbpimivjuabjijuwvv.supabase.co:5432/postgres"
JWT_PRIVATE_KEY="${privateBase64}"
JWT_PUBLIC_KEY="${publicBase64}"
`;

fs.writeFileSync('.env', envContent);
console.log('.env generated successfully');
