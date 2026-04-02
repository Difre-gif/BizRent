const fs = require('fs');
let envContent = fs.readFileSync('.env', 'utf-8');
envContent = envContent.replace('db.ippbpimivjuabjijuwvv.supabase.co:5432', 'aws-0-eu-west-1.pooler.supabase.com:6543');
envContent = envContent.replace('postgres:Biz', 'postgres.ippbpimivjuabjijuwvv:Biz');
envContent = envContent.replace(/"/g, ''); // just in case
fs.writeFileSync('.env', envContent);
console.log('Env updated');
