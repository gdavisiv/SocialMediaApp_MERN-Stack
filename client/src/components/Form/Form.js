import React, { useState } from 'react';
import { TextField, Button, Typography, Paper  } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';

const Form = () => {
  const [postData, setPostData ] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const classes = useStyles();
  
  const handleSumbit = () => {

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSumbit}>
        <Typography variant="h6">Creating a Memory</Typography>
        {/*   
          //If we add a second text field we would over-ride our original,
          //to fix this we can simply use '...postData' to make the data persist
          //and only change the data in the specific text field
        */}
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            oneDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
          />
        </div>
        <Button></Button>
      </form>
    </Paper>
  );
};

export default Form;