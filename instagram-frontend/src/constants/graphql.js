// *** Beginning of mutation for sign in
export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;
// *** End of mutation for sign in

// *** Beginning of query for posts
export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts {
      id
      image
      pastedBy {
        id
        username
        image
      }
      comments {
        text
        postedBy {
          username
        }
      }
      likes {
        id
        post {
          id
        }
        user {
          id
        }
      }
      createdAt
      updatedAt
    }
  }
`;
// *** End of query for posts

// *** Beginning of mutation for post
export const CREATE_LIKE_MUTATION = gql`
  mutation CreateLikeAndConnectUserPost($postId: ID!, $userId: ID!) {
    createLike(postId: $postId, userId: $userId) {
      id
      post {
        id
      }
      user {
        id
      }
    }
  }
`;

export const DELETE_LIKE_MUTATION = gql`
  mutation DeleteLikeFromPost($likeId: ID!) {
    deleteLike(id: $likeId) {
      id
    }
  }
`;
// *** End of mutations for post

// *** Beginning of mutation for create comment
export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentAndConnectUserPost($text: String!, $postId: ID!, $userId: ID!) {
    createComment(text: $text, $postId, postedById: $userId) {
      id
      text
      postedBy {
        username
        image
      }
      createdAt
    }
  }
`;

// *** End of mutation for create comment
