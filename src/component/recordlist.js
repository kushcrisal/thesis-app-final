import React, { Component } from 'react'

 class recordlist extends Component {
    render() {
        return (
            <div>
                <h1>
                {this.props.obj.name}
                </h1>
            </div>
        )
    }
}

export default recordlist
