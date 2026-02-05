Babel used to transpile from JSX to JS
JS always in { 'this is treated as JavaScript code' }
JSX must return a single element
ex: const JSX = <h1>Hello JSX!</h1>;
<br> = <br />

<hr> = <hr />

<!-- {/* */} << this only --> for comments

1. ReactDOM.render(componentToRender, targetNode) to render React elements to DOM
   camelCase for everything.
   (ex. ReactDOM.render(JSX, document.getElementById('root')) placed inside JSX)
2. ReactDOM.render(<ComponentToRender />, targetNode)
   class = className
3. Setting default props:
   MyComponent.defaultProps = { items: 0 } OR MyComponent.defaultProps = { location: 'San Francisco' }
4. Setting property types:
   Items.propTypes = {quantity: PropTypes.number.isRequired} <- Defining propTypes for the Items component to require quantity as a prop and verify that it is of type number.
5. Declaring data within state:
   this.state = {name: 'Test'}
   Calling data from state:
   <p>{this.state.name}</p> //Test
6. To initialize state in Constructor:
   In render() data can be accessed with this.state; or through JS syntax(like variable or function. Ex: const name = this.state.name;)
   In return data can be accessed with {this.state} or with {name} (if we use JS syntax above)
7. To change state in Component(outside of Component's braces):
   this.setState({ name: 'Test' });
8. 'this'(gives access to properties on class):
   this.props or this.state
