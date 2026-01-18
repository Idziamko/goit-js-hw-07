// 1. Select the categories list by ID
const categoriesList = document.querySelector("#categories");

// 2. Select all list items with class 'item'
const items = categoriesList.querySelectorAll(".item");

// 3. Log the total number of categories
console.log(`Number of categories: ${items.length}`);

// 4. Iterate over each category item
items.forEach((item) => {
  // 5. Find the category title (h2 tag)
  const categoryTitle = item.querySelector("h2").textContent;

  // 6. Find all list items (li) within the current category
  const elementsCount = item.querySelectorAll("ul li").length;

  // 7. Log the results to the console
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
