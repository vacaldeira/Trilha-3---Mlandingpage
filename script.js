// Função para alternar o menu mobile
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('open'); // Adiciona ou remove a classe 'open' para o menu
}

// Função ao clicar no botão "Get Started"
function started() {
  alert("Let's get started!"); 
}

// Função para o carrossel de depoimentos
let currentTestimonial = 0; // Indica qual depoimento está sendo exibido

function showTestimonial(index) {
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach((testimonial, i) => {
    // Exibe o depoimento atual e esconde os outros
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

function nextTestimonial() {
  const testimonials = document.querySelectorAll('.testimonial');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length; // Avança para o próximo
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  const testimonials = document.querySelectorAll('.testimonial');
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length; // Volta para o anterior
  showTestimonial(currentTestimonial);
}

// Inicializa o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  showTestimonial(currentTestimonial); // Exibe o primeiro depoimento

  // Adiciona eventos aos botões do carrossel
  const nextBtn = document.querySelector('.nest-btn');
  const prevBtn = document.querySelector('.prev-btn');

  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);
});

// Função para validar e capturar o email do formulário
function validateAndSubmitEmail(event) {
  event.preventDefault(); 

  const emailInput = document.querySelector('.newsletter-form input[type="email"]');
  const email = emailInput.value.trim();

  // Validação simples para verificar se é um email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (email === "") {
    alert("Please enter your email."); // Alerta caso o campo esteja vazio
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address."); // Alerta para emails inválidos
  } else {
    alert(`Thank you for subscribing with: ${email}`); // Mensagem de sucesso
    emailInput.value = ""; // Limpa o campo após o envio
  }
}

// Adicionar evento ao formulário
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', validateAndSubmitEmail);
  }
});
