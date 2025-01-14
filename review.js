document.getElementById("review-box").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const review = document.getElementById("review").value;

  // Get existing reviews or initialize an empty array
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Add the new review
  reviews.push({ name, review });

  // Save updated reviews to Local Storage
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Display updated reviews
  displayReviews();

  // Clear form fields
  this.reset();
});

function displayReviews() {
  const reviewsList = document.getElementById("reviewsList");
  reviewsList.innerHTML = ""; // Clear existing reviews

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.forEach((item) => {
    const listItem = `<li><strong>${item.name}:</strong> ${item.review}</li>`;
    reviewsList.innerHTML += listItem;
  });
}

// Load reviews on page load
displayReviews();
