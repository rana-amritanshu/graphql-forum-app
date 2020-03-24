import * as userQueries from '../functions/queries/User'
import * as topicQueries from '../functions/queries/Topic'

export default {
    ...userQueries,
    ...topicQueries,
}
