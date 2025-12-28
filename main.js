// Get elements
const container = document.getElementById('mainContainer');
const loginPanel = document.querySelector('.login-panel');
const signupPanel = document.querySelector('.signup-panel');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

// Mobile elements
const mobileLanding = document.getElementById('mobileLanding');
const mobileLoginView = document.getElementById('mobileLoginView');
const mobileSignupView = document.getElementById('mobileSignupView');
const mobileSignInBtn = document.getElementById('mobileSignInBtn');
const mobileSignUpBtn = document.getElementById('mobileSignUpBtn');
const backFromLogin = document.getElementById('backFromLogin');
const backFromSignup = document.getElementById('backFromSignup');
const switchToSignupMobile = document.getElementById('switchToSignupMobile');
const switchToLoginMobile = document.getElementById('switchToLoginMobile');

// Mobile Navigation
if (mobileSignInBtn) {
    mobileSignInBtn.addEventListener('click', function () {
        mobileLanding.classList.add('hidden');
        mobileLoginView.classList.add('active');
    });
}

if (mobileSignUpBtn) {
    mobileSignUpBtn.addEventListener('click', function () {
        mobileLanding.classList.add('hidden');
        mobileSignupView.classList.add('active');
    });
}

if (backFromLogin) {
    backFromLogin.addEventListener('click', function () {
        mobileLoginView.classList.remove('active');
        mobileLanding.classList.remove('hidden');
    });
}

if (backFromSignup) {
    backFromSignup.addEventListener('click', function () {
        mobileSignupView.classList.remove('active');
        mobileLanding.classList.remove('hidden');
    });
}

if (switchToSignupMobile) {
    switchToSignupMobile.addEventListener('click', function (e) {
        e.preventDefault();
        mobileLoginView.classList.remove('active');
        mobileSignupView.classList.add('active');
    });
}

if (switchToLoginMobile) {
    switchToLoginMobile.addEventListener('click', function (e) {
        e.preventDefault();
        mobileSignupView.classList.remove('active');
        mobileLoginView.classList.add('active');
    });
}


// Track current mode
let isSignupMode = false;

// Switch to Signup Mode with smooth animation
signUpBtn.addEventListener('click', function () {
    if (!isSignupMode) {
        switchToSignup();
    }
});

// Switch to Login Mode with smooth animation
signInBtn.addEventListener('click', function () {
    if (isSignupMode) {
        switchToLogin();
    }
});

// Mobile links
const showSignupMobileLink = document.getElementById('showSignupMobile');
const showLoginMobileLink = document.getElementById('showLoginMobile');

if (showSignupMobileLink) {
    showSignupMobileLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (!isSignupMode) {
            switchToSignup();
        }
    });
}

if (showLoginMobileLink) {
    showLoginMobileLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (isSignupMode) {
            switchToLogin();
        }
    });
}

// Function to switch to Signup
function switchToSignup() {
    isSignupMode = true;

    // Step 1: Fade out current content
    loginPanel.classList.remove('active');
    loginForm.classList.remove('active');

    // Step 2: After a short delay, slide the green panel
    setTimeout(() => {
        container.classList.add('signup-mode');
    }, 200);

    // Step 3: Fade in new content
    setTimeout(() => {
        signupPanel.classList.add('active');
        signupForm.classList.add('active');
    }, 600);
}

