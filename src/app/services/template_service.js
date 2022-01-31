// const AWS = require('aws-sdk');
// const tmp = require('tmp-promise');
// const fs = require('fs').promises;

function TemplateService() {}

async function getTemplate() {
  // AWS.config.update({ region: 'us-east-1' });
  // const s3 = new AWS.S3({});
  // const t = await tmp.file();
  // console.log(t);
  // const params = {
  //   Bucket: bucket,
  //   Key: key,
  // };
  // try {
  //   const readStream = s3.getObject(params).createReadStream();
  //   const file = await fs.writeFile(t.path, readStream, { flag: 'w+' });
  //   console.log(file);
  // } catch (e) {
  //   console.log(e);
  // }
}

TemplateService.prototype.getTemplate = getTemplate;
module.exports = getTemplate;
