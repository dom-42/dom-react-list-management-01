import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.css";


class Button extends Component {

    render() {
        return (
            <Fragment>
                <button className="btn btn-primary" onClick={() => {this.props.handleClick(this.props.folder)}}>
                    {this.props.folder.title}
                </button>
            </Fragment>
        )
    }
}

// props definition, checked during development only
Button.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default Button