//solid
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
//components
import App from './App';
//styles
import './index.css';

render(
    () =>
        <Router>
            <App />
        </Router>,
    document.getElementById( 'root' ) as HTMLElement
);