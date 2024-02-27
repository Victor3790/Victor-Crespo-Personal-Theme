import { useBlockProps } from '@wordpress/block-editor';
import {InspectorControls, RichText, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import {Panel, PanelBody, Button} from '@wordpress/components';

const Edit = (props) => {
    const blockProps = useBlockProps();
    const {attributes, setAttributes} = props;
    const {name, jobTitle} = attributes;

    return (
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody title='Select background image' initialOpen={true}>
                        <div className="editor-post-featured-image">
                            <MediaUploadCheck>
                                <MediaUpload
                                    allowedTypes={ ['image'] }
                                    render={({open}) => (
                                        <Button 
                                            className={attributes.backgroundMediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                            onClick={open}
                                        >
                                            {attributes.backgroundMediaId == 0 && 'Choose an image'}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div {...blockProps}>
                <div className="hero-background position-absolute w-100"></div>
                <div className="hero">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 col-md-6 h-100 d-flex flex-column justify-content-center">
                                <RichText
                                    tagName='h1'
                                    placeholder='Name'
                                    value={name}
                                    onChange={(newName) => setAttributes({name: newName})}
                                />
                                <RichText
                                    tagName='h4'
                                    placeholder='Job title'
                                    value={jobTitle}
                                    onChange={(newJobTitle) => setAttributes({jobTitle: newJobTitle})}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="hero__pic-container d-flex justify-content-center mt-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
