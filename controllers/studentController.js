import Student from '../models/Student';

function load(req, res, next, id) {
    Student.findById(id)
        .exec()
        .then((student) => {
            req.student = student;
            return next();
        }, (e) => next(e));
}

function get(req, res) {
    return res.json(req.student);
}

function create(req, res, next) {

    const { name, email, age, sex, department } = req.body;

    Student.create({
        name,
        email,
        age,
        sex,
        department,
    })
    .then((savedStudent) => {
        return res.json(savedStudent);
    }, (e) => next(e));
}

function update(req, res, next) {
    const student = req.student;
    Object.assign(student, req.body);
  
    Student.save()
      .then(() => res.sendStatus(204),
        (e) => next(e));
}
  
function list(req, res, next) {

    const { limit = 50, skip = 0 } = req.query;

    Student.find()
      .skip(skip)
      .limit(limit)
      .exec()
      .then((students) => res.json(students),
        (e) => next(e));
}
  
function remove(req, res, next) {
    const student = req.student;
    student.remove()
      .then(() => res.sendStatus(204),
        (e) => next(e));
}

export default { load, get, create, update, list, remove };