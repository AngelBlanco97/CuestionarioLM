google.charts.load("current", {packages:["corechart"]});

google.charts.setOnLoadCallback(drawChartPregunta1);
google.charts.setOnLoadCallback(drawChartPregunta2);
google.charts.setOnLoadCallback(drawChartPregunta3);
google.charts.setOnLoadCallback(drawChartPregunta4);

function drawChartPregunta1() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Respuestas');
  data.addColumn('number', 'Cantidad');
  data.addRows([
    ['Por estilo', 54],
    ['Por tamaño', 11],
    ['Por precio', 9]
  ]);

  var options = {
    backgroundColor: '#F3F0D7',
    is3D: true,
    vAxis: {
      minValue: 0,
      maxValue: 100
  } 
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}


function drawChartPregunta2() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Respuestas');
  data.addColumn('number', 'Cantidad');
  data.addRows([
    ['Si', 31],
    ['No', 26],
    ['No lo se', 17]
  ]);

  var options = {
    backgroundColor: '#F3F0D7',
    is3D: true,
    vAxis: {
      minValue: 0,
      maxValue: 100
  } 
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

  chart.draw(data, options);
}


function drawChartPregunta3() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Respuestas');
  data.addColumn('number', 'Cantidad');
  data.addRows([
    ['Si', 47],
    ['No', 27],
  ]);

  var options = {
    backgroundColor: '#F3F0D7',
    is3D: true,
    vAxis: {
      minValue: 0,
      maxValue: 100
  } 
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

  chart.draw(data, options);
}


function drawChartPregunta4() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Respuestas');
  data.addColumn('number', 'Cantidad');
  data.addRows([
    ['Internet', 19],
    ['Tienda Especializada', 8],
  ]);

  var options = {
    backgroundColor: '#F3F0D7',
    is3D: true,
    vAxis: {
      minValue: 0,
      maxValue: 100
  } 
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

  chart.draw(data, options);
}
