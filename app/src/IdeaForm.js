import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import UploadButton from './UploadButton';
import Dropdown from './Dropdown';
import Button from '@material-ui/core/Button';

export default function IdeaForm() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      className="IdeaForm__wrapper"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
            multiline
            required={true}
            variant="standard"
            onChange={handleChange}
            />
        </div>
        <div>
        <TextField
            id="standard-multiline-static"
            label="Brief Description"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
            />
        </div>
        <div className="IdeaForm__upload-btn-wrapper">
            <div className="IdeaForm__upload-text">
                Upload files, presentations, etc
            </div>
            <div className="IdeaForm__upload-btn">
                <UploadButton />
            </div>
            <div className="clear-float" />   
        </div>
        <div>
        <Dropdown
                label="Event"
                isRequired={false}
                options={[
                    {
                        value: 'hackathon-2022',
                        text: 'Hackathon 2022'
                    },
                    {
                        value: 'hackathon-2021',
                        text: 'Hackathon 2021'
                    }
                ]}
            />
        </div>
        <div>
        <TextField
            id="standard-multiline-static"
            label="Additional Information"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
            />
        </div>
        <div>
            <Dropdown
                label="Category"
                isRequired={true}
                options={[
                    {
                        value: 'technology',
                        text: 'Technology'
                    },
                    {
                        value: 'digital',
                        text: 'Digital'
                    },
                    {
                        value: 'brands',
                        text: 'Brands'
                    },
                    {
                        value: 'tools',
                        text: 'Tools'
                    },
                    {
                        value: 'Advertisement',
                        text: 'Advertisement'
                    },
                    {
                        value: 'others',
                        text: 'Others'
                    }
                ]}
            />
        </div>
        <Button
            className="IdeaForm__submit-btn"
            variant="contained"
            size="large"
            type="submit"
            onClick={(event) => {
                if (event.currentTarget.form.reportValidity()) {
                    alert('Thank you for submitting your idea!!!');
                } else {
                    event.preventDefault();
                }              
            }}
        >
            Submit
        </Button>
    </Box>
  );
}
