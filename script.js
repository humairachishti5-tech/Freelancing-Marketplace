const freelancers = [
  {
    name: "Ali Khan",
    service: "Responsive Website Design",
    category: "Web Development",
    price: 50,
    description: "Creates clean and mobile-friendly websites."
  },
  {
    name: "Sara Ahmed",
    service: "Logo and Brand Design",
    category: "Graphic Design",
    price: 30,
    description: "Designs logos and creative brand visuals."
  },
  {
    name: "Usman Malik",
    service: "Website Development",
    category: "Web Development",
    price: 70,
    description: "Builds websites using HTML and CSS."
  },
  {
    name: "Ayesha Noor",
    service: "Article Writing",
    category: "Writing",
    price: 25,
    description: "Writes clear articles and blog posts."
  }
];

let selectedCategory = "All";

const cardsContainer = document.getElementById("freelancerCards");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const noResults = document.getElementById("noResults");

function displayFreelancers() {
  const searchText = searchInput.value.toLowerCase();

  let filteredFreelancers = freelancers.filter(function(freelancer) {
    const matchesSearch =
      freelancer.name.toLowerCase().includes(searchText) ||
      freelancer.service.toLowerCase().includes(searchText) ||
      freelancer.category.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      freelancer.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortSelect.value === "priceLow") {
    filteredFreelancers.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "priceHigh") {
    filteredFreelancers.sort((a, b) => b.price - a.price);
  }

  cardsContainer.innerHTML = "";

  filteredFreelancers.forEach(function(freelancer) {
    cardsContainer.innerHTML += `
      <div class="card">
        <h3>${freelancer.name}</h3>
        <p><strong>${freelancer.service}</strong></p>
        <p>Category: ${freelancer.category}</p>
        <p>${freelancer.description}</p>
        <p class="price">Starting at $${freelancer.price}</p>
        <a class="profile-link" href="profile.html">
          View Profile
        </a>
      </div>
    `;
  });

  noResults.style.display =
    filteredFreelancers.length === 0 ? "block" : "none";
}

function filterCategory(category) {
  selectedCategory = category;
  displayFreelancers();
}

searchInput.addEventListener("input", displayFreelancers);
sortSelect.addEventListener("change", displayFreelancers);

displayFreelancers();