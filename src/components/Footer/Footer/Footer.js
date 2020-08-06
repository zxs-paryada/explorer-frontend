/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react";
import styles from "./Footer.scss";
import classNames from "classnames/bind";
import consts from "src/constants/consts";

import footerLogo from "src/assets/footer/HSC_footer.png";
import googleIcon from "src/assets/footer/playstore_btn.svg";
import iosIcon from "src/assets/footer/appstore_btn.svg";
import webWalletIcon from "src/assets/footer/wallet_btn.svg";
import githubIcon from "src/assets/footer/github_btn.svg";
import mediumIcon from "src/assets/footer/medium_btn.svg";
import telegramIcon from "src/assets/footer/telegram_btn.svg";
import emailIcon from "src/assets/footer/email_btn.svg";

const cx = classNames.bind(styles);

export default function(props) {
	const render = (
		<footer className={cx("footerWrapper")}>
			<div className={cx("footer")}>
				<div className={cx("footer-left")}>
					<a>
						<img src={footerLogo} alt='cosmostation_logo' />
					</a>
					<div className={cx("wallet-link-wrapper")}>
						<p className={cx("title")}>HSCHAIN, THE NEXT GENERATION BLOCKCHAIN</p>
					</div>
				</div>

				<div className={cx("footer-right")}>
					<ul className={cx("social")}>
						<li>
							{/* <a rel='noopener noreferrer' href='https://github.com/hschain' id='github' title='Github' target='_blank'> */}
							<a rel='noopener noreferrer' href='' id='github' title='Github' target='_blank'>
								<img src={githubIcon} alt='github' />
							</a>
						</li>
						<li>
							{/* <a rel='noopener noreferrer' href='mailto:support@hschain.io' id='mail' title='Mail' target='_blank'> */}
							<a rel='noopener noreferrer' href='' id='mail' title='Mail' target='_blank'>
								<img src={emailIcon} alt='email' />
							</a>
						</li>
					</ul>
					<div className={cx("rights")}>
						{/* <div className={cx("footer-copyright")} onClick={e => window.open(consts.LINK.HSCHAIN)}> */}
						<div className={cx("footer-copyright")}>© HSChain 2020</div>
					</div>
				</div>
			</div>
		</footer>
	);
	return useMemo(() => render, [render]);
}
