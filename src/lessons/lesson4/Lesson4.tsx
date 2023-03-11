import React from 'react'
import './lesson_4';
import {createPromiseHandler, rejectPromiseHandler, resolvePromiseHandler} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button onClick={createPromiseHandler}>Create Promise</button>
            <button onClick={resolvePromiseHandler}>Resolve Promise</button>
            <button onClick={rejectPromiseHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;