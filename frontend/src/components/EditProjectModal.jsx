// ... other imports

import { Button, FileInput, Label, Modal, Spinner, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProject } from '../state/Actions';
import { resetProjectState } from '../state/Slice';
import axios from 'axios';
import ReactPlayer from 'react-player'


function EditProjectModal({ openEditModal, setOpenEditModal, selectedProject }) {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState()
  const [uploadingImage, setUploadingIMage] = useState()

  const onCloseModal = () => {
    setOpenEditModal(false);
    // Clear form fields on modal close
    setName('');
    setClient('');
    setImage('');
    setVideo('')
    setLocation('');
    setYear('');
    setValue('');
    setDescription('');
  };

  const [formData, setFormData] = useState({
    image: '',
    imagePreview: '',
    video: '',
    videoPreview: '',
  });



  useEffect(() => {
    // Set form data when selectedProject changes


    if (selectedProject) {
      setName(selectedProject.name || '');
      setClient(selectedProject.client || '');
      setImage(selectedProject.image || '');
      setVideo(selectedProject.video || '');
      setLocation(selectedProject.location || '');
      setYear(selectedProject.year || '');
      setValue(selectedProject.value || '');
      setDescription(selectedProject.description || '');

      setFormData({
        image: selectedProject.image || '',
      

        video: selectedProject.video || '',
      
      });
    }
  }, [selectedProject]);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [e.target.name]: file,
        imagePreview: URL.createObjectURL(file),
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  //setImageUrl(URL.createObjectURL(file));

      const uploadFileHandler = async  (e)=>{
        const file = e.target.files[0]
        const formData = new FormData()
        setFormData({
          ...formData,
          [e.target.name]: file,
          imagePreview: URL.createObjectURL(file),
        });
        formData.append('image',file)
        formData.append('project_id', selectedProject?.id)
        console.log("file is uploading")
        setUploadingIMage(true)

        try {
            const config = {
                "content-type" : "multipart/form/data"
            }
            const {data} =await axios.put("/api/projects/upload/", formData,config)
            setUploadingIMage(false)
       
        } catch (error) {
            setUploadingIMage(false)
            
        }

    }

    const uploadVideoHandler = async  (e)=>{
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('video',file)
      setFormData({
        ...formData,
        [e.target.name]: file,
        videoPreview: URL.createObjectURL(file),
      });
      formData.append('project_id', selectedProject?.id)
      console.log("file is uploading")
      setUploading(true)

      try {
          const config = {
              "content-type" : "multipart/form/data"
          }
          const {data} =await axios.put("/api/projects/upload/video/", formData,config)
          setUploading(false)
      
      } catch (error) {
          setUploading(false)
          
      }

  }



  const dispatch = useDispatch();
  const projectsState = useSelector((state) => state.projects);
  const { isRequest, successEdit, errorMessage } = projectsState;

  const editProjectHandler = (e) => {
    e.preventDefault();
    const projectData = {
      id: selectedProject?.id,
      name,
      //image: formData.image,
      client,
      location,
      year,
      value,
      description,
    };
  
    dispatch(editProject(projectData));
  };

 { useEffect(() => {
   
    if (successEdit) {
        dispatch(resetProjectState())
        onCloseModal();
    }
  }, [dispatch,successEdit,onCloseModal]);}

  return (
    <>
      <Modal show={openEditModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={editProjectHandler} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Project</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                id="name"
                placeholder="Name of the project"
                value={name}

                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
              
             
              {formData.imagePreview ? (<img src={formData.imagePreview} alt="Image Preview" />):
              (<img src={selectedProject?.image} alt="Image" />)} 

             

               
                <Label htmlFor="image" value="Image" />
              </div>
              <FileInput id="image" name="image" onChange={uploadFileHandler} />
            </div>

            <div>
              <div className="mb-2 block">
                {uploading && (<Spinner/>)}

              {formData.videoPreview? ( <ReactPlayer controls url={formData.videoPreview} />) : (<ReactPlayer controls url={selectedProject?.video} />)}
              
             
               
             
             
                <Label htmlFor="video" value="video" />
              </div>
              <FileInput id="video" name="video" onChange={uploadVideoHandler} />
            </div>
           
            <div>
              <div className="mb-2 block">
                <Label htmlFor="client" value="Client" />
              </div>
              <TextInput
                id="client"
                placeholder="Client"
                value={client}
                onChange={(event) => setClient(event.target.value)}
                required
              />
            </div>

            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="location" value="Location" />
              </div>
              <TextInput
                id="location"
                placeholder="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Yaer" value="Year" />
              </div>
              <TextInput
                id="date"
                placeholder="yaer"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                required
              />
            </div>

            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="value" value="value" />
              </div>
              <TextInput
                id="number"
                placeholder="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="value" value="Description" />
              </div>
              <Textarea
                id="description"
                rows={5}
                placeholder="value"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProjectModal;
