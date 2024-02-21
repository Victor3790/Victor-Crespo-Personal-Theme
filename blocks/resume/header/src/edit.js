import { useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
    const blockProps = useBlockProps();

    return (
        <>
            <div {...blockProps}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <h1>Hola</h1>
                        </div>
                        <div className='col-6'>
                            <h1>amikos</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
