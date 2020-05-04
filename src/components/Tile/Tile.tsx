/** @jsx jsx */
import { jsx } from '@emotion/core';
import { common } from '../../style/common';

interface ITile {
	imgUrl: string;
	title: string;
	description: string;
	handleClick: () => void;
	isClicked: boolean;
}

export const Tile: React.FC<ITile> = (props) => {
	const { imgUrl, title, description, handleClick, isClicked } = props;

	return (
		<div
			css={{
				border: '2px solid',
				display: 'flex',
				flexDirection: 'column',
				width: '200px',
				borderRadius: '5px',
				borderColor: isClicked ? common.green : common.grey,
				color: common.grey,
				transition: 'color .5s ease, border-color .5s ease',
				':hover': {
					color: common.black,
					borderColor: isClicked ? common.green : common.black,
				},
			}}
			onClick={handleClick}
		>
			<div css={{ borderBottom: `1px solid ${common.grey}` }}>
				<img css={{ borderRadius: '5px 5px 0 0' }} src={imgUrl} />
			</div>
			<div
				css={{
					borderBottom: `1px solid ${common.grey}`,
					textAlign: 'center',
					padding: '10px',
				}}
			>
				{title}
			</div>
			<div css={{ textAlign: 'center', padding: '10px' }}>{description}</div>
		</div>
	);
};
