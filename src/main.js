import "./style.css";

/**
 * This function will be used as an helper function by the renderPosts function to render all posts in data.js
 * @param {*} post - is single post (an object that represents a single, not an entire array in this case).
 * A post is a object that typically looks like:
 *  {
      poster: {
        name: "Vincent van Gogh",
        location: "Zudert, Netherlands",
        avatar: "/",
        username: "vincey1853",
      },
      img: "/postImage.png",
      text: "just took a few mushrooms lol",
      likes: 21492,
    }
    
    Again, just an object, not the entire array


    returns: this function should return an html string representing a single post using the post object that
    will be passed into it
 */
function postHTML(post) {
  const { poster, img, text, likes } = post;
  return `
  <article class="postCard">
  <div class="posterInfo">
  <img class="avatar" src="${poster.avatar}" alt="${poster.name}">
  <span class="posterName">${poster.name}</span>
  <span class="posterLocation">${poster.location}</span>
  </div>
  <img class="postImage" src="${img}" alt=" post by ${poster.name}">

  <div class="postBody">
  <p class="likesCount">${likes}</p>
  <p class="postCaption">
  <span class="username">@${poster.username}</span>
  </p>
  </div>


  </article>
  `;
}

/**
 * 1. Grab the element you want to append your posts into
 * 2. import the posts data from data.json, it is an array of post objects
 * 3. Loop through the posts array
 *    for each post call postHTML and append the returned html string to the grabed element in step 1
 * 4. Call render posts to confirm it displays the posts on the DOM
 * 5. Go on ans style as in the design
 */
function renderPosts() {
  const containerEl = document.getElementById("posts-container");
  posts.array.forEach((postHTML) => {
    containerEl.innerHTML = postHTML(post);
  });
}
