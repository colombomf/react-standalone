
/* How to add a title | {} is a placeholder for props */
const h2 = React.createElement('h2', {},'"Is it me you\'re looking for?"');
/* How to add an image */
const img = React.createElement('img', {src: './lr.jpg', alt:'Lionel Richie  drawing with Hello written'});
/* Creates a container for Title + Image + CSS */
const element = React.createElement('div', {className: "center-div"}, img, h2);
/* Renders the div to the DOM */
ReactDOM.render(element, document.getElementById('root'));

