/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function (a) {
        return new Promise(function (resolve, reject) {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";
            var data = JSON.stringify(a);

            // Modificação aqui: Removendo referência a XDomainRequest
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://smtpjs.com/v3/smtpjs.aspx?", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onload = function () {
                var response = xhr.responseText;
                resolve(response);
            };
            xhr.onerror = function () {
                reject('Erro ao enviar o email.');
            };

            xhr.send(data);
        });
    }
};

// Remova esta linha se você não estiver usando a variável Email neste arquivo
export { Email };
