import gql from "graphql-tag";

export default gql`
  query songQuery($id: ID!) {
    song(id: $id) {
      title
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
