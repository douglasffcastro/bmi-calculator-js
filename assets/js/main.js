const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const inputHeight = e.target.querySelector('#height')
  const inputWeight = e.target.querySelector('#weight')

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)

  if (!height || !weight) {
    setBMI('Please enter numbers only.')
    return
  }

  const bmi = getBMI(weight, height)
  const BMICategory = getBMICategory(bmi)

  const msg = `BMI ${bmi}. Your result suggests you are ${BMICategory}`

  setBMI(msg, true)
})

function getBMICategory (bmi) {
  const category = [
    'Underweight. Being underweight could be a sign you\'re not eating enough or you may be ill. If you\'re underweight, a GP can help.',
    'Healthy weight. Keep up the good work!',
    'Overweight. The best way to lose weight if you\'re overweight is through a combination of diet and exercise.',
    'Obese. The best way to lose weight if you\'re obese is through a combination of diet and exercise, and, in some cases, medicines. See a GP for help and advice.'
  ]

  if (bmi >= 30) return category[3]
  if (bmi >= 25) return category[2]
  if (bmi >= 18.5) return category[1]
  if (bmi < 18.5) return category[0]
}

function getBMI (weight, height) {
  const bmi = weight / height ** 2

  return bmi.toFixed(2)
}

function createP () {
  const p = document.createElement('p')
  return p
}

function createH4 () {
  const h4 = document.createElement('h4')
  return h4
}

function setBMI (msg, isValid) {
  const titleBox = document.querySelector('.title-box')
  const result = document.querySelector('.result')

  titleBox.innerHTML = ''
  result.innerHTML = ''

  const h4 = createH4()
  const p = createP()

  if (isValid) {
    h4.innerHTML = 'Your BMI'
    titleBox.appendChild(h4)
    p.classList.add('result-paragraph')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg

  result.appendChild(p)
}
