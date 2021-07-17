import {applyMiddleware, combineReducers, compose, createStore, Middleware, Reducer, Store, StoreEnhancer} from "redux";
import {produce} from 'immer'


export class ReSoreBuilder {
    // @ts-ignore
    private store: Store
    private middlewares: Middleware[] = []
    // @ts-ignore
    private enhancer: StoreEnhancer
    // @ts-ignore
    private withEnhancer: boolean
    // @ts-ignore
    private rootReducer: Reducer
    private reducers: { [key: string]: Reducer } = {}

    public getStore(): Store {
        return this.store;
    }


    public createStore(withEnhancer = false) {
        this.withEnhancer = withEnhancer

        // apply middlewares and create store enhancer
        this.enhancer = this.createStoreEnhancer();

        //create root reducer
        this.rootReducer = this.createRootReducer()

        // create redux store
        this.store = createStore(this.rootReducer, this.enhancer)
    }

    public addReducer(name: string, reducer: Reducer) {
        if (!this.reducers[name])
            this.reducers[name] = reducer
        else
            console.warn(`${name} reducer is already added!`)
    }

    public addMiddlewares(...middlewares: Middleware[]) {
        this.middlewares = [...this.middlewares, ...middlewares]
    }

    private createRootReducer(): Reducer {
        return combineReducers({
            ...this.getReducers(),
        });
    }

    private createStoreEnhancer(): StoreEnhancer {
        const composeEnhancer = this.getComposeEnhancer();
        return composeEnhancer(applyMiddleware(...this.middlewares))
    }

    private getReducers() {
        for (const key in this.reducers) {
            this.reducers[key] = this.resolveReducer(this.reducers[key])
        }
        return this.reducers
    }

    // @ts-ignore
    private resolveReducer(reducer) {
        // @ts-ignore
        return (state, action) => produce(state, draftState => reducer(draftState, action))
    }

    private getComposeEnhancer() {
        // @ts-ignore
        return (this.withEnhancer && process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            || compose;
    }
}
