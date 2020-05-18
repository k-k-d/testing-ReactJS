import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import LoginForm from '../LoginForm';

describe('Initial LoginForm', () => {
    
    const wrapper = shallow(<LoginForm />);
    // console.log(wrapper.debug());
    
    it('email field rendered', () => {
        expect(wrapper.find('#emailField')).toHaveLength(1);
    });

    it('password field not rendered', () => {
        expect(wrapper.find('#passwordField').get(0)).not.toBeDefined();
    });

    it('confirm password field not rendered', () => {
        expect(wrapper.find('#cPasswordField').get(0)).not.toBeDefined();
    });

    it('submit button rendered', () => {
        expect(wrapper.find('#submit')).toHaveLength(1);
    });

    it('submit button disabled', () => {
        expect(wrapper.find('#submit').get(0).props.disabled).toBe(true);
    });
});


describe('LoginForm with invalid email', () => {
    
    const wrapper = shallow(<LoginForm />);
    wrapper.find('#email').simulate('change', {target: {value: 'invalid_email'}});
    // console.log(wrapper.debug());
    
    it('email field rendered with right value', () => {
        expect(wrapper.find('#emailField')).toHaveLength(1);
        expect(wrapper.find('#email').get(0).props.value).toBe('invalid_email');
    });

    it('password field not rendered', () => {
        expect(wrapper.find('#passwordField').get(0)).not.toBeDefined();
    });

    it('confirm password field not rendered', () => {
        expect(wrapper.find('#cPasswordField').get(0)).not.toBeDefined();
    });

    it('submit button rendered', () => {
        expect(wrapper.find('#submit')).toHaveLength(1);
    });

    it('submit button disabled', () => {
        expect(wrapper.find('#submit').get(0).props.disabled).toBe(true);
    });
});

describe('LoginForm with valid email', () => {
    
    const wrapper = shallow(<LoginForm />);
    wrapper.find('#email').simulate('change', {target: {value: 'valid@email.com'}});
    // console.log(wrapper.debug());
    
    it('email field rendered with right value', () => {
        expect(wrapper.find('#emailField')).toHaveLength(1);
        expect(wrapper.find('#email').get(0).props.value).toBe('valid@email.com');
    });

    it('password field rendered', () => {
        expect(wrapper.find('#passwordField').get(0)).toBeDefined();
    });

    it('password and confirm password fields not rendered', () => {
        expect(wrapper.find('#cPasswordField').get(0)).not.toBeDefined();
    });

    it('submit button rendered', () => {
        expect(wrapper.find('#submit')).toHaveLength(1);
    });

    it('submit button disabled', () => {
        expect(wrapper.find('#submit').get(0).props.disabled).toBe(true);
    });
});