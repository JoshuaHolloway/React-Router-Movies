* React Router
* Using Link and NavLink to navigate to specific routes
* Passing Route Parameters
* Passing props to components rendered by the Router

#### Set up Routes

  * [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.

#### Add Functionality

* [ ] When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/{id of clicked movie here}` to see the details of the selected movie.
* [ ] You will need to modify line 7 of `Movie.js` to get the id of the selected movie from the URL.
* [ ] Add functionality so the `Home` button on the `SavedList` component navigates back to home.
* [ ] You should now be able to navigate back and forth between the list of movies and the detailed view of a single movie.
