import { ProductWithImage } from '../types/types';
import bricks from '../common/img/bricks.jpg';
import tile from '../common/img/tile.jpg';
import rods from '../common/img/rods.jpg';

export const products: ProductWithImage[] = [{
	imgSrc: bricks,
	id: '100012',
	title: 'Ladrillo hueco 8cm x 18cm x 33cm (Pallet de 198u)',
	description: 'Ladrillo hueco 8cm x 18cm x 33cm - Pallet: 198 unidades',
	price: 60588,
	listingPrice: 67320,
	stock: 5,
	salesUnit: 'group',
	measurementUnit: 'pallet',
	unitValue: 198,
},
{
	imgSrc: tile,
	id: '2060',
	title: 'Ceramico Azabache 20Und 36X36 1ra 2,68 m2 por Caja',
	description: 'Ceramica esmaltada36x36, terminacion brillante, transito medio, liso, Colores disponibles: Negro',
	price: 13031,
	stock: 5,
	salesUnit: 'area',
	measurementUnit: 'm2',
	unitValue: 2.68,
},
{
	imgSrc: rods,
	id: '10035',
	title: 'Hierro 25 mm x 12 m Acindar',
	description: 'HIERRO 25 MM X 12M',
	price: 76293,
	listingPrice: 89757,
	stock: 5,
	salesUnit: 'unit',

}]