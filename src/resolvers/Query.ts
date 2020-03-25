import * as userQueries from '../functions/queries/User'
import * as topicQueries from '../functions/queries/Topic'
import * as threadQueries from '../functions/queries/Thread'
import * as replyQueries from '../functions/queries/Reply'

export default {
    ...userQueries,
    ...topicQueries,
    ...threadQueries,
    ...replyQueries
}
