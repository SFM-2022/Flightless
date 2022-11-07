import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// register: method allows you to register an input or select element and apply validation rules to React Hook Form
// watch: will watch specified inputs and return their values -> useful to render input value and for determining what to render by condition

const Form = ({ updateForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // if there are any changes to data, this will make a post request to api/flights
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.post('/api/flights', data);
        setData(response);
      } catch (err) {
        console.log(`error fetching state: ${err}`);
      }
      setLoading(false);
    };
    fetchData();
  }, [data]);

  // updateForm will upstate dataForm (state in app.jsx)
  // handle submit
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    updateForm(JSON.stringify(data));
  };

  const onError = () => {
    console.log('error');
  };

  return (
    <div className='formBody'>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className='searchBar'>
          <h1 className='title-name'>Flightless</h1>

          <div className='locations'>
            {/* DEPARTURE */}
            <div className='dep'>
              <label className='form-label'>Departure: </label>
              <select
                {...register('dep_location', {
                  required: {
                    value: true,
                    message: 'Departure is required',
                  },
                })}
              >
                <option>Select Airport</option>
                <option value='JFK'>
                  John F. Kennedy International Airport
                </option>
                <option value='SFO'>San Francisco International Airport</option>
                <option value='LAX'>Los Angeles International Airport</option>
                <option value='PHL'>Philadelphia International Airport</option>
              </select>
            </div>

            {/* ARRIVAL */}
            <div className='arr'>
              <label className='form-label'>Arrival: </label>
              <select
                {...register('arr_location', {
                  required: {
                    value: true,
                    message: 'Departure is required',
                  },
                })}
              >
                <option>Select Airport</option>
                <option value='JFK'>
                  John F. Kennedy International Airport
                </option>
                <option value='SFO'>San Francisco International Airport</option>
                <option value='LAX'>Los Angeles International Airport</option>
                <option value='PHL'>Philadelphia International Airport</option>
              </select>
              {/* <div className='input-group'>
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
              </div> */}
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
                      {...register('one_way', {
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
                      {...register('round_trip', {
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
                    {...register('dep_date', {
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
                    {...register('return_date', {
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
                <label className='form-label'>Travel Class: </label>
                <select
                  className='form-select'
                  {...register('cabin_class', {
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
                <div className='adults'>
                  <label className='input'>Adults (18+): </label>
                  <select
                    className='adults-button'
                    {...register('adults', {
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
                    className='children-button'
                    {...register('children', {
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
                  <label htmlFor='infants'>Infants (0-2): </label>
                  <select
                    className='infants-button'
                    {...register('infants', {
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

// onClick={(data) => {
//   console.log(data);
//   updateForm(123);
// }}
