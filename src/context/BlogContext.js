import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => async (title, content, callback) => {
  try {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  } catch (error) {
    console.log(error);
  }
};

const deleteBlogPost = dispatch => id => dispatch({ type: "delete_blogpost", payload: id });

export const { Context, Provider } = createDataContext(reducer, { addBlogPost, deleteBlogPost }, [
  {
    id: Math.floor(Math.random() * 99999),
    title: "TEST POST",
    content: "TEST CONTENT"
  }
]);
