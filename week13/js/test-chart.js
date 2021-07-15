var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ用データセット',
        borderColor: 'rgb(150, 50, 60)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 60, 10],
    }]
};

var config = {
    type: 'line',
    data,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);



const endata = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
};

const enconfig = {
    type: 'doughnut',
    data: endata,
};

var enChart = new Chart(
    // document.getElementById('enChart'),
    $('#enChart'),
    enconfig,
);
