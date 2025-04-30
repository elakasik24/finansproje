var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


// -----------chart---------------
//column chart kategorik bazlı harcama
var barChartOptions = {
  series: [{
  name: 'Servings',
  data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31,12,34 ]
}],
  annotations: {
  points: [{
    x: 'Bananas',
    seriesIndex: 0,
    label: {
      borderColor: '#775DD0',
      offsetY: 0,
      style: {
        color: '#fff',
        background: '#775DD0',
      },
      text: '',
    }
  }]
},
chart: {
  height: 280,
  type: 'bar',
  width: '100%'
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth: '50%',
    
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  width: 0
},
grid: {
  row: {
    colors: ['#fff', '#f2f2f2']
  }
},
xaxis: {
  labels: {
    rotate: -45
  },
  categories: ['Market', 'Ulaşım', 'Eğlence', 'Kira', 'Sağlık', 'Restoran',
    'Kişisel Bakım', 'Hobi', 'Teknoloji', 'Eğitim', 'Ev & Yaşam', 'Aile & Sosyal Hayat'
  ],
  tickPlacement: 'on'
},
yaxis: {
  title: {
    text: 'Servings',
  },
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'light',
    type: "horizontal",
    shadeIntensity: 0.25,
    gradientToColors: undefined,
    inverseColors: true,
    opacityFrom: 0.85,
    opacityTo: 0.85,
    stops: [50, 0, 100]
  },
}
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


///////////////////////////////////////////////
//line chart gelir & gider dağılımı


var incomeData = [
  [new Date('2024-03-01').getTime(), 5000],
  [new Date('2024-03-02').getTime(), 7000],
  [new Date('2024-03-03').getTime(), 9000],
  [new Date('2024-03-04').getTime(), 11000]
];

var expenseData = [
  [new Date('2024-03-01').getTime(), 3000],
  [new Date('2024-03-02').getTime(), 5000],
  [new Date('2024-03-03').getTime(), 4000],
  [new Date('2024-03-04').getTime(), 6000]
];

var areaChartOptions = {
  series: [
      {
          name: 'Gelir (Income)',
          data: incomeData,
          color: '#28a745'  
      },
      {
          name: 'Gider (Expense)',
          data: expenseData,
          color: '#dc3545'  
      }
  ],
  chart: {
      type: 'area',
      stacked: false,
      height: 300,
      zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
      },
      toolbar: {
          autoSelected: 'zoom'
      }
  },
  dataLabels: {
      enabled: false
  },
  markers: {
      size: 4, 
  },
  title: {
      text: 'Gelir & Gider Analizi',
      align: 'left'
  },
  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 90, 100]
      },
  },
  yaxis: {
      labels: {
          formatter: function (val) {
              return (val / 1000).toFixed(1) + "K ₺";
          },
      },
      title: {
          text: 'Miktar (₺)'
      },
  },
  xaxis: {
      type: 'datetime',
      labels: {
          format: 'dd MMM'
      }
  },
  tooltip: {
      shared: true,  
      y: {
          formatter: function (val) {
              return val.toLocaleString() + " ₺";
          }
      }
  }
};


var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();


/////////////////////////////
//pie chart- borç dağılımı




  //Gider Dağılımı pie cahrt

  var twoChartOptions = {
    series: [44, 55, 41, 17, 15,0,4],
    chart: {
    width: 480,
    type: 'donut',
  },
  labels: ["Kredi Kartı", "Kişisel Kredi","Konut Kredisi","Öğrenim Kredisi","Araç Kredisi","Tüketici Kredisi","İç Borç"],
  colors: ['#4e8c4a', '#f1c27d','#a3d2ca','#ffe156','#f4a300',"#d8c3a5","#9e4f96"]
  ,
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontWeight: 'bold',
      
    },
  },
  fill: {
    type: 'gradient',
  },
  
  legend: {
    labels: {
      fontSize: '46px',  
      fontWeight: 'bold', 
      colors: ['#000000'] 
    },
    formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
  title: {
  
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'left'
        
      }
    }
  }]
  };

  var twoChart = new ApexCharts(document.querySelector("#two-chart"), twoChartOptions);
  twoChart.render();

/////////////////////////////////////////////
//Bütçe dağılımı Line chart


var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#FF6347', '#32CD32', '#8A2BE2', '#20B2AA','#05f2e4','#247880',,'#7fffd4'];

var treeChartOptions = {
  series: [{
  data: [21, 22, 10, 28, 16, 21, 13, 30,44,54,56,60]
}],
  chart: {
  height: 300,
  type: 'bar',
  events: {
    click: function(chart, w, e) {
      // console.log(chart, w, e)
    }
  }
},
colors: colors,
plotOptions: {
  bar: {
    columnWidth: '45%',
    distributed: true,
  }
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
xaxis: {
  
  categories: [
    'Market', 'Ulaşım', 'Eğlence', 'Kira', 'Sağlık', 'Restoran & Kafe',
    'Kişisel Bakım', 'Hobi', 'Teknoloji', 'Eğitim', 'Ev & Yaşam', 'Aile & Sosyal Hayat'
  ],
  labels: {
    style: {
      colors: '#000000',
      fontSize: '12px'
    }
  }
}
};

var treeChart = new ApexCharts(document.querySelector("#tree-chart"), treeChartOptions);
treeChart.render();

////------------modal aç kapa----------------------

const modalBtn =document.getElementById("open-btn");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-kapat");

modalBtn.addEventListener("click", () =>{
  modal.style.display = "flex";

});

modalKapat.addEventListener("click" , () => {
  modal.style.display = "none";
});



///silinebilir modal
const modalBtnn =document.getElementById("open-btnn");
const modall = document.querySelector(".modall");
const modalKapatt = document.getElementById("modal-kapatt");

modalBtnn.addEventListener("click", () =>{
  modall.style.display = "flex";

});

modalKapatt.addEventListener("click" , () => {
  modall.style.display = "none";
});



// Genişlik ve yazı boyutunu sabitle





////bildirim kutusu start
function toggleNotifications() {
  const box = document.getElementById("notificationBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

// Kutunun dışında bir yere tıklanırsa kapat
window.addEventListener("click", function (e) {
  const box = document.getElementById("notificationBox");
  const notifIcon = document.querySelector(".header-right .material-symbols-outlined:first-child");
  if (!box.contains(e.target) && !notifIcon.contains(e.target)) {
    box.style.display = "none";
  }
});


////bildirim kutusu end








//////////////////////////////login register yönlendirme






