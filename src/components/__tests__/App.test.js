import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../../store';

describe('App Container', () => {
    it('renders without crashing', () => {
        const app = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
        let tree = app.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
