import React, {useEffect} from 'react';
import {Layout} from "./components/Layout";
import {useDispatch} from "react-redux";
import {getTriviaCategories} from "./store/modules/main/thunk/fetch-actions";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTriviaCategories())
    }, [dispatch])

    return (
        <div>
            <Layout/>
        </div>
    );
}

export default App;
