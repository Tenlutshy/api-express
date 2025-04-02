const { Router } = require('express');

const profilesController = require('./controllers/profiles.controller.js');
const skillsController = require('./controllers/skills.controller.js');
const experienceController = require('./controllers/experiences.controller.js');
const informationController = require('./controllers/informations.controller.js');

const router = Router();

router.get('/', profilesController.get);
router.get('/:id', profilesController.getOne);
router.post('/', profilesController.post);
router.put('/:id', profilesController.put);
router.delete('/:id', profilesController.delete);

router.post('/:id/experience', experienceController.post);
router.delete('/:id/experience/:exp', experienceController.delete);

router.post('/:id/skills', skillsController.post);
router.delete('/:id/skills/:skill', skillsController.delete);

router.put('/:id/information', informationController.put);

module.exports = router;