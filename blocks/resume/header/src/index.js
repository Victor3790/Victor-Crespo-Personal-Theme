import {registerBlockType} from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';

import './styles.scss';

import meta from '../block.json';
import edit from './edit';
import save from './save';

registerBlockType(meta, {
    edit: withSelect((select, props) => {
        return { media: props.attributes.backgroundMediaId ? select('core').getMedia(props.attributes.backgroundMediaId) : undefined };
    })(edit),
    save,
});
