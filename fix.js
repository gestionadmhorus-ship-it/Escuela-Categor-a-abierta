const fs = require('fs');
let code = fs.readFileSync('admin.js', 'utf8');

// The original login handler from lines 1155 to 1215 should be commented out or we can just rename the NEW login variables at the end.
// Let's rename the new login variables at the bottom of the file (lines 1720+) to avoid SyntaxError: Identifier 'loginForm' has already been declared

// Find the bottom section where I added the new login logic:
code = code.replace(
    "const loginForm = document.getElementById('admin-login-form');",
    "const loginFormNew = document.getElementById('admin-login-form');"
);
code = code.replace(
    "const loginError = document.getElementById('admin-login-error');",
    "const loginErrorNew = document.getElementById('admin-login-error');"
);
code = code.replace(
    "loginForm.addEventListener('submit', async (e) => {",
    "loginFormNew.addEventListener('submit', async (e) => {"
);
code = code.replace(
    "loginError.style.display = 'block';",
    "loginErrorNew.style.display = 'block';"
);

// ALSO update the hash so it matches "horusadmin2026"
code = code.replace(
    /b735d466fba07f6e80b27af851417a869fc427ba6bf2d5ef722cbfeccdf6ca6a/g,
    'e3db3312a6075ac05146b1a68727b84494b545b845fd76de1d94db7e3b908571'
);

fs.writeFileSync('admin.js', code);
console.log('Fixed duplicate declarations and updated hash');
