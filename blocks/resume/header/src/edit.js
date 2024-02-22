import { useBlockProps } from '@wordpress/block-editor';
import {RichText} from '@wordpress/block-editor';

const Edit = (props) => {
    const blockProps = useBlockProps();
    const {attributes, setAttributes} = props;
    const {name, jobTitle} = attributes;

    return (
        <>
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
