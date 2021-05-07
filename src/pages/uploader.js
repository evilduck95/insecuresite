import React from 'react';

const UploadPage = () => {

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <form className="upload-form" encType="multipart/form-data">
                <input type="file" id="files" multiple onChange={handleChange.bind(this)} />
            </form>
        </div>
    )
}

export default UploadPage;