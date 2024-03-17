// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isFirstnameEmpty: false,
    isLastnameEmpty: false,
    isSubmitted: false,
  }

  onSubmitAnotherResponse = () => {
    this.setState({isSubmitted: false, firstname: '', lastname: ''})
  }

  registrationSuccessView = () => (
    <div className="success-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="submit-successfull-msg">Submitted Successfully</p>
      <button
        className="submit-button"
        type="button"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        isFirstnameEmpty: !isValidFirstName,
        isLastnameEmpty: !isValidLastName,
        isSubmitted: false,
      })
    }
  }

  validateFirstName = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  validateLastName = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({isFirstnameEmpty: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({isLastnameEmpty: !isValidLastName})
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value, isFirstnameEmpty: false})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value, isLastnameEmpty: false})
  }

  renderFirstNameField = () => {
    const {firstname, isFirstnameEmpty} = this.state
    const className = isFirstnameEmpty
      ? 'user-input-field error-input-field'
      : 'user-input-field'
    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className={className}
          placeholder="First name"
          value={firstname}
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstname}
        />
      </div>
    )
  }

  renderLastNameField = () => {
    const {lastname, isLastnameEmpty} = this.state
    const className = isLastnameEmpty
      ? 'user-input-field error-input-field'
      : 'user-input-field'
    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={className}
          placeholder="Last name"
          value={lastname}
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastname}
        />
      </div>
    )
  }

  renderRegistrationForm = () => {
    const {isFirstnameEmpty, isLastnameEmpty} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {isFirstnameEmpty && <p className="error-msg">Required</p>}
        {this.renderLastNameField()}
        {isLastnameEmpty && <p className="error-msg">Required</p>}

        <div className="submit-btn-container">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="responsive-container">
          {isSubmitted
            ? this.registrationSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
