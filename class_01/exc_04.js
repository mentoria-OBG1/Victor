let celsiusToFahrenheit = celsius => `${celsius} to Fahrenheit is: ${celsius * 1.8 + 32}`,
    wordLength = text => `The length of this text is: ${text.split(' ').length}`

console.log(
    celsiusToFahrenheit(23), ' | ',
    celsiusToFahrenheit(72.5), ' | ',
    wordLength('This is the best mentoring of the World')
)

