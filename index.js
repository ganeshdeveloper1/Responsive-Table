const fName = document.getElementById('firstName')
const lName = document.getElementById('lastName')
const city = document.getElementById('city')
const country = document.getElementById('country')
const table = document.querySelector('table')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const tbody = document.querySelector('#tbody')

let Data = [
  {
    firstName: 'Rohit',
    lastName: 'Sharma',
    city: 'Mumbai',
    country: 'India',
  },
  {
    firstName: 'Virat',
    lastName: 'Kohli',
    city: 'Delhi',
    country: 'India',
  },
  {
    firstName: 'John',
    lastName: 'Paul',
    city: 'London',
    country: 'England',
  },
  {
    firstName: 'Kevin',
    lastName: 'powell',
    city: 'California',
    country: 'America',
  },
  {
    firstName: 'Angela',
    lastName: 'jolie',
    city: 'Tokyo',
    country: 'Japan',
  },
]

window.addEventListener('DOMContentLoaded', () => {
  renderRow()
  btn1.addEventListener('click', () => {
    Data = [
      {
        firstName: fName.value,
        lastName: lName.value,
        city: city.value,
        country: country.value,
      },
      ...Data,
    ]
    renderRow()
  })
  btn2.addEventListener('click', () => {
    Data.push({
      firstName: fName.value,
      lastName: lName.value,
      city: city.value,
      country: country.value,
    })
    renderRow()
  })
})

const renderRow = () => {
  const rowList = Data.map(
    (item, i) =>
      `<tr>
                      <td>${i + 1}</td>
                      <td>${item.firstName}</td>
                      <td>${item.lastName}</td>
                      <td>${item.city}</td>
                      <td>${item.country}</td>
                    </tr>
    `
  )
  tbody.innerHTML = rowList.join(' ')
}
