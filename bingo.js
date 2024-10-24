let drawnNumbers = [];

function drawNumber() {
    if (drawnNumbers.length < 75) {
        let number = Math.floor(Math.random() * 75) + 1;
        while (drawnNumbers.includes(number)) {
            number = Math.floor(Math.random() * 75) + 1;
        }
        drawnNumbers.push(number);
        document.getElementById('numberDisplay').textContent = `選ばれた番号: ${number}`;
        document.getElementById('history').textContent = `履歴: ${drawnNumbers.join(', ')}`;
    } else {
        document.getElementById('numberDisplay').textContent = "すべての番号が選ばれました";
    }
}
