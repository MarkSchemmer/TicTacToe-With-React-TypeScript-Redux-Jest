import React from 'react';

import ComponentSquare from "../../components/Square/Square";
import { Square } from "../../helpers/types/types";
import Enzyme, { shallow, mount, render } from 'enzyme';

import { Provider } from "react-redux";
import App from "../../App";
import store from "../../redux/store/genStore";

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


// class name of HistoryMove button history-button


describe("+++ when I click 3 squares there should be 4 buttons +++", () => {

    let wrapper;

    beforeAll(() => {
        wrapper = mount(
            <Provider store={store}>
                    <App /> 
            </Provider>
        );
    });

    it("+++ simulating 3 clicks and there should be 4 header buttons +++", () => {

        [0,1,2,3].forEach(numb => {
            wrapper.find(".square").at(numb).simulate("click");
            wrapper.update();
        });

        expect(wrapper.find('.history-button')).toHaveLength(5);
    })

    it("+++ simulating clicks and testing if  last button bolded? +++", () => {

        [0,1,2,3].forEach(numb => {
            wrapper.find(".square").at(numb).simulate("click");
            wrapper.update();
        });

        expect(wrapper.find(".bold-button")).toHaveLength(1);

    });

    it("+++ counting how sqares have a X and a O +++", () => {

        [0,1,2,3].forEach(numb => {
            wrapper.find(".square").at(numb).simulate("click");
            wrapper.update();
        });

        expect(wrapper.find(".square .value").map(node => node.text())
        .filter(txt => ["X", "O"].includes(txt))).toHaveLength(4);

    });
    
});