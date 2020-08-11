export default Object.freeze({
	//  HSCHAIN
	HSCHAIN: {
		SEND: "send",
		PROPOSAL_SUBMIT: "cosmos-sdk/MsgSubmitProposal",
		DEPOSIT: "cosmos-sdk/MsgDeposit",
		VOTE: "cosmos-sdk/MsgVote",
		VALIDATOR_CREATE: "create_validator",
		VALIDATOR_REMOVE: "cosmos-sdk/MsgRemoveValidator",
		VALIDATOR_PROPOSAL: "cosmos-sdk/MsgCreateValidatorProposal",
	},

	//  DEX
	DEX: {
		ORDER_NEW: "dex/NewOrder",
		ORDER_CANCEL: "dex/CancelOrder",
		LIST: "dex/ListMsg",
	},

	//  TOKENS
	TOKENS: {
		ISSUE: "tokens/IssueMsg",
		BURN: "tokens/BurnMsg",
		TIME_LOCK: "tokens/TimeLockMsg",
		FREEZE: "tokens/FreezeMsg",
		UNFREEZE: "tokens/UnfreezeMsg",
		TIME_UNLOCK: "tokens/TimeUnlockMsg",
		TIME_RELOCK: "tokens/TimeRelockMsg",
		HTLT: "tokens/HTLTMsg",
		HTLT_DEPOSIT: "tokens/DepositHTLTMsg",
		HTLT_CLAIM: "tokens/ClaimHTLTMsg",
		HTLT_REFUND: "tokens/RefundHTLTMsg",
		MINT: "tokens/MintMsg",
	},

	//  MISC
	MISC: {
		ACCOUNTFLAG_SET: "scripts/SetAccountFlagsMsg",
	},
});
