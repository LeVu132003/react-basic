import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    render() {
        return (
            <>
                <div>This is My Component</div>

                <ChildComponent
                    name = {'abc'}
                    age = {'23'}
                />
            </>
        )
    }
}

export default MyComponent;