import * as userMutations from '../functions/mutations/User'
import * as topicMutations from '../functions/mutations/Topic'

export default {
    ...userMutations,
    ...topicMutations
}