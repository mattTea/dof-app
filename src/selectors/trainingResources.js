// Get visible training resources

export default (trainingResources, { text, stage, discipline }) => {
  return trainingResources.filter((trainingResource) => {
    const textMatch = JSON.stringify(trainingResource).toLowerCase().includes(text.toLowerCase());
    const stageMatch = JSON.stringify(trainingResource.stage).toLowerCase().includes(stage.toLowerCase());
    const disciplineMatch = JSON.stringify(trainingResource.discipline).toLowerCase().includes(discipline.toLowerCase());
    
    return textMatch && stageMatch && disciplineMatch;
  });
};