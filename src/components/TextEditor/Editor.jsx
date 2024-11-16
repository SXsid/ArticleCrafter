import { Editor as TinyEditor } from '@tinymce/tinymce-react';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function MyEditor({ control, defaultValues = "" }) {
  return (
    <form className='mt-10'>
      <Controller
        name="Content"
        control={control}
        defaultValue={defaultValues}
        render={({ field: { onChange, value } }) => (
          <TinyEditor
          
            apiKey='be110hy9so95vdst92yum59b2402wv3brhmeopch656zeqmh'
            value={value}
            onEditorChange={onChange}
            init={{
                id:"text-editor",
                selector: 'textarea',  
              initialValue: value,
              theme:'silver',
              height: 500,
              width: 800,
              skin: 'oxide', // Change this if using a custom skin
              menubar: true,
              content_style: `
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                table { border-collapse: collapse; width: 100%; }
                table th, table td { padding: .4rem; border: 1px solid #ccc; }
                code { background-color: #e8e8e8; border-radius: 3px; padding: .1rem .2rem; }
                blockquote { border-left: 4px solid #ccc; padding-left: 1rem; margin-left: 1.5rem; }
              `,
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap",
                "preview", "anchor", "searchreplace", "visualblocks", "code",
                "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"
              ],
              toolbar: [
                'undo redo', 'formatselect', 'bold italic underline',
                'bullist numlist outdent indent', 'removeformat', 'help'
              ].join(' ')
            }}
          />
        )}
      />
    </form>
  );
}
