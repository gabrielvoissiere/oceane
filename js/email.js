const sendBtn = document.getElementById("sendBtn")

let nom = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("msg")

sendBtn.addEventListener("click", function () {
    if (nom.value == "" || email.value == "" || message.value == "") {
        alert("Veuillez remplir tous les champs")
    } else {
        let templateParams = {
            from_name: nom.value,
            message: message.value,
        }

        emailjs.send("961nfzg", "e8c4v0g", templateParams, "kGozsCXjKPjC60y95")
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });

        nom.value = ""
        email.value = ""
        message.value = ""
    }
})