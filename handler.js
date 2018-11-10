'use strict';

const loremIpsum = require("lorem-ipsum")

module.exports.ipsum = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: loremIpsum(
            {
                count: 6                      // Number of words, sentences, or paragraphs to generate.
                , units: 'paragraphs'         // Generate words, sentences, or paragraphs.
                , sentenceLowerBound: 10      // Minimum words per sentence.
                , sentenceUpperBound: 20      // Maximum words per sentence.
                , paragraphLowerBound: 5      // Minimum sentences per paragraph.
                , paragraphUpperBound: 10     // Maximum sentences per paragraph.
                , format: 'plain'             // Plain text or html
                , suffix: ""
            }
        ),
    };
    callback(null, response);
};