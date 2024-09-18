// JavaScript to toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const dropdownMenu = btn.parentElement.nextElementSibling;
        dropdownMenu.classList.toggle('hidden');
    });
});



// JavaScript for Drowpdown Menu
document.addEventListener("DOMContentLoaded", function () {
    const dropdownLink = document.getElementById("dropdownLink");
    const dropdownMenu = document.getElementById("dropdownMenu");

    dropdownLink.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
        const isClickInside = dropdownLink.contains(event.target) || dropdownMenu.contains(event.target);

        if (!isClickInside) {
            dropdownMenu.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productDropdownLink = document.getElementById("productDropdownLink");
    const productDropdownMenu = document.getElementById("productDropdownMenu");

    productDropdownLink.addEventListener("click", function (event) {
        event.preventDefault();
        productDropdownMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
        const isClickInside = productDropdownLink.contains(event.target) || productDropdownMenu.contains(event.target);

        if (!isClickInside) {
            productDropdownMenu.classList.add("hidden");
        }
    });
});


// JavaScript for Desktop Mode Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
    }
} else {
    sunIcon.style.display = 'none'; // Default to dark mode, show moon icon
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
        localStorage.setItem('theme', 'light-mode');
    } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark-mode');
    }
});

// JavaScript for Mobile Mode Theme Toggle
const mobthemeToggle = document.getElementById('mobile-theme-toggle');
const mobmoonIcon = document.getElementById('moon-icon');
const mobunIcon = document.getElementById('sun-icon');
const mobcurrentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
    }
} else {
    sunIcon.style.display = 'none'; // Default to dark mode, show moon icon
}

mobthemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
        localStorage.setItem('theme', 'light-mode');
    } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark-mode');
    }
});


// Start Pricing Toggle 

const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const starterPrice = document.getElementById("starterPrice");
const professionalPrice = document.getElementById("professionalPrice");
const enterprisePrice = document.getElementById("enterprisePrice");

// Initial prices (monthly)
let monthlyPrices = {
    starter: 15,
    professional: 30,
    enterprise: 48,
};

let yearlyPrices = {
    starter: 12 * 12, // $12/month when billed annually
    professional: 25 * 12, // $25/month when billed annually
    enterprise: 40 * 12, // $40/month when billed annually
};

// Event listener for monthly prices
monthlyBtn.addEventListener("click", () => {
    starterPrice.textContent = `$${monthlyPrices.starter}`;
    professionalPrice.textContent = `$${monthlyPrices.professional}`;
    enterprisePrice.textContent = `$${monthlyPrices.enterprise}`;

    // Set the active style for Monthly button
    monthlyBtn.classList.add('bg-blue-600', 'text-white');
    monthlyBtn.classList.remove('bg-gray-900', 'text-white');

    // Set the inactive style for Yearly button
    yearlyBtn.classList.add('bg-gray-900', 'text-white');
    yearlyBtn.classList.remove('bg-blue-600', 'text-white');
});

// Event listener for yearly prices
yearlyBtn.addEventListener("click", () => {
    starterPrice.textContent = `$${yearlyPrices.starter}`;
    professionalPrice.textContent = `$${yearlyPrices.professional}`;
    enterprisePrice.textContent = `$${yearlyPrices.enterprise}`;

    // Set the active style for Yearly button
    yearlyBtn.classList.add('bg-blue-600', 'text-white');
    yearlyBtn.classList.remove('bg-gray-900', 'text-white');

    // Set the inactive style for Monthly button
    monthlyBtn.classList.add('bg-gray-900', 'text-white');
    monthlyBtn.classList.remove('bg-blue-600', 'text-white');
});

// End Pricing Toggle 


// FAQs Toggle
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '-';
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
        icon.classList.remove('rotate-180');
    }
}


// FAQs category Tabs Changer
function showTab(tabNumber) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));

    // Show the selected tab
    document.getElementById(`tab-${tabNumber}`).classList.remove('hidden');

    // Reset all buttons
    const buttons = document.querySelectorAll('button[id^="tab-"]');
    buttons.forEach(button => {
        button.classList.remove('bg-indigo-600', 'text-white');
        button.classList.add('bg-indigo-100', 'text-indigo-600');
    });

    // Highlight the selected button
    document.getElementById(`tab-${tabNumber}-btn`).classList.remove('bg-indigo-100', 'text-indigo-600');
    document.getElementById(`tab-${tabNumber}-btn`).classList.add('bg-indigo-600', 'text-white');
}



