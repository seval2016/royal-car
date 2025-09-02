// Main JavaScript for Royal Car Design
console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, loading components...");

  // Load common components (Header & Footer)
  loadCommonComponents();
});

// Function to load common components
function loadCommonComponents() {
  console.log("Loading common components...");

  // Get current page path to determine active navigation
  const currentPath = window.location.pathname;
  const isHomePage =
    currentPath.endsWith("index.html") ||
    currentPath.endsWith("/") ||
    currentPath === "";

  console.log("Current path:", currentPath);
  console.log("Is home page:", isHomePage);

  // Load Header
  loadHeader(isHomePage);

  // Load Footer
  loadFooter();
}

// Function to load header
function loadHeader(isHomePage) {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) {
    console.error("Header container not found!");
    return;
  }

  console.log("Loading header for home page:", isHomePage);

    const headerHTML = `
        <div class="bg-gray-800 text-white p-5">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <!-- Logo - Sol -->
                    <div class="flex-shrink-0 mb-4 md:mb-0">
                        <a href="${
                          isHomePage ? "index.html" : "../index.html"
                        }" class="flex items-center">
                            <img src="${
                              isHomePage
                                ? "assets/images/logo.png"
                                : "../assets/images/logo.png"
                            }" alt="Royal Cars Logo" class="h-12" />
                        </a>
                    </div>

                    <!-- Navigation Menu - Orta -->
                    <nav class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
                        <a href="${
                          isHomePage ? "index.html" : "../index.html"
                        }" class="text-white hover:text-gray-300 transition-colors duration-200">HOME</a>
                        <a href="${
                          isHomePage ? "pages/about.html" : "about.html"
                        }" class="text-white hover:text-gray-300 transition-colors duration-200">ABOUT</a>
                        <a href="${
                          isHomePage ? "pages/vehicles.html" : "vehicles.html"
                        }" class="text-white hover:text-gray-300 transition-colors duration-200">VEHICLES</a>
                        <a href="${
                          isHomePage ? "pages/gallery.html" : "gallery.html"
                        }" class="text-white hover:text-gray-300 transition-colors duration-200">GALLERY</a>
                        <a href="${
                          isHomePage ? "pages/drivers.html" : "drivers.html"
                        }" class="text-white hover:text-gray-300 transition-colors duration-200">DRIVERS</a>
                        <a href="${
                          isHomePage ? "pages/contact.html" : "contact.html"
                        }" class="text-white hover:text-gray-300 transition-colors duration-200">CONTACT US</a>
                    </nav>

                    <!-- Utility Icons - Sağ -->
                    <div class="flex items-center space-x-6">
                        <!-- Login Icon -->
                        <div class="flex items-center space-x-2 group cursor-pointer">
                            <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <i class="fas fa-user text-white group-hover:text-white"></i>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-white">LOGIN</span>
                                <span class="text-xs text-white/70">Account</span>
                            </div>
                        </div>
                        
                        <!-- Search Icon -->
                        <div class="flex items-center space-x-2 group cursor-pointer">
                            <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <i class="fas fa-search text-white group-hover:text-white"></i>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-white">SEARCH</span>
                                <span class="text-xs text-white/70">Find Cars</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  headerContainer.innerHTML = headerHTML;
  console.log("Header loaded successfully");
}

// Function to load footer
function loadFooter() {
  const footerContainer = document.getElementById("footer-container");
  if (!footerContainer) {
    console.error("Footer container not found!");
    return;
  }

  console.log("Loading footer...");

  const footerHTML = `
        <div class="bg-gray-600 text-white p-5 text-center">
            <div class="container mx-auto px-4">
                <h3 class="text-lg font-semibold mb-2">Footer Loaded Successfully!</h3>
                <p class="text-sm">&copy; 2024 Royal Car. Tüm hakları saklıdır.</p>
            </div>
        </div>
    `;

  footerContainer.innerHTML = footerHTML;
  console.log("Footer loaded successfully");
}
