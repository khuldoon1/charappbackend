
const { Client } = require('pg')
// const client = new Client({
//     user: 'postgres',
//     host: 'db.youoymlqesswtwvooele.supabase.co',
//     database: 'postgres',
//     password: 'VKotopoulos@',
//     port: 5432,
// })
const client = new Client({
  user: 'postgres',
  host: '65.21.190.63',
  database: 'postgres',
  password: 'Vasilis2022!',
  port: 5432,
})

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
const getdata = (request, response) => {
    client.query('SELECT * FROM public.binance_minute WHERE symbol  LIKE $1 ORDER BY open_time ASC  ', ['BTCUSDT'], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getdataeth = (request, response) => {
    client.query('SELECT * FROM public.binance_minute WHERE symbol  LIKE $1 ORDER BY open_time ASC  ', ['ETHUSDT'], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getdataxpr = (request, response) => {
    client.query('SELECT * FROM public.binance_minute WHERE symbol  LIKE $1 ORDER BY open_time ASC  ', ['XRPUSDT'], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const financials = (request, response) => {
    client.query('SELECT * FROM public.financials_metrics ORDER BY load_date DESC  LIMIT 1 ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const crypto_meter = (request, response) => {
    client.query('SELECT * FROM public.crypto_metrics ORDER BY load_date DESC LIMIT 1  ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getlatestbtcdata = (request, response) => {
    client.query('SELECT * FROM public.binance_minute WHERE symbol  LIKE $1 ORDER BY open_time DESC LIMIT 1  ',['BTCUSDT'], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getlatestethdata = (request, response) => {
    client.query('SELECT * FROM public.binance_minute WHERE symbol  LIKE $1 ORDER BY open_time DESC LIMIT 1  ',['ETHUSDT'], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getlatestxrpdata = (request, response) => {
    client.query('SELECT * FROM public.binance_minute WHERE symbol  LIKE $1 ORDER BY open_time DESC LIMIT 1  ',['XRPUSDT'], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  module.exports = {
    getdata,
    getdataeth,
    getdataxpr,
    financials,
    crypto_meter,
    getlatestbtcdata,
    getlatestethdata,
    getlatestxrpdata
  }