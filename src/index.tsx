//solid
import { render } from 'solid-js/web';
//components
import App from './App';
//styles
import './index.css';

render(
    () => <App />,
    document.getElementById( 'root' ) as HTMLElement
);