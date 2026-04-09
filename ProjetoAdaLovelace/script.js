document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const destino = this.href;

        if (destino && destino.includes(window.location.origin)) {
            e.preventDefault();
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = destino;
            }, 400);
        }
    });
});