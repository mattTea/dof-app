import React from 'react';
import TrainingItem from './TrainingItem';

const trainingResources = [{
  discipline: 'Analysis',
  stage: 'Delivery Fundamentals',
  skill: 'Requirements Engineering',
  topic: 'BDD: Story Mapping',
  description: 'Why a map is better than a flat backlog to explain and prioritise your product.',
  rating: '4.2',
  url: 'https://jpattonassociates.com/the-new-backlog/'
}, {
  discipline: 'Analysis',
  stage: 'Delivery Fundamentals',
  skill: 'Requirements Engineering',
  topic: 'BDD: Example Mapping',
  description: 'What example mapping is, and why you might use it to define the scope of your story and its scenarios.',
  rating: '4.8',
  url: 'https://cucumber.io/blog/2015/12/08/example-mapping-introduction'
}, {
  discipline: 'Development',
  stage: 'Individual Choice',
  skill: 'Full Stack Development',
  topic: 'Web Skills',
  description: 'Gain basic knowledge of JavaScript.',
  rating: '3.7',
  url: 'https://www.w3schools.com/js/default.asp'
}, {
  discipline: 'Test',
  stage: 'Individual Choice',
  skill: 'Testing',
  topic: 'Modern Testing',
  description: 'Rapid Software Testing is a skill-based and context-driven testing methodology that invites you to apply ingenuity, tools, and lightweight heuristics to test complex products.',
  rating: '4.0',
  url: 'http://www.developsense.com/courses.html'
}]

export default class TrainingItemList extends React.Component {
  state = {
    filteredTrainingResources: []
  };

  componentDidUpdate(prevProps) {
    if (this.props.stageValue === 'select' || this.props.disciplineValue === 'select') {
      // do nothing
    } else if (prevProps !== this.props) {
      let newFilter = [];
      for (var i = 0; i < trainingResources.length; i++) {
        if ((trainingResources[i].stage === this.props.stageValue || this.props.stageValue === 'All') && (trainingResources[i].discipline === this.props.disciplineValue || this.props.disciplineValue === 'All')) {
          newFilter.push(trainingResources[i]);
        }
      }
      this.setState(() => ({ filteredTrainingResources: newFilter }));
    } else {
      console.log('Component updated.')
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