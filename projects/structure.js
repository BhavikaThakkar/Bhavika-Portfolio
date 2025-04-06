function loadProjectData(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => renderProject(data))
        .catch(error => console.error('Error loading JSON:', error));
}

function renderProject(data) {
    document.title = data.title; // Set page title

    const container = document.getElementById("content");
    container.innerHTML = ''; // Clear previous content

    let html = `
        <header id="header" class="fixed w-full z-50 bg-black">
          <nav class="container mx-auto px-6 py-5">
            <div class="flex items-center justify-between">
              <div class="text-2xl font-bold text-gray-600">
                <a href="/" class="text-[#ffffff]">Bhavika Gangadharani</a>
              </div>


              <!-- Desktop Menu -->
              <div class="items-center " id="desktop-menu">
                  <a href="../index.html" class="hidden sm:flex items-center gap-4 text-white hover:text-[#F6AD55] transition-colors duration-300">
                      <svg
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-8 h-8"
                      >
                          <rect width="24" height="24" rx="4" fill="#F6AD55" />
                          <path
                          d="M15 6L9 12L15 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          />
                      </svg>Back To Home
                  </a>
                  <a href="../index.html" class="flex items-center gap-2 sm:hidden text-white hover:text-[#F6AD55] transition-colors duration-300">
                      <svg
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-8 h-8"
                      >
                          <rect width="24" height="24" rx="4" fill="#F6AD55" />
                          <path
                          d="M15 6L9 12L15 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          />
                      </svg>
                      back
                  </a>
              </div>
            </div>
          </nav>
      </header>

      <section class="pt-36 pb-20 bg-black">

          <div class="container mx-auto px-6">
              <div class="max-w-4xl mx-auto text-center">
                  <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 animate__animated animate__fadeIn">
                      ${data.title}
                  </h1>
                  <p class="text-xl text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
                      ${data.description}
                  </p>
              </div>
          </div>
      </section>
      
      <section id="role-responsibilities" class="py-20 bg-neutral-50">
          <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto">
                  <h2 class="text-3xl font-bold mb-12 text-gray-600 text-center animate__animated animate__fadeIn flex justify-center">
                      <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="4" fill="#F6AD55" />
    <path
      d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M6 18C6 15.7909 7.79086 14 10 14H14C16.2091 14 18 15.7909 18 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>

                  </h2>
${data?.position?.length ? `
                  <div class="mb-12 text-center bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                      <h3 class="text-2xl font-semibold text-[#F6AD55] mb-2">${data?.position}</h3>
                  </div>` :`` }

                  <div class="grid md:grid-cols-2 gap-8">
                      <div class="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                          <h3 class="text-xl font-semibold mb-6 text-[#2D3E50]">Key Responsibilities</h3>
                          <ul class="space-y-4" id="responsibilities-list">
                          </ul>
                      </div>

                      <div class="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight">
                          <h3 class="text-xl font-semibold mb-6 text-[#2D3E50]">Project Details</h3>
                          <div class="space-y-4">
                              <div class="flex items-center">
                                  <div class="w-10 h-10 bg-[#F6AD55] rounded-full flex items-center justify-center mr-4">
                                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <div class="font-semibold text-gray-600">Team Size</div>
                                      <div class="text-gray-600">${data.team_budget_methodology.team_size}</div>
                                  </div>
                              </div>
                              
                              <div class="flex items-center">
                                  <div class="w-10 h-10 bg-[#F6AD55] rounded-full flex items-center justify-center mr-4">
                                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <div class="font-semibold text-gray-600">Budget</div>
                                      <div class="text-gray-600">${data.team_budget_methodology.budget}</div>
                                  </div>
                              </div>

                              <div class="flex items-center">
                                  <div class="w-10 h-10 bg-[#F6AD55] rounded-full flex items-center justify-center mr-4">
                                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <div class="font-semibold text-gray-600">Methodology</div>
                                      <div class="text-gray-600">${data.team_budget_methodology.methodology}</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="impact-results" class="py-20 bg-neutral-50">
          <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto">
                  <h2 class="text-3xl font-bold mb-12 text-gray-600 text-center animate__animated animate__fadeIn flex justify-center">
                      <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="4" fill="#F6AD55" />
    <path
      d="M5 19V12M9 19V9M13 19V14M17 19V7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

                  </h2>

                  <div class="grid md:grid-cols-2 gap-8 mb-12">
                      <div class="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                          <h3 class="text-xl font-semibold mb-6 text-[#2D3E50]">Metrics & KPIs</h3>
                          <div class="space-y-6" id="matrix_kpi">
                          </div>
                      </div>

                      <div class="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInRight">
                          <h3 class="text-xl font-semibold mb-6 text-[#2D3E50]">Impact</h3>
                          <ul class="space-y-4" id="impact-list">
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <footer id="footer" class="bg-neutral-900 text-white py-12 pb-24">
          <div class="container mx-auto px-6">
            <div>
      
              <!-- Contact Info -->
              <div>
                <h4 class="text-lg font-semibold mb-4 text-center md:text-left">Contact Info</h4>
                <ul class="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                  <li class="flex items-center justify-center space-x-3">
                    <i class="fas fa-envelope text-[#F6AD55]"></i>
                    <a href="mailto:b.gangadharani1996@gmail.com" title="b.gangadharani1996@gmail.com" class="text-gray-400 hover:text-[#F6AD55] transition-colors">b.gangadharani1996@gmail.com</a>
                  </li>
                  <li class="flex items-center justify-center space-x-3">
                    <i class="fas fa-phone text-[#F6AD55]"></i>
                    <a href="tel:Contact no :+16479398537" title="16479398537" class="text-gray-400 hover:text-[#F6AD55] transition-colors">Contact no : +1-(647)-939-8537</a>
                  </li>
                  <li class="flex items-center justify-center space-x-3">
                    <i class="fas fa-map-marker-alt text-[#F6AD55]"></i>
                    <span class="text-gray-400">Waterloo, ON</span>
                  </li>
                </ul>
              </div>
            </div>
      
            <hr class="border-gray-800 my-8">
      
            <!-- Bottom Footer -->
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm">
                &copy;  Bhavika Gangadharani. All rights reserved.
              </p>
              <div class="flex space-x-6 mt-4 md:mt-0">
                <p class="text-gray-400 hover:text-[#F6AD55] transition-colors text-sm">Bhavika Gangadharani - Project Manager</p>
              </div>
            </div>
          </div>
      
          <!-- Scroll to Top Button -->
          <button id="scrollToTop" class="fixed bottom-8 right-8 bg-[#F6AD55] text-white w-12 h-12 rounded-full hidden items-center justify-center hover:bg-[#2D3E50] transition-colors">
            <i class="fas fa-arrow-up"></i>
          </button>
      </footer>
    `;

    container.innerHTML = html;

    ulElement = document.getElementById("responsibilities-list");

    data.key_responsibilities.forEach((responsibility) => {
        const liElement = document.createElement("li");
        liElement.className = "flex items-start";

        liElement.innerHTML = `
            <svg class="w-6 h-6 text-[#F6AD55] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-gray-600">${responsibility}</span>
        `;

        ulElement.appendChild(liElement);
    });

    const matrixKpiElement = document.getElementById("matrix_kpi");

    data.metrics_kpis.forEach((item) => {
    const divElement = document.createElement("div");
    divElement.className = "flex items-center";

    divElement.innerHTML = `
        <div class="w-20 h-20 flex-shrink-0 bg-[#F6AD55] rounded-full flex items-center justify-center mr-4">
        <span class="text-2xl font-bold text-white text-center">${item.value}</span>
        </div>
        <p class="text-gray-600">${item.description}</p>
    `;

    matrixKpiElement.appendChild(divElement);
    });


    const impactElement = document.getElementById("impact-list");


    data.impact.forEach((impactPoint) => {
    const liElement = document.createElement("li");
    liElement.className = "flex items-start";

    liElement.innerHTML = `
        <svg class="w-6 h-6 text-[#F6AD55] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span class="text-gray-600">${impactPoint}</span>
    `;

    impactElement.appendChild(liElement);
    });
}