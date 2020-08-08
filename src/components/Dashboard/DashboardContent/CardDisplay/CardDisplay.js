import * as React from "react";
import cn from "classnames/bind";
import styles from "./CardDisplay.scss";
import {_} from "src/lib/scripts";

const cx = cn.bind(styles);

export default function(props) {
	const nemu = [
		{
			title: "Price",
			value: "3,121,412",
			time: "Last 7h ago",
		},
		{
			title: "Height",
			value: "12,325,421",
			time: "Last 9h ago",
		},
		{
			title: "Bonded",
			value: "8,468,116",
			time: "Last 5h ago",
		},
		{
			title: "Inflation",
			value: "818,484",
			time: "Last 11h ago",
		},
	];

	return React.useMemo(
		() => (
			<div className={cx("card-wrapper")}>
				{_.map(nemu, (v, idx) => {
					return (
						<div className={cx("card-template")}>
							<div className={cx("card__status")}>
								<div className={cx("title-wrapper")}>
									<h4 className={cx("title")}>{v.title}</h4>
									<p className={cx("value")}>{v.value}</p>
								</div>
								<div className={cx("content-wrapper")}>
									<div></div>
									<div className={cx("value")}>{v.time}</div>
								</div>
							</div>
						</div>
					);
				})}
				<div className={cx("card-wrapper")}></div>
			</div>
		),
		[nemu]
	);
}
