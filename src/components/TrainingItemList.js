import React from 'react';
import config from '../../config';
import { load } from '../helpers/spreadsheet';
import TrainingItem from './TrainingItem';

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

  componentDidUpdate(prevProps) {  
    if (prevProps !== this.props) {
      let newFilter = [];
      for (var i = 0; i < this.state.trainingCatalogueItems.length; i++) {
        let itemString = JSON.stringify(this.state.trainingCatalogueItems[i]).toLowerCase();
        let itemMatch = this.props.searchTerm.toLowerCase();
        if ((itemString.includes(itemMatch)) && (this.state.trainingCatalogueItems[i].stage === this.props.stageValue || this.props.stageValue === 'All' || this.props.stageValue === 'select') && (this.state.trainingCatalogueItems[i].discipline === this.props.disciplineValue || this.props.disciplineValue === 'All' || this.props.disciplineValue === 'select')) {
          newFilter.push(this.state.trainingCatalogueItems[i]);
        }
      }
      this.setState(() => ({ filteredTrainingResources: newFilter }));
    }
  };

  render() {
    return (
      <div>
        {
          this.state.filteredTrainingResources.map((filteredTrainingResource, index) => (
            <div key={index}>
              <TrainingItem
                // key={index}
                discipline={filteredTrainingResource.discipline}
                count={index + 1}
                stage={filteredTrainingResource.stage}
                topic={filteredTrainingResource.topic}
                description={filteredTrainingResource.description}
                learningObjective={filteredTrainingResource.learningObjective}
                deliveryMethod={filteredTrainingResource.deliveryMethod}
                duration={filteredTrainingResource.duration}
                rating={filteredTrainingResource.rating}
                url={filteredTrainingResource.url}
              /> 
            </div>
          ))
        }
      </div>
    )
  }
}