function filterList() {
  const filter = document.getElementById("search").value.toLowerCase();
  const items = document.querySelectorAll("#list li");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
}
