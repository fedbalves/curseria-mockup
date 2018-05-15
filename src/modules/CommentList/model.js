import map from 'lodash/map';
import isNil from 'lodash/isNil';
import compact from 'lodash/compact';

export const GroupNestedComments = data => {
  var comments_list = []

  map(data.comments, item => {
    if (item.in_reply === 0) {
      if(isNil(comments_list[item.id])) {
        comments_list[item.id] = {}
      }
      comments_list[item.id] = item
    }
  })

  map(data.comments, item => {
    if (item.in_reply > 0) {
      if(isNil(comments_list[item.in_reply].nested)) {
        comments_list[item.in_reply].nested = []
      }
      comments_list[item.in_reply].nested.push(item)
    }
  })

  comments_list = compact(comments_list)

  return comments_list
}
