import { graphql } from 'gatsby'
import PostsPage from '../containers/Posts'

export default PostsPage

export const pageQuery = graphql`
  query PostsPageQuery(
    $paginatePostsPage: Boolean!
    $skip: Int
    $includeExcerpt: Boolean!
    $includeTimeToRead: Boolean!
    $imageQuality: Int!
  ) {
    featuredPosts: allArticle(
      filter: {
        private: { ne: true }
        draft: { ne: true }
        featured: { eq: true }
      }
      sort: { fields: [date], order: DESC }
      limit: 10
    ) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailFeatured
      }
    }

    recentPosts: allArticle(
      filter: { private: { ne: true }, draft: { ne: true } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailRegular
      }
    }

    posts: allArticle(
      filter: { private: { ne: true }, draft: { ne: true } }
      sort: { fields: [date], order: DESC }
    ) @skip(if: $paginatePostsPage) {
      group(field: category___name, limit: 10) {
        categoryName: fieldValue
        nodes {
          ...ArticlePreview
          ...ArticleThumbnailRegular
        }
      }
    }

    paginatedPosts: allArticle(
      filter: { private: { ne: true }, draft: { ne: true } }
      sort: { fields: [date], order: DESC }
      skip: $skip
    ) @include(if: $paginatePostsPage) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailRegular
      }
      ...ArticlePagination
    }
  }
`
