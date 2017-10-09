import Student from '../models/Student';

// const studentController = {
//     all (req, res) {
//         Student.find({})
//             .exec((err, students) => res.json(students))
//     },
//     create (req, res) {
//         const newStudent = new Student(req.body);

//         newStudent.save((err, saved) => {
//             Student
//                 .findOne({ _id: saved._id })
//                 .exec((err, student) => res.json(student))
//         });
//     }
// };


exports.all = async (req, res) => {
    const students = await Student
        .find({})
        .sort({ created: 'desc' });

    res.json(students);
    
};

exports.create = async (req, res) => {

    const newStudent = new Student(req.body);

    await newStudent.save()
    
    res.json(newStudent);

}