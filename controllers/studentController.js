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

    const _id = req.params.id;

    Student.findOne({ _id }, (err, student) => {

        if (err) {
            res.status(400).json(err);
        }
        
        if (!student) {
            res.status(404).json({ message: 'Student Not Found' });
        }
    
        res.json(student);
    });
};

exports.update = (req, res) => {

    const _id = req.params.id;

    Student.findOneAndUpdate({ _id },
        req.body, 
        { new: true },
        (err, student) => {
            if (err) {
                res.status(400).json(err);
            }
                
            res.json(student);
    });
};

  
exports.delete = (req, res) => {

    const _id = req.params.id;

    Student.findOneAndRemove({ _id }, (err, student) => {
        
        if (err) {
            res.status(400).json(err);
        }
            
        if (!student) {
            res.status(404).json({ message: 'Student Not Found' });
        }

        res.json({ message: `Student ${student._id} successfully deleted` });
    });
};