function showSmoke() {
    const smokeDiv = document.getElementById("smoke");
    smokeDiv.classList.remove("hidden");

    setTimeout(() => {
        smokeDiv.classList.add("hidden");
    }, 3000);
}