let count = 1;
        const countDisplay = document.getElementById("count");
        const errorDisplay = document.getElementById("error");

        document.getElementById("decrement").addEventListener("click", () => {
            if (count > 0) {
                count--;
                countDisplay.textContent = count;
                errorDisplay.style.display = "none";
            } else {
                errorDisplay.style.display = "block";
            }
        });

        document.getElementById("increment").addEventListener("click", () => {
            count++;
            countDisplay.textContent = count;
            errorDisplay.style.display = "none";
        });

        document.getElementById("clear").addEventListener("click", () => {
            count = 0;
            countDisplay.textContent = count;
            errorDisplay.style.display = "none";
        });

        