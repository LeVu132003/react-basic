import React from 'react';

class ChildComponent extends React.Component {


    render() {
        var {name, age} = this.props;
        return (
            <>
                <div>This is ChildComponent {name} - {age}</div>
            </>
        )
    }
}
export default ChildComponent;