'use client'
import React from 'react';
import {CldImage, CldUploadWidget} from 'next-cloudinary';

interface CloudinaryUploadResult {
    event: string
    info: {
        public_id: string
    }
}

const UploadPage = () => {
    const [publicId, setPublicId] = React.useState('')

    return (
        <main>
            {publicId && <CldImage
                src={publicId}
                alt={''}
                height={200}
                width={200}
            ></CldImage>}
            <div>
                <br/>
                {uploadWidget()}
            </div>
        </main>
    );

    function uploadWidget() {
        return (
            <CldUploadWidget
                options={
                    {
                        sources: ["local"],
                        multiple: false,
                        maxFiles: 5,
                        resourceType: "image",
                    }
                }
                uploadPreset='byxyw1yx'

                onUpload={(result, widget) => {
                    {
                        const myResult = result as CloudinaryUploadResult;
                        if (myResult.event === 'success') {
                            setPublicId(myResult.info.public_id);
                        }
                    }
                }
                }>
                {({open}) => <button
                    className='btn btn-primary'
                    onClick={() => open()}
                >Upload</button>}
            </CldUploadWidget>
        )
    }
};

export default UploadPage;