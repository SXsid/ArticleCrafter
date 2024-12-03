import { Editor as TinyEditor } from '@tinymce/tinymce-react';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function MyEditor({ control }) {
  return (
    <div className="">
      <Controller
        name="content"
        control={control}
        defaultValue={""}
        rules={{ required: 'Content cannot be empty' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TinyEditor
              apiKey="be110hy9so95vdst92yum59b2402wv3brhmeopch656zeqmh"
              value={value}
              onEditorChange={onChange}
              init={{
                mobile: {
                  menubar: true,
                  plugins: 'autosave lists autolink',
                  toolbar: 'undo bold italic styles',
                },
                selector: 'textarea',
                theme: 'silver',
                width: 900,
                skin: 'oxide',
                menubar: true,
                content_style: `
                  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                  table { border-collapse: collapse; width: 100%; }
                  table th, table td { padding: .4rem; border: 1px solid #ccc; }
                  code { background-color: #e8e8e8; border-radius: 3px; padding: .1rem .2rem; }
                  blockquote { border-left: 4px solid #ccc; padding-left: 1rem; margin-left: 1.5rem; }
                `,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                  'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                  'fullscreen', 'insertdatetime', 'media', 'table', 'help',
                  'wordcount', 'codesample',
                ],
                toolbar: [
                  'undo redo', 'formatselect', 'bold italic underline',
                  'bullist numlist outdent indent', 'removeformat', 'help',
                  'code', 'codesample',
                ].join(' '),
              }}
            />
            {/* {error && <div className="text-red-500 text-sm mt-2">{error.message}</div>} */}
          </>
        )}
      />
    </div>
  );
}
