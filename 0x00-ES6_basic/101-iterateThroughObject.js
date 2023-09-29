export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  let iteratorResult = reportWithIterator.next();
  while (!iteratorResult.done) {
    employeeNames.push(iteratorResult.value);
    iteratorResult = reportWithIterator.next();
  }

  return employeeNames.join(' | ');
}
