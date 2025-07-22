document.addEventListener('DOMContentLoaded', function() {
    // Add click handler to continue button
    const continueBtn = document.querySelector('.continue-btn');
    
    continueBtn.addEventListener('click', function() {
        // Add loading state
        this.innerHTML = 'Processing...';
        this.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Verification process initiated! You would be redirected to the next step.');
            this.innerHTML = 'Continue';
            this.disabled = false;
        }, 2000);
    });

    // Add hover effects to steps
    const steps = document.querySelectorAll('.step');
    
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8fafc';
            this.style.transform = 'translateX(4px)';
            this.style.transition = 'all 0.2s ease';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'translateX(0)';
        });
    });

    // Add subtle animation to the card on load
    const card = document.querySelector('.verification-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
});