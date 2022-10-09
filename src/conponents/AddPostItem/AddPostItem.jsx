import React, {useRef, useState} from 'react';
import Button from "../Button/button";
import MyInput from "../Input/input";

const AddPostItem = ({create}) => {

    const [newPost, setNewPost] = useState({title: '', body: ''})
    const [selectedFiles, setSelectedFiles] = useState()

    const AddNewPost = (e) => {
        e.preventDefault()
        const myNewPost = {
            ...newPost,
            imageLink: selectedFiles,
            id: Date.now()
        };
        create(myNewPost);
        setNewPost({title: '', body: ''});
        console.log('final: '+selectedFiles)
    }


    function GetImage(e) {

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])

        reader.onload = (event) => {
            setSelectedFiles(event.target.result)
        }

    }


    return (
        <form style={{margin: '20px 0'}}>
            <MyInput onChange={event => setNewPost({...newPost, title: event.target.value})} id="post-title-input"
                     value={newPost.title} placeholder="Set post title"/>
            <MyInput onChange={event => setNewPost({...newPost, body: event.target.value})}
                     value={newPost.body}
                     placeholder="Set post body"/>
            <input type={'file'} accept={'image/png,image/jpeg'}
                   onChange={(e) => {
                       GetImage(e)
                   }}/>
            <Button onClick={AddNewPost}>Добавить пост</Button>
        </form>
    );
};

export default AddPostItem;