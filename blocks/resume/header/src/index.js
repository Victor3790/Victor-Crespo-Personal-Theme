import {registerBlockType} from '@wordpress/blocks';

import meta from '../block.json';
import edit from './edit';
import save from './save';

registerBlockType(meta, {
    edit,
    save,
});
