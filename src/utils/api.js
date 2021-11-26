import axios from 'axios'

const marketApi = axios.create({
  baseURL: `https://jj-nc-games.herokuapp.com/api`
})

export const getAllReviews = () => {
   return marketApi.get(`/reviews`).then(res => res.data.reviews)}

export const getSingleReview = (review_id) => {
   return marketApi.get(`/reviews/${review_id}`).then(res => res.data.review)}
 
export const getAllCategories = () => {
   return marketApi.get(`/categories`).then(res => res.data.categories)}

export const getCategoryByName = (name) => {
   return marketApi.get(`/categories/${name}`).then(res => res.data.categories)}

export const getReviewComment = (review_id) => {
      return marketApi.get(`reviews/${review_id}/comments`).then(res => res.data.comments)};

export const patchLikes = (review_id, votes) => {
      return marketApi.patch(`reviews/${review_id}`, votes).then(res => (res.data.review))}

export const postComment = (review_id, comment) => {
      return marketApi.post(`/reviews/${review_id}/comments`, comment).then(res => (res.data.comment))}

export const deleteComment = (comment_id) => {
   console.log("Event", comment_id)
   return marketApi.delete(`comments/${comment_id}`)}
  













    

// export const getAllItems = () => {
//   return marketApi.get(`/items`).then(res => res.data.items)}

// export const postItem = (itemToSell) => {
//   return marketApi.post(`/items`, itemToSell).then(res => res.data.item)}

// export const deleteItem = (itemId) => {
//   return marketApi.delete(`/items`, itemId).then(res => res.data.item)}

// export const getAllCategories = () => {
//   return marketApi.get(`/categories`).then(res => res.data.categories)}

// export const getCategoryByName = (name) => {
//     return marketApi.get(`/categories/${name}`).then(res => res.data.category)}

// export const getUsers = () => {
//   return marketApi.get(`/users`).then(res => res.data.users)}

// export const getUserByName = (name) => {
//   return marketApi.get(`/users/${name}`).then(res => res.data.user)}


