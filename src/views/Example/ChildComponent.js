import React from 'react';

class ChildComponent extends React.Component {

    render() {
        return (
            <>
                <div>This is ChildComponent {this.props.name} {this.props.age}</div>
            </>
        )
    }
}
export default ChildComponent;