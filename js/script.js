const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active from all
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // activate current
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
