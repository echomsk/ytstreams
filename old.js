function plot(date){
  Plotly.d3.csv('https://raw.githubusercontent.com/echomsk/ytstreams/main/data/'+date+'.csv', function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }


  var trace1 = {
    type: "scatter",
    mode: "markers",
    name: 'Эхо Москвы',
    x: unpack(rows, 'timestamp'),
    y: unpack(rows, 'Эхо Москвы'),
    marker: {
      color: 'rgb(102,219, 184)',
    }
  }

  var trace2 = {
    type: "scatter",
    mode: "markers",
    name: 'Навальный LIVE',
    x: unpack(rows, 'timestamp'),
    y: unpack(rows, 'Навальный LIVE'),
    color:'green',
    marker: {
      color: 'rgb(252, 41, 97)',
    }
  }
  
  var trace3 = {
    type: "scatter",
    mode: "markers",
    name: 'Соловьёв LIVE',
    x: unpack(rows, 'timestamp'),
    y: unpack(rows, 'Соловьёв LIVE'),
    marker: {
      color: 'rgb(75, 9, 182)',
    }
  }
  
  var trace4 = {
    type: "scatter",
    mode: "markers",
    name: 'Телеканал Дождь',
    x: unpack(rows, 'timestamp'),
    y: unpack(rows, 'Телеканал Дождь'),
    marker: {
      color: 'rgb(50, 7, 67)',
    }
  }


  var data = [trace1,trace2,trace3,trace4];

  var layout = {
    title: 'YouTube Live Time Series ('+date+')',
  };

  Plotly.newPlot('graph', data, layout);
})

}
