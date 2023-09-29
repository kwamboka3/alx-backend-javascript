export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  let iteratorResult = reportWithIterator.next();
  while (!iteratorResult.done) {
    const department = iteratorResult.value;
    for (const employees of Object.values(department)) {
      for (const employee of employees) {
        employeeNames.push(employee);
      }
    }
    iteratorResult = reportWithIterator.next();
  }

  return employeeNames.join(' | ');
}
