import React from 'react';
import TrainingItem from './TrainingItem';
// import StageSelector from './StageSelector';
// import DisciplineSelector from './DisciplineSelector';

// Show blank with a couple of toggles/filters... stage and discipline
// Maybe show a few 'promoted' courses here to start

// should probs just show overview on this list page, with link to detail page for individual course
// look at how to link to separate page from blog-app
// this detail page to link out to actual resource

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
}]

export default class TrainingItemList extends React.Component {
  state = {
    filteredTrainingResources: trainingResources
    // filteredTrainingResources: []
  };

  componentDidUpdate() {
    if (this.props.stageValue || this.props.disciplineValue === 'select') {
      // return;
      console.log('getting to here!');
    } else if (this.props.stageValue && this.props.disciplineValue === 'all') {
      this.setState(() => ({ filteredTrainingResources: trainingResources }));
    } else {
      alert('Need a filter!');
      // const newFilter = trainingResources.filter(trainingResource => ((trainingResource.stage === this.props.stageValue) && (trainingResource.discipline === this.props.discipline)));
      // this.setState(() => ({ filteredTrainingResources: newFilter }));
    }
    
    // TrainingList Item is not re-rendering when an update is made... how do I make it do that?!

  };

  render() {
    return (
      <div className="container">
        <h3>Training component</h3>
        {console.log('Discipline props state: ' + this.props.disciplineValue, '| Stage props state: ' + this.props.stageValue)}
        {console.log(trainingResources)}
        {/* <StageSelector /> */}
        {/* <DisciplineSelector /> */}
        {
          this.state.filteredTrainingResources.map((trainingResource, index) => (
            <a href={trainingResource.url} key={index} target="_blank">
              <TrainingItem
                // key={index}
                discipline={trainingResource.discipline}
                count={index + 1}
                stage={trainingResource.stage}
                topic={trainingResource.topic}
                description={trainingResource.description}  
              />
            </a>
          ))
        }
      </div>
    )
  }
}

// const TrainingItemList = () => (
//   <div className="container">
//     <h3>Training component</h3>
//     <StageSelector />
//     <DisciplineSelector />
//     {
//       trainingResources.map((trainingResource, index) => (
//         <a href={trainingResource.url} key={index} target="_blank">
//           <TrainingItem
//             // key={index}
//             discipline={trainingResource.discipline}
//             count={index + 1}
//             stage={trainingResource.stage}
//             topic={trainingResource.topic}
//             description={trainingResource.description}
//           />
//         </a>
//       ))
//     }
//   </div>
// );

// export default TrainingItemList;