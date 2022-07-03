const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');


// route /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// route  /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

// put route to edit our existing comment route
router.route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(addComment);

// delete route
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


module.exports = router;