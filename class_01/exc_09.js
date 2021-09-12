function countUp(InitNum, EndNum) {
    const identifier = setInterval(() => {
        InitNum === EndNum ? clearInterval(identifier) : console.log(InitNum++)
    }, 1200)
}

countUp(0, 10)