const os = require('os')
const path = require('path')

exports.APP = {
  website: 'https://qredit.io',
  transactionExpiryMinutes: 45
}

exports.NETWORKS = [
  require('./networks/mainnet.json')
]

exports.PEERS = {
  'ark.mainnet': require('./peers/mainnet.json')
}

exports.ANNOUNCEMENTS = {
  rssUrl: 'https://hodler.enterprises/feed/'
}

exports.VENDOR_FIELD = {
  defaultMaxLength: 255
}

exports.I18N = {
  defaultLocale: 'en-US',
  enabledLocales: [
    'en-US',
    'it-IT'
  ]
}

exports.BIP39 = {
  defaultLanguage: 'english',
  languages: [
    'chinese_simplified',
    'chinese_traditional',
    'english',
    'french',
    'italian',
    'japanese',
    'korean',
    'spanish'
  ]
}
exports.QAE1 = {
  types: [
    'GENESIS',
    'SEND',
    'BURN'
  ]
}

exports.TRANSACTION_TYPES = {
  TRANSFER: 0,
  SECOND_SIGNATURE: 1,
  DELEGATE_REGISTRATION: 2,
  VOTE: 3,
  MULTI_SIGNATURE: 4,
  IPFS: 5,
  TIMELOCK_TRANSFER: 6,
  MULTI_PAYMENT: 7,
  DELEGATE_RESIGNATION: 8,
  TOKEN: 60
}

exports.INTERVALS = {
  short: 30000, // 30 seconds
  medium: 60000, // 1 minute
  long: 180000 // 3 minute
}

exports.MARKET = {
  source: {
    baseUrl: 'https://min-api.cryptocompare.com'
  },
  defaultCurrency: 'BTC',
  crypto: [
    'BTC',
    'ETH',
    'LTC',
    'AUD',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'EUR',
    'GBP',
    'HKD',
    'IDR',
    'INR',
    'JPY',
    'KRW',
    'MXN',
    'RUB',
    'USD'
  ],
  currencies: {
    BTC: { symbol: 'Ƀ', fractionDigits: 8 },
    ETH: { symbol: 'Ξ', fractionDigits: 8 },
    LTC: { symbol: 'Ł', fractionDigits: 8 },
    AUD: { symbol: 'A$', fractionDigits: 5 },
    BRL: { symbol: 'R$', fractionDigits: 5 },
    CAD: { symbol: 'C$', fractionDigits: 5 },
    CHF: { symbol: 'CHF', fractionDigits: 5 },
    CNY: { symbol: '¥', fractionDigits: 5 },
    EUR: { symbol: '€', fractionDigits: 5 },
    GBP: { symbol: '£', fractionDigits: 5 },
    HKD: { symbol: 'HK$', fractionDigits: 5 },
    IDR: { symbol: 'IDR', fractionDigits: 5 },
    INR: { symbol: '₹', fractionDigits: 5 },
    JPY: { symbol: '¥', fractionDigits: 0 },
    KRW: { symbol: '₩', fractionDigits: 0 },
    MXN: { symbol: 'MX$', fractionDigits: 5 },
    RUB: { symbol: '₽', fractionDigits: 5 },
    USD: { symbol: '$', fractionDigits: 5 }
  }
}

exports.PLUGINS = {
  devPath: path.resolve(os.homedir(), '.ark-desktop/plugins-dev'),
  discoverUrl: 'https://github.com/ark-ecosystem-desktop-plugins',
  path: path.resolve(os.homedir(), '.ark-desktop/plugins'),
  validation: require('./plugin-validation.json')
}

exports.THEMES = [{
  id: 'light',
  title: 'Light theme' // TODO translate
},
{
  id: 'dark',
  title: 'Dark theme' // TODO translate
}
]

exports.V1 = {
  fees: [
    0.1 * 1e8, // Transfer
    5 * 1e8, // Second signautre
    25 * 1e8, // Delegate registration
    1 * 1e8, // Vote
    5 * 1e8, // Multisignature
    0 * 1e8, // IPFS (not supported yet)
    0 * 1e8, // Timelock transfer (not supported yet)
    0 * 1e8, // Multu-payment (not supported yet)
    0 * 1e8 // Delegate resignation (not supported yet)
  ]
}
