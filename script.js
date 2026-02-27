function animateNumber(element, endValue, duration = 1000, endMark = "") {
    let startTime = null;

    function updateNumber(timestamp) {
        if (!startTime) startTime = timestamp;

        let progress = timestamp - startTime;
        let percent = Math.min(progress / duration, 1);
        let easeOut = 1 - Math.pow(1 - percent, 3);
        let value = Math.floor(easeOut * endValue);

        if (percent === 1) {
            element.textContent = endValue.toLocaleString() + endMark;
        } else {
            element.textContent = value.toLocaleString();
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}
let element1 = document.getElementById('Element1');
let element2 = document.getElementById('Element2');
let element3 = document.getElementById('Element3');

animateNumber(element1, 6, 800);
animateNumber(element2, 13500, 1500, "+");
animateNumber(element3, 7, 800);