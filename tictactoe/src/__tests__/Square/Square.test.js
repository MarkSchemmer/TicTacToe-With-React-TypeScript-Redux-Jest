import React from 'react';

import ComponentSquare from "../../components/Square/Square";
import { Square } from "../../helpers/types/types";
import Enzyme, { shallow, mount, render } from 'enzyme';

import { Provider } from "react-redux";
import App from "../../App";
import store from "../../redux/store/genStore";

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe( "dummy test for Square !", () => {
    it(" true === true = true ", () => {
        expect(true).toBe(true);
    });
});


let dummySquare = new Square(0,0,0);


describe("when square is clicked does it call function", () => {
    let handleSquareClickMock, wrapper;

    beforeEach(() => {
        handleSquareClickMock = jest.fn();
        wrapper = shallow( 
            <ComponentSquare
             handleSquareClick={handleSquareClickMock}
            square={dummySquare} /> 
        );
    });

    it(" shallowing square and simulating click", () => {
        wrapper.simulate('click');
        expect(handleSquareClickMock).toHaveBeenCalled();

    });

    it(" ComponentSquare should have only 1 square ", () => {
        expect(wrapper.find('.square')).toHaveLength(1);
    });
});

describe(" mock the <App with a fake store with provider ", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                    <App /> 
            </Provider>
        );
    });

    it("+++  finding how many squares there are should be 9 +++", () => {
        expect(wrapper.find(".square")).toHaveLength(9);
    });

    it("+++ simulating a click and see if square populates with X +++", () => {
        wrapper.find(".square").at(0).simulate("click");
        wrapper.update();
        expect(wrapper.find(".square .value").at(0).text()).toBe("X");
        wrapper.find(".square").at(1).simulate("click");
        wrapper.update();
        expect(wrapper.find(".square .value").at(1).text()).toBe("O");
    });
});