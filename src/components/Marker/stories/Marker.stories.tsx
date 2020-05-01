/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Marker } from '../Marker';

const oneMarker = ['1'];
const multipleMarker = ['1', '2', '3', '4'];

storiesOf('Marker', module)
	.add('Default', () => {
		return <Marker markers={oneMarker} />;
	})
	.add('Multiple', () => {
		return <Marker markers={multipleMarker} />;
	});
