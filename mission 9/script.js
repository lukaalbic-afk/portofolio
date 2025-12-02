const bonnesReponses = {
    q1: "HTML",
    q2: "color",
    q3: ["interact"],
    q4: ["version", "collab"],
    q5: "hebergecode",
    q6: "img",
    q7: "cascading",
    q8: "commit",
    q9: "git",
    q10: "client"
};


function testqcm() {
    let score = 0;

    
    for (let i = 1; i <= 10; i++) {
        let nom = "q" + i;
        let inputs = document.querySelectorAll(`input[name="${nom}"]`);

        let bonnes = bonnesReponses[nom];

        
        if (Array.isArray(bonnes)) {
            let cochees = [];
            inputs.forEach(input => {
                if (input.checked) cochees.push(input.value);
            });

            if (JSON.stringify(cochees.sort()) === JSON.stringify(bonnes.sort())) {
                score++;
            }

        } else {
            inputs.forEach(input => {
                if (input.checked && input.value === bonnes) score++;
            });
        }
    }

    document.getElementById("resultat").textContent = 
        "Votre score : " + score + "/10";
}


function corrige() {
    window.open("corrige.html", "_blank", "width=600,height=700");
}