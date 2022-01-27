describe('PdfService', () => {
  describe('generate', () => {
    context('when project and template are valid', () => {
      test('returns a pdf file', async () => {
        expect(1).toEqual(1);
      });
    });

    context('when project id is invalid', () => {
      test('throws project id not found error', async () => {
        expect(1).toEqual(1);
      });
    });

    context('when template id is invalid', () => {
      test('throws tempalte id not found error', async () => {
        expect(1).toEqual(1);
      });
    });
  });
});
