import React from 'react';
import config from '../../config';
import { load } from '../helpers/spreadsheet';
import TrainingItem from './TrainingItem';

export default class TrainingItemList extends React.Component {
  state = {
    trainingCatalogueItems: [],
    ratingsAveragesByTrainingItem: [],
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

  componentDidMount () {
    // 1. Load the Google Sheets api JS client library
    if (config.useAPIForGet) {
      this.fetchData()
    } else {
      window.gapi.load("client", this.initClient);
    }
  };

  componentDidUpdate (prevProps) {
    if (this.props.stageValue === 'select' || this.props.disciplineValue === 'select') {
      // do nothing
    } else if (prevProps !== this.props) {
      let newFilter = [];
      for (let i = 0; i < this.state.trainingCatalogueItems.length; i++) {
        if ((this.state.trainingCatalogueItems[ i ].stage === this.props.stageValue || this.props.stageValue === 'All') && (this.state.trainingCatalogueItems[ i ].discipline === this.props.disciplineValue || this.props.disciplineValue === 'All')) {
          newFilter.push(this.state.trainingCatalogueItems[ i ]);
        }
      }
      this.setState(() => ({ filteredTrainingResources: newFilter }));
    } else {
      console.log('Component updated');
    }
  };

  fetchData = async () => {
    await fetch('http://localhost:3030/api/training', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json().then(data => ({ data: data, status: response.status }));
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ trainingCatalogueItems: res.data });
        }
        if (res.status === 500) {
          this.setState({ trainingCatalogueItems: [] });
        }
      })
      .catch(err => {
        console.log('err', err);
        return this.setState({ trainingCatalogueItems: [] });
      })

    await fetch('http://localhost:3030/api/ratings/average', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json().then(data => ({ data: data, status: response.status }));
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ ratingsAveragesByTrainingItem: res.data });
        }
        if (res.status === 500) {
          this.setState({ ratingsAveragesByTrainingItem: [] });
        }
      })
      .catch(err => {
        console.log('err', err);
        return this.setState({ ratingsAveragesByTrainingItem: [] })
      })
  }

  render () {

    if (config.useAPIForGet) {
      let trainingObejects = []
      for (let ratingsIndex in this.state.ratingsAveragesByTrainingItem) {
        for (let trainingIndex in this.state.filteredTrainingResources) {
          if (this.state.ratingsAveragesByTrainingItem[ ratingsIndex ].trainingItemId === this.state.trainingCatalogueItems[ trainingIndex ].id) {
            let trainingItemToUpdate = this.state.trainingCatalogueItems[ trainingIndex ]
            trainingItemToUpdate.rating = this.state.ratingsAveragesByTrainingItem[ ratingsIndex ].averageRating
            trainingObejects.push(trainingItemToUpdate)
          }
        }
      }
    }


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
                rating={filteredTrainingResource.rating || 0}
                url={filteredTrainingResource.url}
              />
            </div>
          ))
        }
      </div>
    )
  }
}
