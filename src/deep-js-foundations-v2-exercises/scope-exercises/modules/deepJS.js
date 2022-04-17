let currentEnrollment = [];
const studentRecords = [];

export default {
    addStudent,
    enrollStudent,
    printCurrentEnrollment,
    enrollPaidStudents,
    remindUnpaidStudents
}

function addStudent(id, name, paid) {
    studentRecords.push({ id, name, paid });
}

function enrollStudent(id) {
    currentEnrollment.push(id);
}

function printCurrentEnrollment() {
    var records = currentEnrollment.map(getStudentFromId);

    printRecordsAsc(records);
}

function enrollPaidStudents() {
    var recordsToEnroll = studentRecords.filter(needToEnroll);

    var idsToEnroll = recordsToEnroll.map(getStudentId);

    currentEnrollment = [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaidStudents() {
    var unpaidIds = currentEnrollment.filter(notYetPaid);

    var unpaidRecords = unpaidIds.map(getStudentFromId);

    printRecordsAsc(unpaidRecords);
}

function getStudentFromId(studentId) {
    return studentRecords.find(matchId);

    // *************************

    function matchId(record) {
        return (record.id == studentId);
    }
}

function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
}

function printRecordsAsc(records) {
    records.sort(sortByNameAsc);

    records.forEach(printRecord);
}

function printRecord(record) {
    console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}

function needToEnroll(record) {
    return (record.paid && !currentEnrollment.includes(record.id));
}

function getStudentId(record) {
    return record.id;
}

function notYetPaid(studentId) {
    var record = getStudentFromId(studentId);
    return !record.paid;
}