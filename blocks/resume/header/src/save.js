import {RichText} from '@wordpress/block-editor';

const Save = (props) => {
    const {attributes} = props;
    const {name, jobTitle} = attributes;

    return (
        <>
            <div>
                <div className="hero-background position-absolute w-100"></div>
                <div className="hero">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 col-md-6 h-100 d-flex flex-column justify-content-center">
                                <RichText.Content
                                    tagName='h1'
                                    value={name}
                                />
                                <RichText.Content
                                    tagName='h4'
                                    value={jobTitle}
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

export default Save;
