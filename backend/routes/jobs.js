const router = require('express').Router();
let Job = require('../models/job.model');

router.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const company = req.body.company;
  const position = req.body.position;
  const description = req.body.description;
  const status = req.body.status;
  const date = Date.parse(req.body.date);

  const newJobs = new Jobs({
    company,
    position,
    description,
    status,
    date,
  });

  newJobs.save()
  .then(() => res.json('Jobs added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



  router.route('/:id').get((req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Job.findByIdAndDelete(req.params.id)
    .then(() => res.json('Job deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Job.findById(req.params.id)
    .then(job => {
      job.company = req.body.company;
      job.position = req.body.position;
      job.description = req.body.description;
      job.status = req.body.status;
      job.date = Date.parse(req.body.date);

      job.save()
        .then(() => res.json('Job updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
