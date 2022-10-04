const gen = require('@babel/generator')
const generate = gen.default || gen
const { parse } = require('@babel/parser')
const { visit } = require('estree-util-visit')
const option = { sourceType: 'unambiguous' }

module.exports = {
    generate,
    parse,
    visit,
    option
}