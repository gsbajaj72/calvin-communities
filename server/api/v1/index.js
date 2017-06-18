const router = require('express').Router();

router.use('/communities', require('./modules/community'));

router.use('/memberrequests', require('./modules/memberrequests'));

router.use('/communitytools', require('./modules/communitytools'));

router.use('/counter', require('./modules/communitiescounter'));

router.use('/membership', require('./modules/communityMembership'));

router.use('/communityrole', require('./modules/communityrole'));

router.use('/communitytemplates', require('./modules/communitytemplates'));

router.use('/tools', require('./modules/tools'));

module.exports = router;
