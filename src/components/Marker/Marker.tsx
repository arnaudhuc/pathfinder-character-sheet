/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MarkerUnit } from './MarkerUnit';
interface IMarker {
	markers: string[];
}

export const Marker: React.FC<IMarker> = (props) => {
	const { markers } = props;
	return (
		<div
			css={{
				position: 'relative',
			}}
		>
			{markers.map((marker, index) => (
				<MarkerUnit key={index} index={index} marker={marker} />
			))}
		</div>
	);
};
