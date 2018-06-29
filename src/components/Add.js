import React from 'react';

export default class AddPage extends React.Component {
  state = {
    stageValue: 'select',
    disciplineValue: 'select',
    proficiencyValue: 'select',
    teachingMethodValue: 'select',
    formatValue: 'select',
    inputTitleValue: '',
    inputDescriptionValue: '',
    inputOutcomeValue: '',
    estimatedDurationValue: '',
    data: {},
    postSuccess: ""

  };

  handleStageChange = (event) => {
    const newStageValue = event.target.value
    this.setState(() => ({ stageValue: newStageValue }));
  }

  handleDisciplineChange = (event) => {
    const newDisciplineValue = event.target.value
    this.setState(() => ({ disciplineValue: newDisciplineValue }));
  }

  handleSkillsWheelChange = event => {
    const newSkillsValue = event.target.value
    this.setState(() => ({ proficiencyValue: newSkillsValue }))
  }

  handleTeachingMethodChange = event => {
    const teachingMethodValue = event.target.value
    this.setState(() => ({ teachingMethodValue }));
  }

  handleFormatValue = event => {
    const formatValue = event.target.value
    this.setState(() => ({ formatValue }));
  }

  handleClearClick = () => {
    this.setState({
      stageValue: 'select',
      disciplineValue: 'select',
      proficiencyValue: 'select',
      teachingMethodValue: 'select',
      formatValue: 'select',
      inputTitleValue: '',
      inputDescriptionValue: '',
      inputOutcomeValue: ''

    })
  }

