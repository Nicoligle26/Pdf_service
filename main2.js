const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = {
  users: [{
   number: '105083512',
   name: 'John Barranco',
   loan: '$600.000,00 M.C.',
   balance: '$300.000,00 M.C.',
   payment: '$300.000,00 M.C.',
   interests: '$350.000,00 M.C.',
   balanceDue: '$0',
   coutum: 'No. cuota',
   monthlyCoutum: '$175.000,00 M.C.',
   minValue: '$175.000,00 M.C.'
  },{
    number: '147038802',
    name: 'John Barranco',
   loan: '$600.000,00 M.C.',
   balance: '$300.000,00 M.C.',
   payment: '$300.000,00 M.C.',
   interests: '$350.000,00 M.C.',
   balanceDue: '$0',
   coutum: 'No. cuota',
   monthlyCoutum: '$175.000,00 M.C.',
   minValue: '$175.000,00 M.C.'
  },{
    number: '140780200',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1140282436',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  },{
    number: '1054232152',
    name: 'John Barranco',
    loan: '$600.000,00 M.C.',
    balance: '$300.000,00 M.C.',
    payment: '$300.000,00 M.C.',
    interests: '$350.000,00 M.C.',
    balanceDue: '$0',
    coutum: 'No. cuota',
    monthlyCoutum: '$175.000,00 M.C.',
    minValue: '$175.000,00 M.C.'
  }]
};

var options = {
  convertTo: 'pdf' //can be docx, txt, ...
};

// Generate a report using the sample template provided by carbone module
// This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
// Of course, you can create your own templates!


carbone.render('./prueba2.odt', data, options, function (err, result) {
  if (err) return console.log(err);
  fs.writeFileSync('Extracto.pdf', result);
  process.exit(); // to kill automatically LibreOffice workers
});