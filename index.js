//självaste copyfunction
function handleCopy(text){
    navigator.clipboard.writeText(text)
    .then(() => {
        alert(`Copied to clipboard: "${text}"`);
    })
    .catch((error) => {
        console.error("failed to copy: ", error);
        alert("failed to copy text.");
    });
    
  }
  
  document.querySelectorAll('.copy').forEach(button => { //letar igenom alla knappar 
        button.addEventListener('click', () => { //ser till att när man trycker kopierar den rätt text
          const textToCopy = button.getAttribute('data-copy'); //hämtar data skrivet efter data-copy i html documenten
          handleCopy(textToCopy); //koplar tidigare fuction till denna med texttocopy vaiabeln
        });
    });

document.getElementById("uppdaterad").innerHTML = "25-01-22"; // se till att senaste uppdaterade datum är densamma på alla sidor


function createEmailLink(recipient, subject, body) {
  const emailLink = document.getElementById("emailLink");//hämtar rätt 
  const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; //Comprierar recipient subject och body 
  emailLink.href = mailto; //länken till emailen hämtad från W3schools med lite javascript framför för att deklarera länken/göra den till en länk
  emailLink.style.display = "inline"; // lite css för att få länken prydlig
  emailLink.textContent = `skicka email`;//valde att bara passa på att skriv ainehållet här borta
}
window.addEventListener('DOMContentLoaded', () => {
  const recipient = "Arvid.Borgeson@me.com"; //säger till variabeln recipient vilket email som används altså min
  const subject = ""; //ifall jag någonsin vill se till att mailet autofylls
  const body = ""; //används för samam fuctionalitet
  createEmailLink(recipient, subject, body); //kallar på den funtionen precis innan
});