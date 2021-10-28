// When a component is wrapped in React.memo(),
//  React renders the component and memoizes the result.
//  Before the next render, if the new props are the same,
// React reuses the memoized result skipping the next rendering.

// export function Movie({ title, releaseDate }) {
// 	return (
// 		<div>
// 			<div>Movie title: {title}</div>
// 			<div>Release date: {releaseDate}</div>
// 		</div>
// 	);
// }
// export const MemoizedMovie = React.memo(Movie);

// React.memo(Movie) returns a new memoized component MemoizedMovie.

// First render - MemoizedMovie IS INVOKED.
{
	/* <MemoizedMovie 
  title="Heat" 
  releaseDate="December 15, 1995" 
/>
// Second render - MemoizedMovie IS NOT INVOKED.
<MemoizedMovie
  title="Heat" 
  releaseDate="December 15, 1995" 
/> */
}

// You gain a performance boost: by reusing the memoized content,
// React skips rendering the component
//  and doesn’t perform a virtual DOM difference check.

// By default React.memo()
// does a shallow comparison of props and objects of props.
