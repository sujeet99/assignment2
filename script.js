// Header Component
function Header() {
  return React.createElement(
    'header',  
    { style: { backgroundColor: 'rgb(220, 230, 148)', padding: '50px', textAlign: 'center', color: 'blue', fontWeight: 'bold', border: '1px solid black' } },
    React.createElement('img', { src: 'https://www.geekster.in/Logo.svg', alt: 'Geekster Logo', style: { width: '130px' } }),  
    React.createElement('h1', null, 'Geekster - Reviews'), 
    React.createElement('nav', null, 
      React.createElement('a', { href: '#', style: { margin: '0 10px', color: 'rgb(217, 10, 244)', fontSize: '20px'} }, 'Cources'),
      React.createElement('a', { href: '#', style: { margin: '0 10px', color: 'rgb(217, 10, 244)',  fontSize: '20px' } }, 'Fees'),
      React.createElement('a', { href: '#', style: { margin: '0 10px', color: 'rgb(217, 10, 244)', fontSize: '20px' } }, 'Timing')
    )
  );
}

// Content Component
function Content() {
  return React.createElement(
    'div',
    { style: { padding: '20px', textAlign: 'center' } }, // Main content div with padding and centered text
    // First div - Cources
    React.createElement('div', { style: { marginBottom: '20px', border: '1px solid black', padding: '10px' } },
      React.createElement('h2', null, 'Cources'),
      React.createElement('p', null, 'Geekster do data science and full stack web development courses.'),
      React.createElement('a', { href: '#', style: { color: 'blue', textDecoration: 'underline' } }, 'Learn More')
    ),
    // Second div - Fees
    React.createElement('div', { style: { marginBottom: '20px', border: '1px solid black', padding: '10px' } },
      React.createElement('h2', null, 'Fees'),
      React.createElement('p', null, 'fees is 75k only.'),
      React.createElement('a', { href: '#', style: { color: 'blue', textDecoration: 'underline' } }, 'View Details')
    ),
    // Third div - Timing
    React.createElement('div', { style: { marginBottom: '20px', border: '1px solid black', padding: '10px' } },
      React.createElement('h2', null, 'Timing'),
      React.createElement('p', null, 'Main class starts at 8:00 pm and ends at 10:00 PM.'),
      React.createElement('a', { href: '#', style: { color: 'blue', textDecoration: 'underline' } }, 'Check Timings')
    )
  );
}

// App Component
function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Header),  // Rendering the Header
    React.createElement(Content)  // Rendering the Content
  );
}

// Render the App component
ReactDOM.render(React.createElement(App), document.getElementById('root'));