  handleSubmitClick = () => {
    let requestData = {
      discipline: this.state.disciplineValue,
      stage: this.state.stageValue,
      proficiency: this.state.proficiencyValue,
      topic: this.state.inputTitleValue,
      content_descriptions: this.state.inputDescriptionValue,
      learning_outcome: this.state.inputOutcomeValue,
      delivery_method: this.state.teachingMethodValue,
      delivery_format: this.state.formatValue,
      estimated_duration: this.state.estimatedDurationValue,
      resource_name: 'Test 4',
      resource_url: '',
      pre_requisite_level: '1',
      achievable_level: '3' }

    let data = JSON.stringify(requestData)

    console.log(data)

    fetch('http://localhost:3030/api/training', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        return this.setState({ postSuccess: true })
      }).catch(err => {
        return this.setState({ postSuccess: false})
    })
  }

  updateInputTitleValue = event => {
    const inputValue = event.target.value
    this.setState({ inputTitleValue: inputValue })

  }

  updateInputDescriptionValue = event => {
    const inputDescriptionValue = event.target.value
    this.setState({ inputDescriptionValue })

  }

  updateInputOutcomeValue = event => {
    const inputOutcomeValue = event.target.value
    this.setState({ inputOutcomeValue })

  }

  updateEstiamtedDurationValue = event => {
    const estimatedDurationValue = event.target.value
    this.setState({ estimatedDurationValue })

  }

  render() {
    const discipline = this.state.stageValue !== 'select'
      ? <div className="filter">
        <label>Select Discipline</label>
        <label>
        {/* Filter by discipline: */}
          <select value={this.state.disciplineValue} onChange={this.handleDisciplineChange}>
            <option value="select">- select -</option>
            <option value="Analysis">Analysis</option>
            <option value="Test">Test</option>
            <option value="Development">Development</option>
            <option value="Delivery Leadership">Delivery Leadership</option>
            <option value="Core Skills">Core Skills</option>
          </select>
        </label>
      </div>
      : null

    const skills = this.state.disciplineValue !== 'select'
      ? <div className="filter">
        <label>Select Skill</label>
        <label>
          {/* Filter by skills: */}
          <select value={this.state.proficiencyValue} onChange={this.handleSkillsWheelChange}>
            <option value="select">- select -</option>
            <option value="Agile ways of working">Agile ways of working</option>
            <option value="Business Technology Fluency">Business Technology Fluency</option>
            <option value="Co-Ownership">Co-Ownership</option>
            <option value="Coaching, Role Modelling, Mentoring">Coaching, Role Modelling, Mentoring</option>
            <option value="Continuous Delivery">Continuous Delivery</option>
            <option value="Continuous Learning">Continuous Learning</option>
            <option value="Creative innovative thinking">Creative innovative thinking</option>
            <option value="Design Thinking">Design Thinking</option>
            <option value="Domain Modelling and Design">Domain Modelling and Design</option>
            <option value="Environment & Release Management">Environment & Release Management</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Optimising Flow">Optimising Flow</option>
            <option value="Path to Live">Path to Live</option>
            <option value="Performance & Resilience Testing">Performance & Resilience Testing</option>
            <option value="Problem Solving">Problem Solving</option>
            <option value="Programming Languages">Programming Languages</option>
            <option value="Requirements Engineering">Requirements Engineering</option>
            <option value="Security Testing">Security Testing</option>
            <option value="Servant Leadership">Servant Leadership</option>
            <option value="Solution Design">Solution Design</option>
            <option value="Stakeholder Management ">Stakeholder Management </option>
            <option value="Technical Market Radar">Technical Market Radar</option>
            <option value="Testing">Testing</option>
          </select>
        </label>
      </div>
      : null

    const trainingTitleLabel = this.state.proficiencyValue !== 'select'
      ? <div className="filter"><label>Training Title</label><input value={this.state.inputTitleValue} onChange={this.updateInputTitleValue} type="text" id="inputTitleValue"/></div>
      : null

    const descriptionLabel = this.state.inputTitleValue !== ''
      ? <div className="filter"><label>Description</label><input value={this.state.inputDescriptionValue} onChange={this.updateInputDescriptionValue} type="text" id="training-description"/></div>
      : null

    const outcomeLabel = this.state.inputDescriptionValue !== ''
      ? <div className="filter">
          <label>Learning outcome</label>
          <input value={this.state.inputOutcomeValue} onChange={this.updateInputOutcomeValue} type="text" id="training-learning-outcome"/>
      </div>
      : null

    const teachingMethod = this.state.inputOutcomeValue !== ''
      ? <div className="filter">
        <label>Select Teaching Method</label>
        <label>
          {/* Filter by teaching method: */}
          <select value={this.state.teachingMethodValue} onChange={this.handleTeachingMethodChange}>
            <option value="select">- select -</option>
            <option value="Self-Serve">Self Serve</option>
            <option value="Classroom">Classroom</option>
            <option value="Co-ordinated">Co-ordinated</option>
            <option value="PluralSight Course">Pluralsight Course</option>
            <option value="Online Community">Online Community</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Blog">Blog</option>
          </select>
        </label>
      </div>
      : null

    const format = this.state.teachingMethodValue !== 'select'
      ?  <div className="filter">
        <label>Select format of training</label>
        <label>
          {/* Filter by format: */}
          <select value={this.state.formatValue} onChange={this.handleFormatValue}>
            <option value="select">- select -</option>
            <option value="Book">Book</option>
            <option value="Video">Video</option>
            <option value="Classroom">Classroom</option>
            <option value="Article/Website">Article/Website</option>
          </select>
        </label>
      </div>
      : null

    const estimatedDuration = this.state.formatValue != 'select'
      ? <div className="filter">
        <label>Estimated Duration (MUST be in format hh:mm:ss)</label>
        <input value={this.state.estimatedDurationValue} onChange={this.updateEstiamtedDurationValue} type="text" id="training-learning-outcome"/>
      </div>
      : null

    const button = this.state.estimatedDurationValue !== ''
      ? <div className="filter">
        <button onClick={this.handleSubmitClick}>Submit Training</button>
      </div>
      : null

    const details = this.state.proficiencyValue !== 'select'
      ? <div className="filter">
        {trainingTitleLabel}
        {descriptionLabel}
        {outcomeLabel}
        {teachingMethod}
        {format}
        {estimatedDuration}
        {button}
      </div>
      : null

    return (
      <div className="container top-padding">
        <h3>Training resources</h3>
        <div className="filter">
          <label>Select Stage</label>
          <label>
            {/* Filter by stage: */}
            <select value={this.state.stageValue} onChange={this.handleStageChange}>
              <option value="select">- select -</option>
              <option value="Delivery Fundamentals">Delivery Fundamentals</option>
              <option value="Individual Choice">Individual Choice</option>
              <option value="Build Camp">Build Camp</option>
              <option value="Initial Training">Initial Training</option>
            </select>
          </label>
        </div>
        {discipline}
        {skills}
        {details}
        <div className="filter"><button onClick={this.handleClearClick}>Clear the form and start again</button></div>
      </div>
    )
  }
}
