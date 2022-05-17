const form = document.querySelector('#ewallet-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const type = document.querySelector('.add__type').value
  const desc = document.querySelector('.add__description').value
  const value = document.querySelector('.add__value').value
  if (type && desc && value) {
    addItem(type, desc, value)
  } else {
    console.log('Please Fill Up The Form')
  }
})

function addItem(type, desc, value) {
  let time = getFormattedTime()
  let newHtml = `<div class="item">
                     <div class="item-description-time">
                       <div class="item-description">
                         <p>${desc}</p>
                       </div>
                       <div class="item-time">
                         <p>${time}</p>
                       </div>
                     </div>
                     <div class="item-amount ${
                       type === '+' ? 'income-amount' : 'expense-amount'
                     }">
                       <p>${type}$${value}</p>
                     </div>
                  </div>`
  const collection = document.querySelector('.collection')
  collection.insertAdjacentHTML('afterbegin', newHtml)
  clearForm()
}

const clearForm = (e) => {
  document.querySelector('.add__type').value = '+'
  document.querySelector('.add__description').value = ''
  document.querySelector('.add__value').value = ''
}

// Utility Function
getFormattedTime()
function getFormattedTime() {
  const now = new Date().toLocaleTimeString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
  let date = now.split(',')[0].split(' ')
  let time = now.split(',')[1].trim()
  return `${date[1]} ${date[0]}, ${time}`
}
