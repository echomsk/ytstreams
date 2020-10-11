//date = '2020-10-01'

function plot(date){
  var channels = ['Эхо Москвы', 'Навальный LIVE', 'Соловьёв LIVE']
  Plotly.d3.csv('https://raw.githubusercontent.com/echomsk/ytstreams/main/data/'+date+'.csv', (err, rows) => {
    var data = channels.map(y => {
      var d = rows.filter(r => r.channel_name === y)
    
      return {
        type: 'scatter',
        mode: "markers",
        name: y,
        x: d.map(r => r.timestamp),
        y: d.map(r => r.viewers)
      }
    })
  
    var layout = {
      title: 'YouTube Live Time Series ('+date+')',
      xaxis: {
        automargin: true,
        tickangle: 90,
        title: {
          text: "Timestamp",
          standoff: 20
        }},
      yaxis: {
        automargin: true,
        tickangle: 90,
        title: {
          text: "Viewers",
          standoff: 40
        }}
    };
    
    Plotly.newPlot('graph', data,layout)
  })
 }
