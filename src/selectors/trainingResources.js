// Get visible training resources

export default (trainingResources, { text, level, discipline }) => {
  return trainingResources.filter((trainingResource) => {
    const textMatch = JSON.stringify(trainingResource).toLowerCase().includes(text.toLowerCase());
    const levelMatch = JSON.stringify(trainingResource.level).toLowerCase().includes(level.toLowerCase());
    const disciplineMatch = JSON.stringify(trainingResource.discipline).toLowerCase().includes(discipline.toLowerCase());
    
    return textMatch && levelMatch && disciplineMatch;
  });
};