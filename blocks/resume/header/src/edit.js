import { useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
    const blockProps = useBlockProps();

    return (
        <>
            <div {...blockProps}>
                <h1>Hola</h1>
            </div>
        </>
    );
};

export default Edit;
