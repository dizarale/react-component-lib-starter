const sampleData = {
  line: {
    id: 'line_1',
    data: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    chartEvents: [
      {
        eventName : 'select',
        callback : function(chart) {
          window.console.log('line selected', chart)
        }
      },
      {
        eventName : 'click',
        callback  : function(chart) {
          window.console.log('line clicked', chart)
        }
      }
    ]
  },
  line2: {
    id: 'line_2',
    data: [
      [1,10,43],
      [2,20,80],
      [3,50,60],
      [4,70,86],
      [5,45,100],
      [6,73,80],
      [7,76,60],
      [8,70,77],
      [9,68,100],
      [10,65,80],
      [11,57,60],
      [12,55,84],
      [13,68,78],
      [14,56,67],
      [15,32,58],
      [16,20,54],
      [17,25,60],
      [18,33,80],
      [19,22,74],
      [20,32,80],
      [21,45,67],
      [22,48,54],
      [23,50,44],
      [24,70,48],
      [25,72,67],
      [26,87,76],
      [27,74,60],
      [28,70,80],
      [29,34,89],
      [30,24,80],
      [31,10,99],
      [32,20,95],
      [33,50,73],
      [34,70,80],
      [35,98,100],
      [36,88,80],
      [37,77,54],
      [38,66,45],
      [39,65,47],
      [40,75,80],
      [41,55,67],
      [42,58,80],
      [43,50,33],
      [44,70,23],
      [45,88,67],
      [46,79,55],
      [47,50,60],
      [48,58,80],
      [49,68,100],
      [50,78,80]
    ],
    options:  {
      legend: 'always',
      title: 'Line 2',
      labels: ['X', 'line1', 'line2']
    },
    chartEvents: [
      {
        eventName : 'click',
        callback  : function(e, x, points) {
          window.console.log(e, x, points, 'dygraphs clickCallback')
        }
      },
      {
        eventName : 'pointClick',
        callback  : function(e, x, points) {
          window.console.log(e, x, points, 'dygraphs pointClickCallback')
        }
      }
    ]
  },
  area: {
    id: 'area_1',
    data: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {
      title: 'Area Chart'
    },
    chartEvents: [
      {
        eventName : 'select',
        callback  : function(chart) {
          window.console.log('area selected', chart.getSelection())
        }
      },
      {
        eventName : 'click',
        callback  : function(chart) {
          window.console.log('area clicked', chart)
        }
      },
      {
        eventName : 'onmouseover',
        callback  : function(chart) {
          window.console.log('area onmouseover', chart)
        }
      },
      {
        eventName : 'onmouseout',
        callback  : function(chart) {
          window.console.log('area onmouseout', chart)
        }
      }
    ]
  },
  donut: {
    id: 'donut',
    data: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {
      title: 'Donut Chart'
    },
    chartEvents: [
      {
        eventName : 'select',
        callback  : function(chart) {
          window.console.log('donut1 selected', chart.getSelection())
        }
      }
    ]
  },
  pie: {
    id: 'pie',
    data: [
      ['Task', 'Hours per Day'],
      ['Work',     5],
      ['Eat',      2],
      ['Commute',  1],
      ['Watch TV', 3],
      ['Sleep',    10]
    ],
    options: {
      title: 'Pie Chart'
    }
  },
  bar: {
    id: 'bar1',
    data: [
      ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', { role: 'annotation' } ],
      ['2010', 10, 24, 20, ''],
      ['2020', 16, 22, 23, ''],
      ['2030', 28, 19, 29, '']
    ],
    options: {
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: false
    }
  },
  stackedBar: {
    id: 'stackedBar1',
    data: [
      ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
     'Western', 'Literature', { role: 'annotation' } ],
      ['2010', 10, 24, 20, 32, 18, 5, ''],
      ['2020', 16, 22, 23, 30, 16, 9, ''],
      ['2030', 28, 19, 29, 30, 12, 13, '']
    ],
    options: {
      title: 'Stacked Bar Chart',
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true
    }
  },
  bubble: {
    id: 'bubble1',
    data: [
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
      ['CAN',    80.66,              1.67,      'North America',  33739900],
      ['DEU',    79.84,              1.36,      'Europe',         81902307],
      ['DNK',    78.6,               1.84,      'Europe',         5523095],
      ['EGY',    72.73,              2.78,      'Middle East',    79716203],
      ['GBR',    80.05,              2,         'Europe',         61801570],
      ['IRN',    72.49,              1.7,       'Middle East',    73137148],
      ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
      ['ISR',    81.55,              2.96,      'Middle East',    7485600],
      ['RUS',    68.6,               1.54,      'Europe',         141850000],
      ['USA',    78.09,              2.05,      'North America',  307007000]
    ],
    options: {
      title: 'Bubble Chart',
      hAxis: {title: 'Life Expectancy'},
      vAxis: {title: 'Fertility Rate'},
      bubble: {textStyle: {fontSize: 11}}
    }
  },
  column: {
    id: 'column1',
    data: [
      ['Time of Day','Motivation Level','Energy Level'],
      [{v: [8, 0, 0], f: '8 am'}, 1, .25],
      [{v: [9, 0, 0], f: '9 am'}, 2, .5],
      [{v: [10, 0, 0], f:'10 am'}, 3, 1],
      [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
      [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
      [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
      [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
      [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
      [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
      [{v: [17, 0, 0], f: '5 pm'}, 10, 10]
    ],
    options: {
      title: 'Column Chart',
      hAxis: {
        title: 'Time of Day',
        format: 'h:mm a',
        viewWindow: {
          min: [7, 30, 0],
          max: [17, 30, 0]
        }
      },
      vAxis: {
        title: 'Rating (scale of 1-10)'
      }
    }
  },
  stackedColumn: {
    id: 'stackedColumn1',
    data: [
      ['Time of Day','Motivation Level','Energy Level'],
      [{v: [8, 0, 0], f: '8 am'}, 1, .25],
      [{v: [9, 0, 0], f: '9 am'}, 2, .5],
      [{v: [10, 0, 0], f:'10 am'}, 3, 1],
      [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
      [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
      [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
      [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
      [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
      [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
      [{v: [17, 0, 0], f: '5 pm'}, 10, 10]
    ],
    options: {
      title: 'Stacked Column Chart',
      hAxis: {
        title: 'Time of Day',
        format: 'h:mm a',
        viewWindow: {
          min: [7, 30, 0],
          max: [17, 30, 0]
        }
      },
      vAxis: {
        title: 'Rating (scale of 1-10)'
      },
      isStacked: true
    }
  },
  combo: {
    id: 'combo1',
    data: [
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ],
    options: {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    }
  },
  scatter: {
    id: 'scatter1',
    data: [
      ['Age', 'Weight'],
      [ 8,      12],
      [ 4,      5.5],
      [ 11,     14],
      [ 4,      5],
      [ 3,      3.5],
      [ 6.5,    7]
    ],
    options: {
      title: 'Scatter Chart',
      hAxis: {title: 'Age', minValue: 0, maxValue: 15},
      vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
      legend: 'none'
    }
  },
  table: {
    id: 'table1',
    data: [
      ['Name', 'Salary', 'Full Time Employee'],
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ],
    options: {showRowNumber: true, width: '100%', height: '100%'}
  },
  histogram: {
    id: 'histogram1',
    data: [
      ['Dinosaur', 'Length'],
      ['Acrocanthosaurus (top-spined lizard)', 12.2],
      ['Albertosaurus (Alberta lizard)', 9.1],
      ['Allosaurus (other lizard)', 12.2],
      ['Apatosaurus (deceptive lizard)', 22.9],
      ['Archaeopteryx (ancient wing)', 0.9],
      ['Argentinosaurus (Argentina lizard)', 36.6],
      ['Baryonyx (heavy claws)', 9.1],
      ['Brachiosaurus (arm lizard)', 30.5],
      ['Ceratosaurus (horned lizard)', 6.1],
      ['Coelophysis (hollow form)', 2.7],
      ['Compsognathus (elegant jaw)', 0.9],
      ['Deinonychus (terrible claw)', 2.7],
      ['Diplodocus (double beam)', 27.1],
      ['Dromicelomimus (emu mimic)', 3.4],
      ['Gallimimus (fowl mimic)', 5.5],
      ['Mamenchisaurus (Mamenchi lizard)', 21.0],
      ['Megalosaurus (big lizard)', 7.9],
      ['Microvenator (small hunter)', 1.2],
      ['Ornithomimus (bird mimic)', 4.6],
      ['Oviraptor (egg robber)', 1.5],
      ['Plateosaurus (flat lizard)', 7.9],
      ['Sauronithoides (narrow-clawed lizard)', 2.0],
      ['Seismosaurus (tremor lizard)', 45.7],
      ['Spinosaurus (spiny lizard)', 12.2],
      ['Supersaurus (super lizard)', 30.5],
      ['Tyrannosaurus (tyrant lizard)', 15.2],
      ['Ultrasaurus (ultra lizard)', 30.5],
      ['Velociraptor (swift robber)', 1.8]
    ],
    options: {
      title: 'Histogram Chart',
      legend: { position: 'none' }
    }
  },
  steppedArea: {
    id: 'steppedArea1',
    data: [
      ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
      ['Alfred Hitchcock (1935)', 8.4,         7.9],
      ['Ralph Thomas (1959)',     6.9,         6.5],
      ['Don Sharp (1978)',        6.5,         6.4],
      ['James Hawes (2008)',      4.4,         6.2]
    ],
    options: {
      title: 'Stepped Area Chart',
      vAxis: {title: 'Accumulated Rating'},
      isStacked: true
    }
  },
  table: {
    id: 'table1',
    data: [
      ['Name', 'Salary', 'Full Time Employee'],
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ],
    options: {showRowNumber: true, width: '100%', height: '100%'}
  },
  treemap : {
    id: 'treemap1',
    data: [
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global',    null,                 0,                               0],
      ['America',   'Global',             0,                               0],
      ['Europe',    'Global',             0,                               0],
      ['Asia',      'Global',             0,                               0],
      ['Australia', 'Global',             0,                               0],
      ['Africa',    'Global',             0,                               0],
      ['Brazil',    'America',            11,                             10],
      ['USA',       'America',            52,                             20],
      ['Mexico',    'America',            24,                             30],
      ['Canada',    'America',            16,                             40],
      ['France',    'Europe',             42,                             0],
      ['Germany',   'Europe',             31,                              -20],
      ['Sweden',    'Europe',             22,                              -30],
      ['Italy',     'Europe',             17,                              -40],
      ['UK',        'Europe',             21,                              -50],
      ['China',     'Asia',               36,                              40],
      ['Japan',     'Asia',               20,                              44],
      ['India',     'Asia',               40,                              63],
      ['Laos',      'Asia',               4,                               34],
      ['Mongolia',  'Asia',               1,                               -5],
      ['Israel',    'Asia',               12,                              24],
      ['Iran',      'Asia',               18,                              13],
      ['Pakistan',  'Asia',               11,                              -52],
      ['Egypt',     'Africa',             21,                              0],
      ['S. Africa', 'Africa',             30,                              43],
      ['Sudan',     'Africa',             12,                              2],
      ['Congo',     'Africa',             10,                              12],
      ['Zaire',     'Africa',             8,                               10]
    ],
    options: {
      title: 'Tree Map Chart',
      showScale: true,
      minColor: '#000e',
      midColor: '#faf',
      maxColor: '#0d0',
      headerHeight: 15,
      fontColor: 'black',
      width: '100%',
      height: '100%',
      showTooltips: false,
      forceIFrame: true,
      useWeightedAverageForAggregation: false,
      noColor: '#fff',
      highlightOnMouseOver: false
    },
    chartEvents: [
      {
        eventName : 'select',
        callback  : function(e) {
          console.log("Tree Map Selected", e.getSelection())
        }
      }
    ]
  },
  timeline: {
    id: 'timeline',
    data: [
      [ 'Term', 'Name', 'Start', 'End'],
      [ '1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ '2', 'John Adams',        new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ '3', 'Thomas Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ],
    options: {
      timeline: { showRowLabels: false }
    },
    chartEvents: [
      {
        eventName : 'click',
        callback : function(chart) {
          window.console.log('timeline clicked', chart)
        }
      }
    ]
  }
}

module.exports = sampleData;
