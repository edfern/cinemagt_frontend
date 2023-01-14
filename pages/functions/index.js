import { Fragment, useCallback, useEffect, useState } from 'react';
import { CONTEXT_PATH } from '../../config';
import Link from 'next/link';
import moment from 'moment';
import { InputText, WrapInput } from '../../components/input';
import { styled } from '@mui/material/styles';

import { CiEdit, CiRead } from 'react-icons/ci';
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import { Tooltip } from '../../components/tooltip';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    //backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const inputStyle = {
  margin: '10px 0px 0px 0px',
  borderRadius: '5px',
  width: '100%',
};

const FormFunctions = ({
  inputs,
  rooms,
  movies,
  onSubmit,
  onChange,
  edit,
  item,
}) => {
  console.log(inputs);
  return (
    <div className="card-form">
      <form onSubmit={onSubmit}>
        <Grid container gap={1}>
          <Grid item xs={3}>
            <WrapInput title="Type" description="Select record type.">
              <Select
                style={inputStyle}
                size="small"
                value={inputs.state}
                onChange={onChange}
                name="state"
                id="state"
              >
                {!edit && <MenuItem value="A">Function</MenuItem>}
                {!edit && <MenuItem value="P">Pre-sale</MenuItem>}
                {!edit && <MenuItem value="C">Coming soon</MenuItem>}
                {edit && (
                  <MenuItem value={inputs.state}>
                    {inputs.state === 'A'
                      ? 'Function'
                      : inputs.state === 'P'
                      ? 'Pre-sale'
                      : inputs.state === 'C'
                      ? 'Coming soon'
                      : ''}
                  </MenuItem>
                )}
                {edit ? <MenuItem value="N">Finish</MenuItem> : ''}
              </Select>
            </WrapInput>
          </Grid>
          <Grid item xs={8}>
            <WrapInput title="Movie">
              <Select
                size="small"
                style={inputStyle}
                value={inputs.movie}
                name="movie"
                id="movie"
                onChange={onChange}
                required
                displayEmpty
                disabled={edit}
              >
                {movies && movies.length > 0 && !edit ? (
                  <MenuItem value="">Choose</MenuItem>
                ) : edit ? (
                  <MenuItem value="">Choose</MenuItem>
                ) : (
                  <MenuItem value="">No movies available</MenuItem>
                )}
                {!edit ? (
                  movies.map((item, index) => {
                    return (
                      <MenuItem value={item.idMovie} key={index}>
                        {item.name}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem value={item.movie.idMovie}>
                    {item.movie.name}
                  </MenuItem>
                )}
              </Select>
            </WrapInput>
          </Grid>
          <Grid item xs={3}>
            <WrapInput
              title="Time"
              description="Choose the time for the function."
            >
              <Select
                size="small"
                style={inputStyle}
                value={inputs.time}
                name="time"
                id="time"
                onChange={onChange}
                required
                disabled={inputs.state === 'C' || inputs.state === 'N'}
              >
                <MenuItem value={`1900-01-01 13:00:00`}>13:00</MenuItem>
                <MenuItem value={`1900-01-01 15:00:00`}>15:00</MenuItem>
                <MenuItem value={`1900-01-01 18:00:00`}>18:00</MenuItem>
              </Select>
            </WrapInput>
          </Grid>
          <Grid item xs={3}>
            <WrapInput title="Start date">
              <input
                style={inputStyle}
                name="startDate"
                id="startDate"
                value={
                  inputs.state === 'A'
                    ? moment().format('YYYY-MM-DD')
                    : moment(inputs.startDate).format('YYYY-MM-DD')
                }
                type="date"
                min={new Date().toJSON().slice(0, 10)}
                onChange={onChange}
                required
                disabled={inputs.state != 'P'}
              />
            </WrapInput>
          </Grid>
          <Grid item xs={3}>
            <WrapInput title="End date">
              <input
                style={inputStyle}
                name="endDate"
                id="endDate"
                value={
                  inputs.state === 'C'
                    ? ''
                    : moment(inputs.endDate).format('YYYY-MM-DD')
                }
                type="date"
                min={new Date().toJSON().slice(0, 10)}
                onChange={onChange}
                required
                disabled={inputs.state === 'C' || inputs.state === 'N'}
              />
            </WrapInput>
          </Grid>
          <Grid item xs={4}>
            <WrapInput title="Room">
              <Select
                style={inputStyle}
                size="small"
                value={inputs.state === 'C' ? '' : inputs.room}
                name="room"
                id="room"
                onChange={onChange}
                required
                displayEmpty
                disabled={
                  inputs.state === 'C' ||
                  (edit && inputs.state === 'C') ||
                  inputs.state === 'N'
                }
              >
                {rooms && rooms.length > 0 && !edit ? (
                  <MenuItem value="">Choose</MenuItem>
                ) : edit ? (
                  <MenuItem value="">Choose</MenuItem>
                ) : (
                  <MenuItem value="">No rooms available</MenuItem>
                )}
                {edit && item.state != 'C' && (
                  <MenuItem value={item.room.idRoom}>{item.room.name}</MenuItem>
                )}
                {rooms &&
                  rooms
                    .filter((i) => i.idRoom != 5)
                    .map((item, index) => {
                      return (
                        <MenuItem value={item.idRoom} key={index}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
              </Select>
            </WrapInput>
          </Grid>
          <Grid item xs={4}>
            <InputText
              description="Here you must enter the price of the ticket for the function."
              title="Ticket price"
              value={inputs.state === 'C' ? 0 : inputs.ticketPrice}
              type="number"
              id="ticketPrice"
              name="ticketPrice"
              onChange={onChange}
              required
              disabled={inputs.state === 'C' || inputs.state === 'N'}
            />
          </Grid>
        </Grid>

        <div className="action-form">
          <Button type="submit" variant="contained" color="primary">
            {edit ? 'Save changes' : 'Create'}
          </Button>
        </div>
      </form>
    </div>
  );
};

const values = {
  time: `1900-01-01 13:00:00`,
  startDate: '',
  endDate: '',
  state: 'A',
  movie: '',
  room: '',
  ticketPrice: 0,
};

export default function Functions({
  initialFunctions,
  initialRooms,
  initialAllRooms,
  initialMovies,
  initialAllMovies,
}) {
  const [inputs, setInputs] = useState(values);
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [items, setItems] = useState(initialFunctions);
  const [loading, setLoading] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [item, setItem] = useState({});
  const [rooms, setRooms] = useState(initialRooms);
  const [movies, setMovies] = useState(initialMovies);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!openForm) {
      setInputs(values);
      setEdit(false);
    }
  }, [openForm]);

  const onReload = useCallback(() => {
    console.log('On reload');
    onRooms();
    onMovies();
    setReload(false);
  }, []);

  useEffect(() => {
    if (reload) onReload();
  }, [reload, onReload]);

  const onRooms = async () => {
    const data = await fetch(`${CONTEXT_PATH}/rooms/findRoomNotFunction`);
    const { response } = await data.json();
    setRooms(response);
  };

  const onMovies = async () => {
    const data = await fetch(`${CONTEXT_PATH}/movies/available`);
    const { response } = await data.json();
    setMovies(response);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { room, movie } = inputs;

    let item = {
      ...inputs,
      room: {
        idRoom: parseInt(room),
      },
      movie: {
        idMovie: parseInt(movie),
      },
    };

    if (inputs.state === 'A')
      item = {
        ...item,
        startDate: moment().format('YYYY-MM-DD'),
      };

    if (inputs.state === 'C')
      item = {
        ...item,
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().add(3, 'd').format('YYYY-MM-DD'),
        room: {
          idRoom: 5,
        },
        ticketPrice: 0,
      };

    if (
      confirm(
        `Do you want to add this ${
          inputs.state === 'A'
            ? 'function'
            : inputs.state === 'C'
            ? 'coming soon'
            : 'pre-sale'
        }? \n Movie: ${inputs.movie}\n ${
          inputs.state != 'C'
            ? `Room: ${inputs.room} \n Time: ${moment(inputs.time).format(
                'hh:mm a'
              )}\n Start date: ${item.startDate} End date: ${inputs.endDate}`
            : ''
        }`
      )
    )
      onCreate(item);
    else alert('Okay!');
  };

  const onFunctions = async () => {
    setLoading(true);
    const res = await fetch(`${CONTEXT_PATH}/functions`)
      .then((res) => res.json())
      .then(({ response }) => {
        setItems(response);
        setLoading(false);
      });
  };

  const onCreate = async (item) => {
    setLoadingCreate(true);
    console.log(item);
    await fetch(`${CONTEXT_PATH}/functions/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then(({ response }) => {
        const { idFunction } = response;
        if (idFunction) {
          alert('Success!');
          setOpenForm(false);
          onFunctions();
          setInputs({});
          setReload(true);
        }
        setLoadingCreate(false);
      });
  };

  const onEdit = (item) => {
    setOpenForm(true);
    setEdit(true);
    setItem(item);
    setInputs({
      ...item,
      time: `${item.time}`,
      startDate: `${item.startDate}`,
      endDate: `${item.endDate}`,
      state: `${item.state}`,
      movie: `${item.movie.idMovie}`,
      room: `${item.room.idRoom}`,
    });
  };

  return (
    <div className="section">
      <div className="">
        <h3>Functions</h3>
        {initialFunctions ? (
          <TableContainer component={Paper} className="shadow">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Movie</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, i) => {
                  return (
                    <StyledTableRow
                      key={item.idFunction}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {item.movie.name}
                      </StyledTableCell>
                      <StyledTableCell>
                        {item.ticketPrice === 0
                          ? '---'
                          : `Q. ${item.ticketPrice}`}
                      </StyledTableCell>
                      <StyledTableCell
                        className={`${
                          item.state === 'N' && 'function--disabled'
                        } `}
                      >
                        {item.state === 'A'
                          ? 'Function'
                          : item.state === 'P'
                          ? 'Pre-sale'
                          : item.state === 'C'
                          ? 'Coming soon'
                          : 'Finished'}
                      </StyledTableCell>
                      <StyledTableCell>
                        {item.state != 'C' && item.state != 'N' && (
                          <Tooltip text="View">
                            <Link
                              href={`/functions/${item.idFunction}`}
                              className="link"
                            >
                              <CiRead size={16} />
                            </Link>
                          </Tooltip>
                        )}
                        {(item.state === 'C' || item.state === 'P') && (
                          <Tooltip text="Record edit">
                            <span>
                              <CiEdit
                                size={16}
                                className="btn-edit"
                                onClick={() => onEdit(item)}
                              />
                            </span>
                          </Tooltip>
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          'No functions'
        )}
      </div>
      <div>
        <h3>Actions</h3>
        <div className="actions-page">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => setOpenForm(!openForm)}
          >
            {openForm ? 'Cancel' : 'Create'}
          </Button>
          {openForm && (
            <div>
              <FormFunctions
                inputs={inputs}
                onChange={handleChange}
                onSubmit={handleSubmit}
                edit={edit}
                rooms={rooms}
                movies={movies}
                item={item}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(`${CONTEXT_PATH}/functions`);
  const resMovies = await fetch(`${CONTEXT_PATH}/movies`);
  const movies = await resMovies.json();
  const resRooms = await fetch(`${CONTEXT_PATH}/rooms/findRoomNotFunction`);
  const rooms = await resRooms.json();

  const { response } = await data.json();

  const dataAllRooms = await fetch(`${CONTEXT_PATH}/rooms`);
  const responseAllRooms = await dataAllRooms.json();
  const dataAllMovies = await fetch(`${CONTEXT_PATH}/movies`);
  const responseAllMovies = await dataAllMovies.json();

  console.log(response.length);

  return {
    props: {
      initialFunctions: response,
      initialMovies: movies.response,
      initialRooms: rooms.response,
      initialAllRooms: responseAllRooms.response,
      initialAllMovies: responseAllMovies.response,
    },
  };
}
