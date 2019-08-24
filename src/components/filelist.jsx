import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'


class FilesList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.files.map((file, index) => (
                    <div className="card" key={file.fileID}>
                        {file.picture}
                            <div className="card-body">

                                <h4 className="card-title"><a>{file.title}</a></h4>
                                <p className="card-text">{file.position}</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                    </div>
                ))}
            </Fragment>
        )
    }
}

// props definition, checked during development only
FilesList.propTypes = {
}

export default FilesList