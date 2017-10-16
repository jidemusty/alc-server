import Student from '../models/Student';

exports.list = (req, res, next) => {
    
    const { limit = 50, skip = 0 } = req.query;
    
    Student.find()
        .skip(skip)
        .limit(limit)
        .exec()
        .then((students) => res.json(students),
        (e) => next(e));
}

exports.create = (req, res, next) => {
    
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
    

exports.get = (req, res) => {
  Student.findById(req.params.id, (err, student) => {
    if (err)
      res.send(err);
    res.json(student);
  });
};

exports.update = (req, res) => {
    Student.findOneAndUpdate(
        {
            _id: req.params.id},
            req.body, 
            { new: true }, (err, student) => {
        if (err)
            res.send(err);
        res.json(student);
    });
};


// function update(req, res, next) {
//     const student = req.student;
//     Object.assign(student, req.body);
    
//     Student.save()
//       .then(() => res.sendStatus(204),
//         (e) => next(e));
// }
  
exports.delete = (req, res) => {
    Student.remove({
        _id: req.params.id
    }, (err, student) => {
        if (err)
            res.send(err);
        res.json({ message: 'Student successfully deleted' });
    });
};

  
function remove(req, res, next) {
    const student = req.student;
    student.remove()
      .then(() => res.sendStatus(204),
        (e) => next(e));
}