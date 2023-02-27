# Redux Interview Questions

### **1. What is Redux?**

    Redux is a predictable state container for Javascript apps

    Redux is for Javascript apps
        Redux is not tied to React
        Can we used with React, Angular, Vue or even Vanilla Javasript
        
    Redux is state container
        Redux stores the state of your application
        Redux will store and manage the appliation

    It is Predictable
        Redux is a state container and the state of the application can change 
        Ex: todo list app - item (Pending) -> item (Completed)
        In redux, all state transitions are explicit and it is possible to keep track on them
        The change to your application's state becomes predicatable.


**React + Redux?**

<img src="https://github.com/prabhakaryalla/react-redux-demo/blob/main/docs/images/react-redux.png" alt="React + Redux" />

![/docs/images/react-redux.png]([https://github.com/prabhakaryalla/react-redux-demo/blob/main/docs/images/react-redux.png])


**Do we really have a problem?**

React Context - Prevents prop drilling

useContext + useReducer ?

Redux 1.0 - August 2015


![React-Redux Image 2 Preview](/docs/images/react-redux-2.png)

<br />

### **2. How do you decide whether to choose Context API or Redux?**

    When the application is small, it better to go with COntext API otherwise its better to go with Redux

<br/>

### **3. What is the redux store?**

    One store for the entire application
    Responsibilities-
      1. Holds application state
      2. Allows access to the state via getState()
      3. Allows state to be updated via dispatch(action)
      4. Registers listerners via subscribe(listener)
      5. Handles unregistering of listerners via the functon returned by subscribe(listener)

<br/>

### **4. What are actions?**

    The only way our application can interact with the store
    Carry some information from your app to the redux store
    Plain Javascript objects
    Have a 'type' property which indicates the type of action to be performed
    The 'type' property is typically defined as string constants

### **5. What are action creators?**

    Action creators are the functions that encapsulate the process of creation of an action object. These functions simply return a plain Js object which is an action. It promotes writing clean code and helps to achieve reusability.

<br/>

### **6. What are reducers?**

    Specify how the app's state changes in resonse to the action sent to the store
    Function tht accepts the state and action as argument and returns the next state of application
    (prevState, action) => newState

<br/>

### **7. How the control flows between these different parts?**

<br/>

![React+Redux Image](/docs/images/redux-flow.png)

<br />

![React+Redux Image](/docs/images/redux-flow-2.png)

<br />

### **8. What exactly the connect function will do from the react-redux library?**

    The connect () function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

    EX: export default connect(mapStateToProps, mapDispatchToProps)(Component)

<br />

### **9. What do mapStateToProps and mapDispatchToProps actually do?**
    
**mapStateToProps**
    
    It connects redux state to props of react component.
    It is just a simple function (no imported library) that simply returns a specified part of the current state.

    const mapStateToProps = (state) => {
        return { things: state.things }
    };

    export default connect(mapStateToProps)(MyComponent);

<br />

**mapDispatchToProps**

    It connects redux actions to react props.
    This function directs the dispatching or sending of an action by pointing it to an action creator

    const mapDispatchToProps = () => {
        return {
            addThing: addThing,
            doAnotherThing: doAnotherThing
        }
    }

    handleOnClick() {
        this.props.addThing();
    };

    However, returning the action creator is only one part. We also want the send that returned action to the store. How do we do that?

    We use Redux’s bindActionCreators(). To implement it, we:

    import { bindActionCreators } from 'redux';
    ...
    const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            addThing: addThing,
            doAnotherThing: doAnotherThing
            }, dispatch);
    };

    The bindActionCreators() function accepts the action creator and the store’s dispatch function as arguments, and returns a dispatch function that uses the return value of the action creator as its arguments.

    export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);

<br />


### **10. Why do you dispatch an action to update the state and not update the store directly?**

    Dispatching actions in Redux is the fundamental method of updating a Redux store's state. 
    Actions are used to store relevant information for the state, and they reach the store through the dispatch() method available on the store object

<br />

### **11. In a reducer why should you return a new object as state and not modify the existing state object?**

    The reason for this is that to ensure the rendered DOM is correct and up-to-date, updates to the state must flow through the dispatcher.

<br />
