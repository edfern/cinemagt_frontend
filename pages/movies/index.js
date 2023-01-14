import { useEffect, useState } from 'react';
import { CONTEXT_PATH } from '../../config';
import { Button, Grid } from '@mui/material';
import { InputText } from '../../components/input';

const FormMovie = ({ inputs, onSubmit, onChange, edit }) => {
  return (
    <div className="card-form">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <InputText
              value={inputs.name}
              name="name"
              id="name"
              onChange={onChange}
              required={true}
              title="Name movie"
              description="Here you must put the name of the movie."
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              title="Description"
              value={inputs.description}
              name="description"
              id="description"
              onChange={onChange}
              required
              description="Movie description(synopsis)."
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              title="Image"
              value={inputs.image}
              name="image"
              id="image"
              onChange={onChange}
              required
              description="A link to an image from the internet."
            />
          </Grid>
        </Grid>
        <div className="action-form">
          <Button type="submit" variant="outlined" color="primary">
            {edit ? 'Save changes' : 'Create'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default function Movies({ movies }) {
  const [loading, setLoading] = useState(false);
  const [fetchMovies, setFetchMovies] = useState(movies);
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    image: '',
  });
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!openForm)
      setInputs({ ...inputs, name: '', description: '', image: '' });
  }, [openForm]);

  const onMovies = async () => {
    const data = await fetch(`${CONTEXT_PATH}/movies`)
      .then((res) => res.json())
      .then(({ response }) => {
        setFetchMovies(response);
      });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      confirm(
        `${
          edit
            ? 'Do you want to modify this movie?'
            : 'Do you want to add the movie?'
        } \n Name:${inputs.name}`
      )
    ) {
      if (edit) onSaveChange();
      else onCreate();
    }
  };

  const onSaveChange = async () => {
    await fetch(`${CONTEXT_PATH}/movies/update`, {
      method: 'PUT',
      body: JSON.stringify(inputs),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ code }) => {
        if (code === 200) {
          alert('Data modified successfully');
          setOpenForm(false);
          onMovies();
        }
      });
  };

  const onCreate = async () => {
    await fetch(`${CONTEXT_PATH}/movies/create`, {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ code }) => {
        console.log(code);
        if (code === 200) {
          alert('Data added successfully');
          setOpenForm(false);
          onMovies();
        }
      });
  };

  const onEdit = (item) => {
    setOpenForm(true);
    setInputs({
      ...inputs,
      name: item.name,
      description: item.description,
      image: item.image,
      idMovie: item.idMovie,
    });
  };

  const onDelete = async (id) => {
    if (confirm('Do you want to delete the record?')) {
      await fetch(`${CONTEXT_PATH}/movies/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(({ code }) => {
          if (code === 200) {
            alert('Data deleted successfully');
            onMovies();
          }
        });
    }
  };

  return (
    <div className="section">
      <div className="">
        <h3>Movies</h3>
        {movies
          ? fetchMovies.map((item, index) => {
              return (
                <details key={index} className="item">
                  <summary className="item__header">
                    <strong>{item.name}</strong>
                  </summary>
                  <div className="item__content">
                    <div className="item__description">
                      <div>
                        <h4>Information</h4>
                        <p>{item.description}</p>
                        <p>{item.image}</p>
                      </div>
                    </div>
                    <div className="actions-item">
                      <button
                        onClick={() => {
                          setEdit(true);
                          onEdit(item);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => onDelete(item.idMovie)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </details>
              );
            })
          : 'No movies'}
      </div>
      <div className="actions-page">
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => setOpenForm(!openForm)}
        >
          {openForm ? 'Cancel' : 'Create'}
        </Button>
        {openForm && (
          <div>
            <FormMovie
              inputs={inputs}
              onChange={handleChange}
              onSubmit={handleSubmit}
              edit={edit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(`${CONTEXT_PATH}/movies`);
  const { response } = await data.json();

  return {
    props: {
      movies: response,
    },
  };
}
