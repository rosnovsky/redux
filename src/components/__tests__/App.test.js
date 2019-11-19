import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../../store';

describe('App', () => {
    it('App component renders without crashing', () => {
        const app = renderer.create(<App />);
        const rerender = component => renderer.create(component);
        rerender(<App />);
        let tree = app.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
