'use strict';

//const { errorHandler } = require('../../src/errors/handler.js');
let Template = require('../models/template.js');

const getTemplates = async (req, reply) => {
    console.log(await Template.query());
    const templates = await Template.query()
    reply.send(await Template.query().toJson);
}

module.exports = {
    getTemplates
}