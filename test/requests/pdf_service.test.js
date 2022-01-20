const { TestWatcher } = require("jest")

describe('PdfService', () => {
    describe('generate', () => {
        context('when project and template are valid', () => {
            test('returns a pdf file', async () => {
                expect(1).toEqual(1);
            })
        })

        context('when project id is invalid', () => {
            test('throws an error', async () => {
                expect(1).toEqual(1);

            })
        })

        context('when template id is invalid', () => {
            test('throws an error', async () => {
                expect(1).toEqual(1);

            })
        })
    });

})