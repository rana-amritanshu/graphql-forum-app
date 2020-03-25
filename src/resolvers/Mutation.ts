import * as userMutations from '../functions/mutations/User'
import * as topicMutations from '../functions/mutations/Topic'
import * as threadMutations from '../functions/mutations/Thread'
import * as replyMutations from '../functions/mutations/Reply'

export default {
    ...userMutations,
    ...topicMutations,
    ...threadMutations,
    ...replyMutations
}