import App from './App';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />,div);
  ReactDOM.unmountComponentAtNode(div);
});

