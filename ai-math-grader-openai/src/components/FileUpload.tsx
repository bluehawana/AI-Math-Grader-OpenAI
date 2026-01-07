'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    selectedFile: File | null;
}

export default function FileUpload({ onFileSelect, selectedFile }: FileUploadProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0]);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        },
        maxFiles: 1,
        maxSize: 10 * 1024 * 1024, // 10MB
    });

    return (
        <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''} ${isDragReject ? 'reject' : ''} ${selectedFile ? 'has-file' : ''}`}
        >
            <input {...getInputProps()} />
            <div className="dropzone-content">
                <div className="dropzone-icon">
                    {isDragActive ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" y1="18" x2="12" y2="12" />
                            <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                    )}
                </div>
                <div className="dropzone-text">
                    {isDragActive ? (
                        <p className="dropzone-primary">Drop your PDF here...</p>
                    ) : isDragReject ? (
                        <p className="dropzone-primary error">Only PDF files are accepted</p>
                    ) : (
                        <>
                            <p className="dropzone-primary">
                                Drag & drop your math exam PDF here
                            </p>
                            <p className="dropzone-secondary">
                                or click to browse files
                            </p>
                            <p className="dropzone-hint">
                                Maximum file size: 10MB
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
