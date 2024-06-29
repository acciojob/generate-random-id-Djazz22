function makeid(l) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < l; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    
    return result;
}

document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = document.getElementById('length').value;
    const result = makeid(length);
    document.getElementById('result').innerText = 'Generated string: ' + result;
});
