import {registerBlockType} from '@wordpress/blocks';

import './styles.scss';

import meta from '../block.json';
import edit from './edit';
import save from './save';

registerBlockType(meta, {
    edit,
    save,
});
