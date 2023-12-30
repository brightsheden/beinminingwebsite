import { Button, FileInput, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../state/Actions';
import { resetProjectState } from '../state/Slice';

function CreateProjectModal({ openModal, setOpenModal }) {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const onCloseModal = () => {
    setOpenModal(false);
    setName('');
    setClient('');
    setImage('');
    setVideo('');  // Reset video state
    setLocation('');
    setYear('');
    setValue('');
    setDescription('');
  };


  const [formData, setFormData] = useState({
    image: '',
    imagePreview: '',
    video: '',    // New state for video
    videoPreview: '',  // New state for video preview
  });

  const handleChange = (e) => {
    if (e.target.name === 'image' || e.target.name === 'video') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [e.target.name]: file,
        [e.target.name + 'Preview']: URL.createObjectURL(file),
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }
  const dispatch = useDispatch();
  const projectsstate = useSelector((state) => state.projects);
  const { isRequest, successCreate, errorMessage } = projectsstate;

  const addProjectHandler = (e) => {
    e.preventDefault();
    const projectData = {
      name,
      image: formData.image,
      video: formData.video,  // Include video in projectData
      client,
      location,
      year,
      value,
      description,
    };
    dispatch(createProject(projectData));
  };
  useEffect(() => {
    if (successCreate) {
      onCloseModal();
      dispatch(resetProjectState())
    }
  }, [dispatch,successCreate,onCloseModal]);

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={addProjectHandler} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Project</h3>
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
                <Label htmlFor="image" value="Image" />
              </div>
              <FileInput id="image" name="image" onChange={handleChange} required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="video" value="Video" />
              </div>
              <FileInput id="video" name="video" onChange={handleChange} accept="video/*" required />
              {formData.videoPreview && (
                <video width="100%" height="200" controls>
                  <source src={formData.videoPreview} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
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
              <input
                id="date"
                type='date'
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
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateProjectModal;