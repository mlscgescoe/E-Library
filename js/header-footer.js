window.addEventListener('DOMContentLoaded', () => {
// Populate Header Tag
    const header = document.querySelector('header');
    const navdiv = document.createElement('div');
    navdiv.id = "navbar";
    header.appendChild(navdiv);

    navbar.innerHTML = `
        <h2 class="site-name">E-Library</h2>
        <ul class="navbar-links">
        <li class="nav-links"><a href="/">Home</a></li>
        <li class="nav-links"><a href="books.html">Books</a></li>
        <li class="nav-links"><a href="login.html">Log In</a></li>
        <li class="nav-links"><a href="about-us.html">About Us</a></li>
        <li class="nav-links"><a href="contact.html">Contact Us</a></li>
        </ul>
    `;

// Populate Footer Tag
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="contact-info">
        <p>Contact information</p>
        </div>
        <div class="static-pages">
        <ul>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
        </ul>
        </div>
    `;

});

