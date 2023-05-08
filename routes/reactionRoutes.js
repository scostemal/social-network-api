const router = require('express').Router();
const { deleteReaction } = require('../../controllers/thoughtControllers');

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
