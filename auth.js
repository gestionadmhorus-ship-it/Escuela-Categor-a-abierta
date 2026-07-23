(() => {
    let _isAuthenticated = false;

    function checkExistingSession() {
        if (sessionStorage.getItem('horus_admin_session') === 'active') {
            _isAuthenticated = true;
            return true;
        }
        return false;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.getElementById('admin-login-form');
        const loginError = document.getElementById('admin-login-error');
        const loginModal = document.getElementById('admin-login-modal');
        const adminPassword = document.getElementById('admin-password');

        if (checkExistingSession()) {
            if (loginError) loginError.style.display = 'none';
            if (loginModal) loginModal.style.display = 'none';
            const wrapper = document.getElementById('admin-wrapper');
            if (wrapper) wrapper.style.display = 'flex';
            document.dispatchEvent(new CustomEvent('auth:success', {
                detail: { timestamp: Date.now() }
            }));
        }

        if (!loginForm) return;

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const pwd = adminPassword ? adminPassword.value : '';
            const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwd));
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            if (hashHex === "e3db3312a6075ac05146b1a68727b84494b545b845fd76de1d94db7e3b908571") { // horusadmin2026
                _isAuthenticated = true;
                sessionStorage.setItem('horus_admin_session', 'active');
                if (loginError) loginError.style.display = 'none';
                if (loginModal) loginModal.style.display = 'none';

                document.dispatchEvent(new CustomEvent('auth:success', {
                    detail: { timestamp: Date.now() }
                }));
            } else {
                _isAuthenticated = false;
                sessionStorage.removeItem('horus_admin_session');
                if (loginError) loginError.style.display = 'block';
            }
        });
    });

    window.AuthService = {
        isAuthenticated: () => _isAuthenticated,
        logout: () => {
            _isAuthenticated = false;
            sessionStorage.removeItem('horus_admin_session');
            window.location.reload();
        }
    };
})();