// Function to switch to Login
function switchToLogin() {
    isSignupMode = false;

    // Step 1: Fade out current content
    signupPanel.classList.remove('active');
    signupForm.classList.remove('active');

    // Step 2: After a short delay, slide the green panel back
    setTimeout(() => {
        container.classList.remove('signup-mode');
    }, 200);

    // Step 3: Fade in new content
    setTimeout(() => {
        loginPanel.classList.add('active');
        loginForm.classList.add('active');
    }, 600);
}

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Add loading animation
    const btn = this.querySelector('.solid-btn');
    const originalText = btn.textContent;
    btn.textContent = 'LOGGING IN...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Add pulse effect
    btn.style.animation = 'pulse 1s infinite';

    setTimeout(() => {
        btn.style.animation = '';
        alert('Login successful! Welcome back! 🎉');
        btn.textContent = originalText;
        btn.style.opacity = '1';
        btn.disabled = false;
    }, 1500);
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get password fields
    const inputs = this.querySelectorAll('input[type="password"]');
    const password = inputs[0].value;
    const confirmPassword = inputs[1].value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('⚠️ Passwords do not match! Please try again.');
        inputs[1].style.borderColor = 'red';
        inputs[1].focus();
        setTimeout(() => {
            inputs[1].style.borderColor = '';
        }, 2000);
        return;
    }

    // Add loading animation
    const btn = this.querySelector('.solid-btn');
    const originalText = btn.textContent;
    btn.textContent = 'CREATING ACCOUNT...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Add pulse effect
    btn.style.animation = 'pulse 1s infinite';

    setTimeout(() => {
        btn.style.animation = '';
        alert('Account created successfully! Welcome! 🎉');
        btn.textContent = originalText;
        btn.style.opacity = '1';
        btn.disabled = false;

        // Switch back to login after signup with smooth transition
        setTimeout(() => {
            switchToLogin();
            // Clear the signup form
            document.getElementById('signupForm').reset();
        }, 1000);
    }, 1500);
});

// Handle Mobile Login Form Submission
const mobileLoginForm = document.getElementById('mobileLoginForm');
if (mobileLoginForm) {
    mobileLoginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Add loading animation
        const btn = this.querySelector('.solid-btn');
        const originalText = btn.textContent;
        btn.textContent = 'SIGNING IN...';
        btn.style.opacity = '0.7';
        btn.disabled = true;

        // Add pulse effect
        btn.style.animation = 'pulse 1s infinite';

        setTimeout(() => {
            btn.style.animation = '';
            alert('Login successful! Welcome back! 🎉');
            btn.textContent = originalText;
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 1500);
    });
}

// Handle Mobile Signup Form Submission
const mobileSignupForm = document.getElementById('mobileSignupForm');
if (mobileSignupForm) {
    mobileSignupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get password fields
        const inputs = this.querySelectorAll('input[type="password"]');
        const password = inputs[0].value;
        const confirmPassword = inputs[1].value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('⚠️ Passwords do not match! Please try again.');
            inputs[1].style.borderColor = 'red';
            inputs[1].focus();
            setTimeout(() => {
                inputs[1].style.borderColor = '';
            }, 2000);
            return;
        }

        // Add loading animation
        const btn = this.querySelector('.solid-btn');
        const originalText = btn.textContent;
        btn.textContent = 'CREATING ACCOUNT...';
        btn.style.opacity = '0.7';
        btn.disabled = true;

        // Add pulse effect
        btn.style.animation = 'pulse 1s infinite';

        setTimeout(() => {
            btn.style.animation = '';
            alert('Account created successfully! Welcome! 🎉');
            btn.textContent = originalText;
            btn.style.opacity = '1';
            btn.disabled = false;

            // Switch to login view after signup
            setTimeout(() => {
                mobileSignupView.classList.remove('active');
                mobileLoginView.classList.add('active');
                // Clear the signup form
                mobileSignupForm.reset();
            }, 1000);
        }, 1500);
    });
}


// Add smooth input animations
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    // Focus effect
    input.addEventListener('focus', function () {
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 5px 15px rgba(29, 122, 70, 0.2)';
    });

    // Blur effect
    input.addEventListener('blur', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '';
    });

    // Typing effect
    input.addEventListener('input', function () {
        if (this.value.length > 0) {
            this.style.background = '#b2dfdb';
        } else {
            this.style.background = '#e0f2f1';
        }
    });
});

// Add entrance animation on page load
window.addEventListener('load', function () {
    // Fade in the login content
    setTimeout(() => {
        loginPanel.classList.add('active');
        loginForm.classList.add('active');
    }, 300);
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.98);
        }
    }
`;
document.head.appendChild(style);