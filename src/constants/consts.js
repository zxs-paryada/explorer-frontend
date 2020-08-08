// TODO : use this if prod server is ready
import config from "src/config";
import _ from "lodash";

const api = process.env.NODE_ENV === "production" ? config.API_PROD : config.API_DEV;

export default Object.freeze({
	DEFAULT_ARRAY: [],
	// API_HSCHAIN_DEX: "https://www.hschain.org/en/trade",
	// API_HSCHAIN_ACCELERATED: ["https://dex-asiapacific.hschain.org/api/v1", "https://dex-atlantic.hschain.org/api/v1", "https://dex-european.hschain.org/api/v1"],
	API_HSCHAIN_ACCELERATED: ["https://devnet.hschain.io/v1", "https://devnet.hschain.io/v1", "https://devnet.hschain.io/v1"],
	HSCHAIN_API_ENDPOINTS: {
		TX: tx => `/tx/${tx}?format=json`,
	},
	// API_COINGECKO: {
	// 	BASE: "https://api.coingecko.com/api/v3",
	// 	GET_MARKET_CHART_RANGE: (id = "BNB", from, to) => `/coins/${id}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`,
	// },
	NUM: {
		BASE_MULT: 100000000,
		DEFAULT_DECIMALS: 8,
		PAGE_SIZE: 20,

		SPARE_PAGE_CNT: 2, //  amount of pages to preload in pagination
		BINACE_API_ROWS_LIMIT: 1000, //  max rows hschain api allows
		HSCHAIN_API_PAGES_LIMIT: 100, //  max page hschain api allows

		REAL_TIME_DELAY_MS: 2000, //  real-time refetch interval(for indexedPagination)
		DASH_REAL_TIME_DELAY_MS: 3000, //  dashboard refetch interval
		ACCOUNT_REFETCH_INTERVAL_MS: 5000, // TODO : currently not used
		ASSET_REFETCH_INTERVAL_MS: 80000,
		ASSET_REFETCH_PRICE_INTERVAL_MS: 80000,
		BASIC_DATA_FETCH_INTERVAL_MS: 30000,
	},
	ASSET: {
		NAME_SEARCH_PROPERTY: ["asset", "mappedAsset", "name"],
		ORDER_COMPARE: ["mappƒedAsset", "marketCap", "price", "supply"],
	},
	GET_LOGO_LINK: symbol =>
		_.isString(symbol) ? `https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/thumnail/${_.split(symbol)[0]}}.png` : "",
	API_BASE: api,
	API: {
		STATUS: "/status",
		BLOCKLIST: "/blocks",
		ACCOUNT: "/account",
		ACCOUNT_TXS: acc => `/account/txs/${acc}?page=1&rows=20`,
		TXLIST: "/txs",
		TX: "/txs",
		ORDERS: "/orders",
		ASSET_IMAGES: "/assets-images?page=1&rows=1000",
		ASSETS: "/assets?page=1&rows=1000",
		ASSET_PRICES: "/assets?page=1&rows=1000&only_price=true",
		ASSET: "/asset?asset=",
		ASSET_TXS: "/assets/txs?page=1&rows=20&txAsset=",
		ASSET_HOLDERS: "/asset-holders?&page=1&rows=20&asset=",
		TOP_ASSETS: "/market/coin/list",
		CHARTS: "/stats/assets/chart",
		FEE: "/fees",
		VALIDATORS: "/validators",
	},
	NETWORK: {
		COSMOS: "cosmoshub-3",
		IRIS: "irishub",
		KAVA: "kava-3",
		HSCHAIN: "hschain",
	},
	PREFIX: {
		COSMOS: "cosmos",
		IRIS: "iris",
		KAVA: "kava",
	},

	MINTSCAN_URL: {
		COSMOS: "https://www.mintscan.io/",
		KAVA: "https://kava.mintscan.io/",
		IRIS: "https://irishub.mintscan.io/",
	},

	LINK: {
		GOOGLE: "https://play.google.com/store/apps/details?id=wannabit.io.cosmostaion",
		IOS: "https://apple.co/2IAM3Xm",
		WEB: "https://wallet.cosmostation.io",
		COSMOSTATION: "https://www.cosmostation.io/",
		HSCHAINDEX: "https://www.hschain.org/",
		COINGECKO_HSCHAIN: "https://www.coingecko.com/en/coins/hschain-coin",
	},

	MENU: [
		{
			display: "DASHBOARD",
			route: "/",
			primary: true,
		},
		{
			display: "BLOCKS",
			route: "/blocks",
		},
		{
			display: "TRANSACTIONS",
			route: "/txs",
		},
		{
			display: "ASSETS",
			route: "/assets",
		},
		// {
		// 	display: "HSCHAIN DEX",
		// 	route: "/dex",
		// },
	],
});
