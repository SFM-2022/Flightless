import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* header section */}
          <div>
            <p>Flights</p>
          </div>

          {/* body section */}
          <div>
            <div>
              <div>
                <div>
                  {/* ROUND TRIP */}
                  <div>
                    <input
                      type='radio'
                      value='round trip'
                      {...register('tripType', {
                        required: {
                          value: true,
                          message: 'Trip type is required',
                        },
                      })}
                    />
                    <p>Round trip</p>
                  </div>

                  {/* ONE WAY */}
                  <div>
                    <input
                      value='one way'
                      {...register('tripType', {
                        required: {
                          value: true,
                          message: 'Trip type is required',
                        },
                      })}
                    />
                    <p>One way</p>
                  </div>

                  <div>
                    <input
                      value='multi-city'
                      {...register('tripType', {
                        required: {
                          value: true,
                          message: 'Trip type is required',
                        },
                      })}
                    />
                    <p>Multi-City</p>
                  </div>
                </div>
              </div>

              {/* DEPARTURE */}
              <div>
                <p>From:</p>
                <select
                  {...register('departure', {
                    required: {
                      value: true,
                      message: 'Departure is required',
                    },
                  })}
                >
                  <option value='' selected disabled hidden>
                    Select Airport
                  </option>
                  <option value='JFK'>
                    {' '}
                    John F. Kennedy International Airport
                  </option>
                  <option value='LAX'>
                    {' '}
                    Los Angeles International Airport
                  </option>
                  <option value='SFO'>San Francisco Internal Airport</option>
                  <option value='PHL'>
                    Philadelphia International Airport
                  </option>
                </select>
              </div>

              {/* ARRIVAL */}
              <div>
                <div>
                  <div>
                    <p>TO:</p>
                    <select
                      {...register('arrival', {
                        required: {
                          value: true,
                          message: 'Arrival is required',
                        },
                      })}
                    >
                      <option value=''>Select Airport</option>
                      <option value='JFK'>
                        {' '}
                        John F. Kennedy International Airport
                      </option>
                      <option value='LAX'>
                        {' '}
                        Los Angeles International Airport
                      </option>
                      <option value='SFO'>
                        San Francisco Internal Airport
                      </option>
                      <option value='PHL'>
                        Philadelphia International Airport
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* date section */}
              <div>
                {/* DEPARTURE */}
                <div>
                  <p>departure date</p>
                  <input
                    type='date'
                    {...register('departureDate', {
                      required: {
                        value: true,
                        message: 'Departure date is required',
                      },
                    })}
                  />
                </div>

                {/* RETURN */}
                <div>
                  <p>return date</p>
                  <input
                    type='date'
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

            {/* PASSENGER */}
            <div>
              {/* ADULT */}
              <div>
                <div>
                  <div>
                    <p> adults (18+)</p>
                    <select
                      {...register('adult', {
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
                </div>
              </div>

              {/* CHILDREN */}
              <div>
                <div>
                  <div>
                    <p> children (0-17)</p>
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
                </div>
              </div>
            </div>

            {/* class and price section */}
            <div>
              {/* CLASS */}
              <div>
                <div>
                  <div>
                    <p> class</p>
                    <select
                      {...register('class', {
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
                </div>
              </div>

              {/* PRICE */}
              <div>
                <div>
                  <div>
                    <p> price</p>
                    <select
                      {...register('price', {
                        required: {
                          value: true,
                          message: 'Trip type is required',
                        },
                      })}
                    >
                      <option>All Prices</option>
                      <option>$ 1000</option>
                      <option>$ 2000</option>
                      <option>$ 3000</option>
                      <option>$ 4000</option>
                      <option>$ 5000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* BTN */}
            <button>
              <input type='submit' value='Find flight' />
              Find Flight
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
