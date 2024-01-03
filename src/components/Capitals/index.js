import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state
    const filteredList = countryAndCapitalsList.filter(
      eachList => eachList.id === capitalId,
    )

    return filteredList
  }

  render() {
    const {capitalId} = this.state
    const countryList = this.getCountry()

    const {id, country} = countryList
    const isStatus = capitalId === id
    const countryName = isStatus ? {country} : null
    return (
      <div>
        <div>
          <h1>Countries And Capitals</h1>
          <select id="status" onChange={this.onChangeOption}>
            {countryAndCapitalsList.map(eachList => (
              <option>eachList.capitalDisplayText</option>
            ))}
          </select>
          <label htmlFor="status">is capital of which country</label>
          <p>{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
