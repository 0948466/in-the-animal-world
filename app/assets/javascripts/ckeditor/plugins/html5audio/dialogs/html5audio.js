CKEDITOR.dialog.add( 'html5audio', function( editor ) {
    return {
        title: editor.lang.html5audio.title,
        minWidth: 500,
        minHeight: 100,
        contents: [ {
            id: 'info',
            label: editor.lang.html5audio.infoLabel,
            elements: [ {
                type: 'vbox',
                padding: 0,
                children: [ {
                    type: 'hbox',
                    widths: [ '365px', '110px' ],
                    align: 'right',
                    children: [ {
                        type: 'text',
                        id: 'url',
                        label: editor.lang.common.url,
                        required: true,
                        validate: CKEDITOR.dialog.validate.notEmpty( editor.lang.html5audio.urlMissing ),
                        setup: function( widget ) {
                            this.setValue( widget.data.src );
                        },
                        commit: function( widget ) {
                            widget.setData( 'src', this.getValue() );
                        }
                    },
                    {
                        type: 'button',
                        id: 'browse',
                        // v-align with the 'txtUrl' field.
                        // TODO: We need something better than a fixed size here.
                        style: 'display:inline-block;margin-top:14px;',
                        align: 'center',
                        label: editor.lang.common.browseServer,
                        hidden: true,
                        filebrowser: 'info:url'
                    } ]
                } ]
            },
            {
                type: 'hbox',
                id: 'alignment',
                children: [ {
                    type: 'radio',
                    id: 'align',
                    label: editor.lang.common.align,
                    items: [
                        [editor.lang.common.alignCenter, 'center'],
                        [editor.lang.common.alignLeft, 'left'],
                        [editor.lang.common.alignRight, 'right'],
                        [editor.lang.common.alignNone, 'none']
                    ],
                    'default': 'center',
                    setup: function( widget ) {
                        if ( widget.data.align ) {
                            this.setValue( widget.data.align );
                        }
                    },
                    commit: function( widget ) {
                        widget.setData( 'align', this.getValue() );
                    }
                } ]
            } ]
        },
        {
            id: 'Upload',
            hidden: true,
            filebrowser: 'uploadButton',
            label: editor.lang.image.upload,
            elements: [ {
                type: 'file',
                id: 'upload',
                label: editor.lang.image.btnUpload,
                style: 'height:40px',
                size: 38
            },
            {
                type: 'fileButton',
                id: 'uploadButton',
                filebrowser: 'info:url',
                label: editor.lang.image.btnUpload,
                'for': [ 'Upload', 'upload' ]
            } ]
        } ]
    };
} );