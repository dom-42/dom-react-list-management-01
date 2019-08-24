import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import jsonfile from '../data/folders.json'
import FileImg from "./fileimg"
import Button from "./button"
import FilesList from "./filelist"

const foldersList = [
    {
        title: 'Import',
        type: 'Folder',
        id: 0,
        files: [
            {
                title: 'Crane_1.gcode',
                type: 'File',
                category: '.gcode',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Vert',
                copy: 1,
                time: '11:00',
                size: '',
                fileID: 0,
            },
            {
                title: 'Crane_2.gcode',
                type: 'File',
                category: '.gcode',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Orange',
                copy: 1,
                time: '9:30',
                size: '',
                fileID: 1,
            },
            {
                title: 'Wolf.stl',
                type: 'File',
                category: '.stl',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Pêche',
                copy: 3,
                time: '6:00',
                size: '',
                fileID: 2,
            },
        ],
    },
    {
        title: 'Dossier1',
        type: 'Folder',
        id: 1,
        files: [
            {
                title: '42.stl',
                type: 'File',
                category: '.stl',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Bleu',
                copy: 1,
                time: '3:00',
                size: '',
                fileID: 3,
            },
            {
                title: 'Patate.stl',
                type: 'File',
                category: '.stl',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Pêche',
                copy: 2,
                time: '23:00',
                size: '',
                fileID: 4,
            },
            {
                title: 'Citron.stl',
                type: 'File',
                category: '.stl',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Bleu',
                copy: 4,
                time: '12:40',
                size: '',
                fileID: 5,
            },
            {
                title: 'Peanut.stl',
                type: 'File',
                category: '.stl',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Vert',
                copy: 2,
                time: '6:20',
                size: '',
                fileID: 6,
            },
        ],
    },
    {
        title: 'Dossier2',
        type: 'Folder',
        id: 2,
        files: [
            {
                title: 'Pomme.gcode',
                type: 'File',
                category: '.gcode',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Pêche',
                copy: 1,
                time: '4:38',
                size: '',
                fileID: 7,
            },
            {
                title: 'Fluff.gcode',
                type: 'File',
                category: '.gcode',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Orange',
                copy: 2,
                time: '6:10',
                size: '',
                fileID: 8,
            },
        ],
    },
    {
        title: 'Dom',
        type: 'Folder',
        id: 3,
        files: [
            {
                title: 'Crane_1.gcode',
                type: 'File',
                category: '.gcode',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Vert',
                copy: 1,
                time: '11:00',
                size: '',
                fileID: 0,
            },
            {
                title: 'Crane_2.gcode',
                type: 'File',
                category: '.gcode',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Orange',
                copy: 1,
                time: '9:30',
                size: '',
                fileID: 1,
            },
            {
                title: 'Wolf.stl',
                type: 'File',
                category: '.stl',
                position: 'En attente',
                picture: <FileImg />,
                filament: 'Chromatik',
                color: 'Pêche',
                copy: 3,
                time: '6:00',
                size: '',
                fileID: 2,
            },
        ],
    },
]




class Container extends Component {

    state = {
        files: []
    }

    handleClick = (folder) => {
        this.setState({files: []});
        const currentFiles = [];
        folder.files.forEach((file) => {
            console.log(file.title)
            currentFiles.push(file);
        })
        this.setState({files: currentFiles})

    }


    render() {
        return (
            <Fragment>
                {jsonfile.foldersList.map((folder, index) => (
                    <Button
                        key={index}
                        handleClick={this.handleClick}
                        folder={folder}
                        index={index}
                    >
                        {folder.title}
                    </Button>
                ))}
                <FilesList
                    files={this.state.files}
                />
            </Fragment>
        )
    }
}

// props definition, checked during development only
Container.propTypes = {}

export default Container