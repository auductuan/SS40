document.addEventListener("DOMContentLoaded", function() {
    const localStorageValues = document.getElementById("localStorageValues");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${value}`;
        localStorageValues.appendChild(listItem);
    }
});
