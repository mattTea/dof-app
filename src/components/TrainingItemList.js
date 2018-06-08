import React from 'react';
import config from '../../config';
import { load } from '../helpers/spreadsheet';
import TrainingItem from './TrainingItem';

// const trainingResources = [{
//   discipline: 'Analysis',
//   stage: 'Delivery Fundamentals',
//   skill: 'Requirements Engineering',
//   topic: 'BDD: Story Mapping',
//   description: 'Why a map is better than a flat backlog to explain and prioritise your product.',
//   rating: '4.2',
//   url: 'https://jpattonassociates.com/the-new-backlog/'
// }, {
//   discipline: 'Analysis',
//   stage: 'Delivery Fundamentals',
//   skill: 'Requirements Engineering',
//   topic: 'BDD: Example Mapping',
//   description: 'What example mapping is, and why you might use it to define the scope of your story and its scenarios.',
//   rating: '4.8',
//   url: 'https://cucumber.io/blog/2015/12/08/example-mapping-introduction'
// }, {
//   discipline: 'Development',
//   stage: 'Individual Choice',
//   skill: 'Full Stack Development',
//   topic: 'Web Skills',
//   description: 'Gain basic knowledge of JavaScript.',
//   rating: '3.7',
//   url: 'https://www.w3schools.com/js/default.asp'
// }, {
//   discipline: 'Test',
//   stage: 'Individual Choice',
//   skill: 'Testing',
//   topic: 'Modern Testing',
//   description: 'Rapid Software Testing is a skill-based and context-driven testing methodology that invites you to apply ingenuity, tools, and lightweight heuristics to test complex products.',
//   rating: '4.0',
//   url: 'http://www.developsense.com/courses.html'
// }]

export default class TrainingItemList extends React.Component {
  state = {
    trainingCatalogueItems: [],
    error: null,
    filteredTrainingResources: []
  };

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      const trainingCatalogueItems = data.trainingCatalogueItems;
      this.setState({ trainingCatalogueItems });
    } else {
      this.setState({ error });
    }
  };

  componentDidMount() {
    // 1. Load the Google Sheets api JS client library
    window.gapi.load("client", this.initClient);
  };

  // to use spreadsheet, access this.state.trainingCatalogueItems[] rather than the const trainingResources[]
  componentDidUpdate(prevProps) {
    if (this.props.stageValue === 'select' || this.props.disciplineValue === 'select') {
      // do nothing
    } else if (prevProps !== this.props) {
      let newFilter = [];
      for (var i = 0; i < this.state.trainingCatalogueItems.length; i++) {
        if ((this.state.trainingCatalogueItems[i].stage === this.props.stageValue || this.props.stageValue === 'All') && (this.state.trainingCatalogueItems[i].discipline === this.props.disciplineValue || this.props.disciplineValue === 'All')) {
          newFilter.push(this.state.trainingCatalogueItems[i]);
        }
      }
      this.setState(() => ({ filteredTrainingResources: newFilter }));
    } else {
      console.log('Component updated')
      if (this.state.filteredTrainingResources.length > 0) {
        console.log('URL: ' + this.state.filteredTrainingResources[0].url);
      }
    }
  };

  render() {
    return (
      <div>
        {
          this.state.filteredTrainingResources.map((filteredTrainingResource, index) => (
            <a href={filteredTrainingResource.url} key={index} target="_blank">
              <TrainingItem
                // key={index}
                discipline={filteredTrainingResource.discipline}
                count={index + 1}
                stage={filteredTrainingResource.stage}
                topic={filteredTrainingResource.topic}
                description={filteredTrainingResource.description}  
              />
            </a>
          ))
        }
      </div>
    )
  }
}