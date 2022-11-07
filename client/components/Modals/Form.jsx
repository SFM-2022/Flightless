import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// register: method allows you to register an input or select element and apply validation rules to React Hook Form
// watch: will watch specified inputs and return their values -> useful to render input value and for determining what to render by condition

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // using to make search bar functional?
  const [query, setQuery] = useState('');

  // unsure how to get the state from App.jsx
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('/api/flights');
        setData(response);
      } catch (err) {
        console.log(`error fetching state: ${err}`);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // making search bar functional -> query search, probably use .map to loop through each obj in the array and display it? -> onClick event handler?

  // handle submit
  const onSubmit = (data) => console.log(JSON.stringify(data));

  const onError = () => {
    console.log('error');
  };

  return (
    <div className='formBody'>
      <form
        onSubmit={(e) =>
          handleSubmit(
            onSubmit,
            onError
          )(e).catch((e) => {
            console.log('e', e);
          })
        }
      >
        <div className='searchBar'>
          <h1>Flightless</h1>

          <div className='locations'>
            {/* ORIGIN */}
            <div className='dep'>
              <label className='form-label'>Departure:</label>
              <div className='input-group'>
                <span className='input'></span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Location'
                  // spreading props into input
                  {...register('depLocation', {
                    required: {
                      value: true,
                      message: 'departure is required',
                    },
                  })}
                />
              </div>
            </div>

            {/* DESTINATION */}
            <div className='arr'>
              <label className='form-label'>Arrival:</label>
              <div className='input-group'>
                <span className='input'></span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Location'
                  {...register('arrLocation', {
                    required: {
                      value: true,
                      message: 'arrival is required',
                    },
                  })}
                />
              </div>
            </div>
          </div>

          {/* FLIGHT TYPE */}
          <div className='dates-details'>
            <div className='flight-dates'>
              <div className='flight-type'>
                <h3 className='dates'>Dates</h3>
                <div>
                  <label id='flight-type-label' className='form-label'>
                    Flight:
                  </label>
                  <select id='flight-type-select' className='form-select'>
                    <option
                      // value='one-way'
                      className={`trip-error ${errors.tripType}`}
                      placeholder='one-way'
                      {...register('one-way', {
                        required: {
                          value: true,
                          message: 'Trip type is required',
                        },
                      })}
                    >
                      One-way
                    </option>
                    <option
                      // value='round-trip'
                      className={`trip-error ${errors.tripType}`}
                      placeholder='round-trip'
                      {...register('roundTrip', {
                        required: {
                          value: true,
                          message: 'Trip type is required',
                        },
                      })}
                    >
                      Round-trip
                    </option>
                  </select>
                </div>
              </div>

              {/* DEPARTURE DATE  */}
              <div className='departure-date'>
                <label className='form-label'>Departure date:</label>
                <div className='input-group'>
                  <input
                    type='date'
                    className='departure-date-input'
                    {...register('depDate', {
                      required: {
                        value: true,
                        message: 'Departure date is required',
                      },
                    })}
                  />
                </div>
              </div>

              {/* RETURN DATE */}
              <div className='return-date'>
                <label className='form-label'>Return date:</label>
                <div className='input-group'>
                  <input
                    type='date'
                    className='form-control'
                    {...register('returnDate', {
                      required: {
                        value: true,
                        message: 'Return date is required',
                      },
                    })}
                  />
                </div>
              </div>
            </div>

            {/* FLIGHT CLASS */}
            <div className='flight-class'>
              <h3 className='flight-className'>Details</h3>
              <div className='destination'>
                <label className='form-label'>Travel Class:</label>
                <select
                  className='form-select'
                  {...register('cabinClass', {
                    required: {
                      value: true,
                      message: 'Trip type is required',
                    },
                  })}
                >
                  <option value='ECONOMY'>Economy</option>
                  <option value='PREMIUM_ECONOMY'>Premium Economy</option>
                  <option value='BUSINESS'>Business</option>
                  <option value='FIRST'>First</option>
                </select>
              </div>

              {/* PASSENGERS: ADULTS */}
              <div className='passengers'>
                <label className='form-label'>Passengers:</label>
                <div className='adults'>
                  <label className='input'>Adults (18+): </label>
                  <select
                    {...register('numAdults', {
                      required: {
                        value: true,
                        message: 'Trip type is required',
                      },
                    })}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                {/* PASSENGERS: CHILDREN */}
                <div className='children'>
                  <label className='input'>Children (3-17): </label>
                  <select
                    {...register('numChildren', {
                      required: {
                        value: true,
                        message: 'Trip type is required',
                      },
                    })}
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

                {/* PASSENGERS: INFANTS */}
                <div className='infants'>
                  <label htmlFor='infants-input'>Infants (0-2): </label>
                  <select
                    className='w-full h-16 rounded-lg text-2xl pl-20'
                    {...register('numInfants', {
                      required: {
                        value: true,
                        message: 'Trip type is required',
                      },
                    })}
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button onClick searches for flights matching origin and destination */}
        <button type='submit' className='search'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
