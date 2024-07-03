const ctx = document.getElementById('volChart');

const volCollection = document.getElementsByClassName("volumeFilter");
const parseCollection = document.getElementsByClassName("volumeParse");

for (let index = 0; index < volCollection.length; index++) {
    volCollection[index].addEventListener('click', (e) => {
      const year = e.target.id.slice(0,-7);
      const parseJSON = document.getElementById(year+"-data")
      const finalJSON = JSON.parse(parseJSON.innerText)

      const allFire = finalJSON[year].january.fire + finalJSON[year].febuary.fire + finalJSON[year].march.fire + finalJSON[year].april.fire + finalJSON[year].may.fire + finalJSON[year].june.fire + finalJSON[year].july.fire + finalJSON[year].august.fire + finalJSON[year].september.fire + finalJSON[year].october.fire + finalJSON[year].november.fire + finalJSON[year].december.fire;
      const allMVC = finalJSON[year].january.mvc + finalJSON[year].febuary.mvc + finalJSON[year].march.mvc + finalJSON[year].april.mvc + finalJSON[year].may.mvc + finalJSON[year].june.mvc + finalJSON[year].july.mvc + finalJSON[year].august.mvc + finalJSON[year].september.mvc + finalJSON[year].october.mvc + finalJSON[year].november.mvc + finalJSON[year].december.mvc;
      const allEMS = finalJSON[year].january.ems + finalJSON[year].febuary.ems + finalJSON[year].march.ems + finalJSON[year].april.ems + finalJSON[year].may.ems + finalJSON[year].june.ems + finalJSON[year].july.ems + finalJSON[year].august.ems + finalJSON[year].september.ems + finalJSON[year].october.ems + finalJSON[year].november.ems + finalJSON[year].december.ems;;
      const allOther = finalJSON[year].january.other + finalJSON[year].febuary.other + finalJSON[year].march.other + finalJSON[year].april.other + finalJSON[year].may.other + finalJSON[year].june.other + finalJSON[year].july.other + finalJSON[year].august.other + finalJSON[year].september.other + finalJSON[year].october.other + finalJSON[year].november.other + finalJSON[year].december.other;

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

      document.getElementById("statWrapper").classList.remove("volumeParse")
      document.getElementById("totalSpan").innerHTML = (allFire + allMVC + allEMS + allOther)
      document.getElementById("fireSpan").innerHTML = allFire
      document.getElementById("mvcSpan").innerHTML = allMVC
      document.getElementById("emsSpan").innerHTML = allEMS
      document.getElementById("otherSpan").innerHTML = allOther

      volChart.update();
  })
}
var volChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July','August','September', 'October', 'November', 'December'],
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
    plugins: {
      // change the legend colour
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
    });
}

window.onload = () => {
  sortList("volumeList");
}
