document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const suratList = document.getElementById("list");
            const blurList = document.getElementById("list-blur");

            data.forEach(surat => {
                const li = document.createElement("li");
                li.textContent = surat.nama;
                li.classList.add("item");

                // Menambahkan ke header
                if (surat.blur) {
                    const buffer = li.cloneNode(true);
                    blurList.appendChild(buffer);
                }

                if (surat.blur) li.classList.add("blur");
                suratList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
