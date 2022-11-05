import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState('');

  React.useEffect(() => {
    axios.get(`/api/flights`).then((response) => {
      console.log(`you have successfully submitted ${response.data}`);
      // setPost(response.data);
    });
  }, []);

  // console.log('this is handle submit', handleSubmit);
  // console.log('data', data);

  return (
    <div className='formBody'>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div>
          <h1>Flightless</h1>
        </div>

        {/* TRIPS */}
        <div>
          <section className='round-trip'>
            <input
              type='radio'
              className={`trip-error ${errors.tripType}`}
              placeholder='round trip'
              {...register('round_trip', {
                required: {
                  value: true,
                  message: 'Trip type is required',
                },
              })}
            />
            <span>Round Trip:</span>
          </section>
          <section className='one-way'>
            <input
              type='radio'
              className={`trip-error ${errors.tripType}`}
              value='one way'
              // one-way does not exist yet?
              {...register('one-way', {
                required: {
                  value: true,
                  message: 'Trip type is required',
                },
              })}
            />

            <span>One Way:</span>
          </section>

          {/* DEPARTURE */}
          <div className='departure'>
            <span>From:</span>
            <select
              {...register('dep_location', {
                required: {
                  value: true,
                  message: 'Departure is required',
                },
              })}
            >
              <option placeholder='' selected disabled hidden>
                Select Airport
              </option>
              <option placeholder='JFK'>
                {' '}
                John F. Kennedy International Airport
              </option>
              <option placeholder='LAX'>
                {' '}
                Los Angeles International Airport
              </option>
              <option placeholder='SFO'>San Francisco Internal Airport</option>
              <option placeholder='PHL'>
                Philadelphia International Airport
              </option>
            </select>
          </div>

          <div className='arrival'>
            <span>To:</span>
            <select
              {...register('arr_location', {
                required: {
                  value: true,
                  message: 'Arrival is required',
                },
              })}
            >
              <option placeholder=''>Select Airport</option>
              <option placeholder='JFK'>
                {' '}
                John F. Kennedy International Airport
              </option>
              <option placeholder='LAX'>
                {' '}
                Los Angeles International Airport
              </option>
              <option placeholder='SFO'>San Francisco Internal Airport</option>
              <option placeholder='PHL'>
                Philadelphia International Airport
              </option>
            </select>
          </div>

          {/* DEPARTURE */}
          <div>
            <span>Departure Date: </span>
            <input
              type='date'
              {...register('dep_date', {
                required: {
                  value: true,
                  message: 'Departure date is required',
                },
              })}
            />
          </div>

          {/* RETURN */}
          <div>
            <span>Return Date: </span>
            <input
              type='date'
              // return date does not exist yet in table?
              {...register('return_date', {
                required: {
                  value: true,
                  message: 'Return date is required',
                },
              })}
            />
          </div>

          {/* ignoring multi-city for now */}
          {/* <section className='multi-city'>
            <h3>Multi City:</h3>
            <input
              placeholder='one way'
              {...register('tripType', {
                required: {
                  value: true,
                  message: 'Trip type is required',
                },
              })}
            />
          </section> */}
        </div>

        {/* PASSENGERS */}
        <div className='passengers'>
          <div className='adults'>
            <span>Adults (18+):</span>
            <select
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

          <div className='children'>
            <span>Children (3-17):</span>
            <select
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
              <option>5</option>
            </select>
          </div>
          <div className='infants'>
            <span>Infants (0-2):</span>
            <select
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
              <option>5</option>
            </select>
          </div>
        </div>

        {/* CLASS AND PRICE */}
        <div className='class'>
          <span>Class</span>
          <select
            {...register('cabin_class', {
              required: {
                value: true,
                message: 'Trip type is required',
              },
            })}
          >
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>
        <div className='price'>
          <span>Price</span>
          <select
            // price does not exist yet?
            {...register('price', {
              required: {
                value: true,
                message: 'Trip type is required',
              },
            })}
          >
            <option>All Prices</option>
            <option>$100</option>
            <option>$200</option>
            <option>$300</option>
            <option>$400</option>
            <option>$500</option>
          </select>
        </div>
        <div>
          <button type='button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
