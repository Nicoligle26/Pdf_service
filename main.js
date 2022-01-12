const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = {
  firstname: 'John',
  service: [{
    name: 'Estudio de credito',
    cost: '$12.000'
  }, {
    name: 'Pagare y custodia',
    cost: '$2.400'
  }, {
    name: 'Desembloso y recaudo',
    cost: '$3.000'
  }, {
    name: 'Seguro de vida',
    cost: '$8.000'
  }]
};


var options = {
  convertTo: 'pdf' //can be docx, txt, ...
};

// Generate a report using the sample template provided by carbone module
// This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
// Of course, you can create your own templates!


// carbone.render('./result.odt', data, options, function (err, result) {
//   if (err) return console.log(err);
//   fs.writeFileSync('result2.pdf', result);
//   process.exit(); // to kill automatically LibreOffice workers
// });