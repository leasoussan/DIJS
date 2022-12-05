import { createStore } from "redux";

import {reducer}from '../reducers/reducers.js'

const store2 = createStore(reducer)
export default store2

// here we have a place to create a store - then I ll import it to app.js 