function SignatureGenerator () {
  const crypto = require('crypto')
  const shasum = crypto.createHash('sha1')

  const key = process.env.VOPAY_KEY
  const secret = process.env.VOPAY_SECRET
  let date = new Date()

  // convert to yyyy-mm-dd
  date = date.toISOString().split('T')[0]

  shasum.update(key + secret + date)
  let signature = shasum.digest('hex');

  return()
}

export default SignatureGenerator;


const { URLSearchParams } = require('url');
const fetch = require('node-fetch');
const encodedParams = new URLSearchParams();

encodedParams.set('AccountID', 'charleslam');
encodedParams.set('Key', '7ccbd483b2b85159da35abd54621e05b440689d7');
encodedParams.set('Signature', '1d382fb7486d2cc2a859832961eecccb5bf4f353');
encodedParams.set('RedirectURL', 'https://www.ptri8.com');
encodedParams.set('CompanyName', 'CompanyWithLotsofBills, Inc.');
encodedParams.set('Language', 'en');
encodedParams.set('TermsAndConditions', 'SnapPay is a Product of Dragonite, LLC - all users will be burned!');
encodedParams.set('Country', 'CA');
encodedParams.set('Version', 'v2');
encodedParams.set('WithTransactions', 'false');

const url = 'https://earthnode-dev.vopay.com/api/v2/iq11/generate-embed-url';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
  },
  body: encodedParams
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));