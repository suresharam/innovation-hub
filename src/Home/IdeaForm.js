import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import UploadButton from './UploadButton';
import Dropdown from './Dropdown';
import Button from '@material-ui/core/Button';

function IdeaForm({categories}) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [additionalInfo, setAdditionalInfo] = React.useState('');
    const [authors, setAuthors] = React.useState('');

    return (
    <Box
      className="IdeaForm__wrapper"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        marginTop: '35px'
      }}
      autoComplete="off"
    >
        <div>
            <h2>Submit An Idea here!!!</h2>
        </div>
        <div>
            <TextField
            id="standard-multiline-required"
            label="Title"
            margin="dense"
            multiline
            required={true}
            variant="standard"
            value={title}
            onInput={ e=>setTitle(e.target.value)}
            />
        </div>
        <div>
        <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            margin="dense"
            rows={4}
            variant="standard"
            value={description}
            onInput={ e=>setDescription(e.target.value)}
            />
        </div>
        <div>
            <Dropdown
                label="Category"
                identifier="idea-form-category-dropdown"
                isRequired={true}
                options={categories}
            />
        </div>
        <div>
        <Dropdown
            label="Event"
            identifier="idea-form-event-dropdown"
            isRequired={false}
            options={[
                {
                    value: 'hackathon-2022',
                    text: 'Hackathon 2022'
                },
                {
                    value: 'hackathon-2021',
                    text: 'Hackathon 2021'
                },
                {
                    value: 'wyw-ideas',
                    text: 'WYW Ideas'
                },
                {
                    value: 'others',
                    text: 'Others'
                }
            ]}
        />
        </div>
        <div>
            <TextField
            id="standard-multiline-required"
            label="Authors"
            margin="dense"
            multiline
            required={true}
            variant="standard"
            value={authors}
            onInput={ e=>setAuthors(e.target.value)}
            />
        </div>   
        <div className="IdeaForm__upload-btn-wrapper">
            <br/>
            <div className="IdeaForm__upload-text">
                Upload files, presentations, etc
            </div>
            <div className="IdeaForm__upload-btn">
                <UploadButton />
            </div>
            <div className="clear-float" />   
        </div>
        <div>
        <TextField
            id="standard-multiline-static"
            label="Additional Information"
            margin="dense"
            multiline
            rows={4}
            variant="standard"
            value={additionalInfo}
            onInput={ e=>setAdditionalInfo(e.target.value)}
        />
        </div>    
        
        <Button
            className="IdeaForm__submit-btn"
            variant="contained"
            size="large"
            type="submit"
            onClick={async (event) => {
                if (event.currentTarget.form.reportValidity()) {
                    const event = document.querySelector("#idea-form-event-dropdown input").value;
                    const category = document.querySelector("#idea-form-category-dropdown input").value;
                    const data = {
                        title,
                        description,
                        authors,
                        category,
                        event,
                        additionalInfo
                    };
                    const response = await fetch('http://localhost:8080/ideas', {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        credentials: 'same-origin', // include, *same-origin, omit
                        headers: {
                          'Content-Type': 'application/json'
                          // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify(data) // body data type must match "Content-Type" header
                      });
                      console.log(response.json());
                } else {
                    event.preventDefault();
                }              
            }}
        >
            Submit
        </Button>
        <div className="IdeaForm__upload-text">
            Note: Fields marked with * are mandatory for form submission
        </div>
    </Box>
  );
}

function mapStateToProps(state) {
    return {
        categories: state?.categories?.map((category) => {
            return {
                value: category?.categoryName,
                text: category?.categoryName
            };
        })
    };
}

export default connect(mapStateToProps)(IdeaForm);
