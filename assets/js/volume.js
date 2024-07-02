const ctx = document.getElementById('volChart');

const listElement  = document.getElementById("volumeList")
const listItemElements = [...listElement.querySelectorAll(':scope > li.sort')];

const volCollection = document.getElementsByClassName("volumeFilter");
const parseCollection = document.getElementsByClassName("volumeParse");

var masterJSON = {}
for (let i = 0; i < parseCollection.length; i++) {
  const t = JSON.parse(parseCollection[i].innerText)
  var l = (Object.keys(t)[0])
  console.log(t[l].year)
  //masterJSON["rawData"].l.toString ="Test"
}


for (let index = 0; index < volCollection.length; index++) {
    volCollection[index].addEventListener('click', (e) => {
    const year = e.target.id.slice(0,-7);
    const parseJSON = document.getElementById(year+"-data")
    const finalJSON = JSON.parse(parseJSON.innerText)
    for(var i = (volCollection.length - 1); i >= 0; i--)
    {
      volCollection[i].className = "volumeFilter";
    }
    // Yes this is not a great solution, but it works doesn't it? Maybe try and clean this up another day
    var yearFilter = document.getElementById(e.target.id); 
    yearFilter.classList.add("selected");
    // Update Fire Numbers
    volChart.data.datasets[0].data[0] = finalJSON[year].january.fire
    volChart.data.datasets[0].data[1] = finalJSON[year].febuary.fire
    volChart.data.datasets[0].data[2] = finalJSON[year].march.fire
    volChart.data.datasets[0].data[3] = finalJSON[year].april.fire
    volChart.data.datasets[0].data[4] = finalJSON[year].may.fire
    volChart.data.datasets[0].data[5] = finalJSON[year].june.fire
    volChart.data.datasets[0].data[6] = finalJSON[year].july.fire
    volChart.data.datasets[0].data[7] = finalJSON[year].august.fire
    volChart.data.datasets[0].data[8] = finalJSON[year].september.fire
    volChart.data.datasets[0].data[9] = finalJSON[year].october.fire
    volChart.data.datasets[0].data[10] = finalJSON[year].november.fire
    volChart.data.datasets[0].data[11] = finalJSON[year].december.fire
    // Update EMS
    volChart.data.datasets[1].data[0] = finalJSON[year].january.ems
    volChart.data.datasets[1].data[1] = finalJSON[year].febuary.ems
    volChart.data.datasets[1].data[2] = finalJSON[year].march.ems
    volChart.data.datasets[1].data[3] = finalJSON[year].april.ems
    volChart.data.datasets[1].data[4] = finalJSON[year].may.ems
    volChart.data.datasets[1].data[5] = finalJSON[year].june.ems
    volChart.data.datasets[1].data[6] = finalJSON[year].july.ems
    volChart.data.datasets[1].data[7] = finalJSON[year].august.ems
    volChart.data.datasets[1].data[8] = finalJSON[year].september.ems
    volChart.data.datasets[1].data[9] = finalJSON[year].october.ems
    volChart.data.datasets[1].data[10] = finalJSON[year].november.ems
    volChart.data.datasets[1].data[11] = finalJSON[year].december.ems
    // Update MVC
    volChart.data.datasets[2].data[0] = finalJSON[year].january.mvc
    volChart.data.datasets[2].data[1] = finalJSON[year].febuary.mvc
    volChart.data.datasets[2].data[2] = finalJSON[year].march.mvc
    volChart.data.datasets[2].data[3] = finalJSON[year].april.mvc
    volChart.data.datasets[2].data[4] = finalJSON[year].may.mvc
    volChart.data.datasets[2].data[5] = finalJSON[year].june.mvc
    volChart.data.datasets[2].data[6] = finalJSON[year].july.mvc
    volChart.data.datasets[2].data[7] = finalJSON[year].august.mvc
    volChart.data.datasets[2].data[8] = finalJSON[year].september.mvc
    volChart.data.datasets[2].data[9] = finalJSON[year].october.mvc
    volChart.data.datasets[2].data[10] = finalJSON[year].november.mvc
    volChart.data.datasets[2].data[11] = finalJSON[year].december.mvc
    // Update Other
    volChart.data.datasets[3].data[0] = finalJSON[year].january.other
    volChart.data.datasets[3].data[1] = finalJSON[year].febuary.other
    volChart.data.datasets[3].data[2] = finalJSON[year].march.other
    volChart.data.datasets[3].data[3] = finalJSON[year].april.other
    volChart.data.datasets[3].data[4] = finalJSON[year].may.other
    volChart.data.datasets[3].data[5] = finalJSON[year].june.other
    volChart.data.datasets[3].data[6] = finalJSON[year].july.other
    volChart.data.datasets[3].data[7] = finalJSON[year].august.other
    volChart.data.datasets[3].data[8] = finalJSON[year].september.other
    volChart.data.datasets[3].data[9] = finalJSON[year].october.other
    volChart.data.datasets[3].data[10] = finalJSON[year].november.other
    volChart.data.datasets[3].data[11] = finalJSON[year].december.other

    volChart.update();


  })
}

function getAllData(){

}

var volChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July','Sugust','September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Fire',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: 'rgba(151, 49, 49, 1)',
        borderColor: 'rgba(151, 49, 49, 1)',
        borderWidth: 1
    },
    {
        label: 'EMS',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: 'rgba(102, 159, 47, 1)',
        borderColor: 'rgba(102, 159, 47, 1)',
        borderWidth: 1
    },
    {
        label: 'MVC',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: 'rgba(207, 154, 16, 1)',
        borderColor: 'rgba(207, 154, 16, 1)',
        borderWidth: 1
    },
    {
        label: 'Other',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: 'rgba(93, 164, 246, 1)',
        borderColor: 'rgba(93, 164, 246, 1)',
        borderWidth: 1
    }]
  },
  options: {
    // responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      // changin the lagend colour
      legend: {
          labels: {
              color: "#6F6F6F",
          },
      },
    },
    interaction: {
      mode: 'index'
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {color: "#F4F4EA"},
        grid: {
          color: '#6F6F6F'
        },
        stepSize: 1
      },
      x: {
        ticks: {color: "#F4F4EA"},
        grid: {
          color: '#6F6F6F'
        },
      },
    },
    tooltips: {
      mode: 'label',
      callbacks: {
        label: function(t, d) {
          var dstLabel = d.datasets[t.datasetIndex].label;
          var yLabel = t.yLabel;
          return dstLabel + '12323 ' + yLabel;
       }
      }
    }
  }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  volChart.options.plugins.legend.labels.color = "#6F6F6F"
  volChart.options.scales.y.ticks.color = "#F4F4EA"
  volChart.options.scales.x.ticks.color = "#F4F4EA"
}else{
  volChart.options.plugins.legend.labels.color = "#6F6F6F"
  volChart.options.scales.y.ticks.color = "#202225"
  volChart.options.scales.x.ticks.color = "#202225"
}

function sortList(ul) {
  var ul = document.getElementById(ul);

  Array.from(ul.getElementsByTagName("LI"))
    .sort((b, a) => a.textContent.localeCompare(b.textContent))
    .forEach(li => {
      ul.appendChild(li) 
      //console.log(li)
    });
}

sortList("volumeList");