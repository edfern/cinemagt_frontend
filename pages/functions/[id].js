import { useRouter } from 'next/router';
import { CONTEXT_PATH } from '../../config';
import { Cinema } from '../../components/cinema';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image';
import { Button, Grid } from '@mui/material';
import { InputText } from '../../components/input';

export default function FunctionsCinema({
  billboardFunction,
  purchasedSeatsToday,
}) {
  const { room, movie } = billboardFunction;
  const [date, setDate] = useState(
    billboardFunction.startDate > moment().format('YYYY-MM-DD')
      ? moment(billboardFunction.startDate).format('YYYY-MM-DD')
      : moment().format('YYYY-MM-DD')
  );
  const [purchasedSeats, setPurchasedSeats] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [descriptionTicket, setDescriptionTicket] = useState([]);
  const [total, setTotal] = useState(0);
  const [formCustomer, setFormCustomer] = useState(false);
  const [customer, setCustomer] = useState('');

  const [loading, setLoading] = useState(false);
  const [loadingSale, setLoadingSale] = useState(false);
  const params = useRouter();
  const { query } = params;
  const { id } = query;

  useEffect(() => {
    if (date) {
      onTicketsToday(id, date);
      setFormCustomer(false);
    }
  }, [date, id]);

  useEffect(() => {
    setTotal(selectedTickets.length * billboardFunction.ticketPrice);
  }, [selectedTickets]);

  const handleSelectedTickets = (e) => {
    const idSeat = e.currentTarget.id;
    const { baseVal } = e.currentTarget.className;

    if (baseVal === 'cinema__seat--no-available') return;

    const confirm = selectedTickets.includes(idSeat);
    if (confirm) {
      setSelectedTickets(selectedTickets.filter((item) => item != idSeat));
      setDescriptionTicket(
        descriptionTicket.filter((item) => item.seat != idSeat)
      );
      return;
    }
    setDescriptionTicket([
      ...descriptionTicket,
      {
        date: date,
        description: 'GET TICKET',
        seat: idSeat,
        price: billboardFunction.ticketPrice,
        function: {
          idFunction: parseInt(id),
        },
      },
    ]);
    setSelectedTickets([...selectedTickets, e.currentTarget.id]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sale = {
      sale: {
        customerName: customer,
        total: total,
        date: new Date().toJSON().slice(0, 10),
      },
      tickets: descriptionTicket,
    };

    if (
      confirm(
        `Do you want to finish the purchase? purchase information: \n Customer: ${customer}\n Total: ${total} \n Tickets: ${selectedTickets.map(
          (item) => item
        )}`
      )
    )
      onSale(sale);
    else alert('keep shopping!');
  };

  const onSale = async (sale) => {
    setLoadingSale(true);
    await fetch(`${CONTEXT_PATH}/sales/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sale),
    })
      .then((res) => res.json())
      .then(({ response }) => {
        const { idSale } = response;
        if (idSale) {
          alert('Success');
          setCustomer('');
          setFormCustomer(false);
          setSelectedTickets([]);
          setDescriptionTicket([]);
          onTicketsToday(id, date);
        }
        setLoadingSale(false);
      });
  };

  const onTicketsToday = async (id, date) => {
    setLoading(true);
    setSelectedTickets([]);
    setDescriptionTicket([]);
    const res = await fetch(`${CONTEXT_PATH}/tickets/${id}/${date}`)
      .then((res) => res.json())
      .then(({ response }) => {
        setPurchasedSeats(response);
        setLoading(false);
      });
  };

  return (
    <div className="function">
      <div className="function__info">
        <div className="info-movie">
          <ul>
            <li>
              <h3>
                {' '}
                <span>{movie.name}</span>
              </h3>
            </li>
            <li>
              <span>{movie.description}</span>
            </li>
          </ul>
        </div>
        <div className="info-room">
          <ul>
            <li>
              <strong>
                Room <span>{room.name}</span> - <span>{room.size}</span>
              </strong>
            </li>
            <li>
              <span>{room.description}</span>
            </li>
          </ul>
        </div>
        <div className="info-function">
          <ul>
            <li>
              Time{' '}
              <span>{moment(billboardFunction.time).format('hh:mm a')}</span>
            </li>
            <li>
              It is available from{' '}
              <span>
                <strong>
                  {moment(billboardFunction.startDate).format('YYYY-MM-DD')}
                </strong>
              </span>{' '}
              to{' '}
              <strong>
                <span>
                  {moment(billboardFunction.endDate).format('YYYY-MM-DD')}
                </span>
              </strong>
            </li>
            <li>
              ticket price <span>Q. {billboardFunction.ticketPrice}</span>
            </li>
          </ul>
        </div>

        <div
          className="movie-cover"
          style={{ backgroundImage: `url(${movie.image})` }}
        ></div>
      </div>
      <div>
        <input
          type="date"
          min={
            moment(billboardFunction.startDate).format('YYYY-MM-DD') <
            moment().format('YYYY-MM-DD')
              ? moment().format('YYYY-MM-DD')
              : moment(billboardFunction.startDate).format('YYYY-MM-DD')
          }
          max={moment(billboardFunction.endDate).format('YYYY-MM-DD')}
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <div className="cinema__room">
          <Cinema
            ticketsSold={purchasedSeats}
            handleTicket={handleSelectedTickets}
            selectedTickets={selectedTickets}
            sizeRoom={room.size}
            countPurchasedSeats={purchasedSeats ? purchasedSeats.length : 0}
            countSelectedSeats={selectedTickets ? selectedTickets.length : 0}
          />
          {loading && <div className="loading">Loading...</div>}
          {billboardFunction.endDate < moment().format('YYYY-MM-DD') ||
          (moment().format('HH:mm') >
            moment(billboardFunction.time).format('HH:mm') &&
            moment().format('YYYY-MM-DD') === date) ? (
            <div className="loading">
              This movie feature is no longer available
            </div>
          ) : (
            ''
          )}
          <div>
            <h3>
              total: Q. <span>{total}</span>
            </h3>
          </div>
          {selectedTickets.length > 0 && (
            <div className="action-page">
              <Button
                size="small"
                onClick={() => setFormCustomer(!formCustomer)}
                variant="outlined"
                color="secondary"
              >
                {formCustomer ? 'Cancel' : 'Buy'}
              </Button>
            </div>
          )}
          {formCustomer && (
            <div className="card-form">
              <form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item xs={12}>
                    <InputText
                      description="Here you must place the name of the client"
                      title="Customer name"
                      id="customerName"
                      name="customerName"
                      type="text"
                      value={customer}
                      required={true}
                      onChange={(e) => setCustomer(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  disabled={loadingSale}
                  color="primary"
                  variant="contained"
                  size="small"
                >
                  {loadingSale ? 'Loading...' : 'Confirm purchased'}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const data = await fetch(`${CONTEXT_PATH}/functions/${id}`);

  const { response } = await data.json();

  return {
    props: {
      billboardFunction: response,
    },
  };
}
