const printRecords = (recordIds) => {
	const students = studentRecords.filter(studentRecord => recordIds.includes(studentRecord.id));

	students.sort((studentA, studentB) => {
		if (studentA.name < studentB.name) {
			return -1
		}

		if (studentA.name > studentB.name) {
			return 1
		}

		return 0;
	})

	students.forEach(({ name, id, paid }) => console.log(`${name} (${id}): ${paid ? 'Paid' : 'Not Paid'}`));
}

const paidStudentsToEnroll = () => {
	const studentIds = studentRecords
		.filter(studentRecord => studentRecord.paid && !currentEnrollment.includes(studentRecord.id))
		.map(student => student.id);

	return [...currentEnrollment, ...studentIds];
}

const remindUnpaid = (recordIds) => {
	const studentIds = studentRecords
		.filter(studentRecord => recordIds.includes(studentRecord.id) && !studentRecord.paid)
		.map(studentRecord => studentRecord.id);

	printRecords(studentIds);
}


// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
