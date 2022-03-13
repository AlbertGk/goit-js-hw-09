const submitButton = document.querySelector('button');
const delayField = document.querySelector('input[name="delay"]');
const stepField = document.querySelector('input[name="step"]');
const amountField = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      }, delay);
    });
  } else {
    return new Promise(reject => {
      setTimeout(() => {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }, delay);
    });
  }
}


const generatePromises = event => {
  event.preventDefault();

  let acc = Number(delayField.value - stepField.value);

  for (let i = 1; i <= amountField.value; i++) {
    createPromise(i, (acc += Number(stepField.value)))
      .then(message => console.log(message))
      .catch(error => console.log(error));
  }
};

submitButton.addEventListener('click', generatePromises);
