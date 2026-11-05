import React, { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
  MdHorizontalRule,
  MdImage,
  MdLink,
  MdRedo,
  MdUndo,
} from 'react-icons/md';
import '../blog/blog-content.css';

export const IMAGE_SIZES = [
  { value: 'small', label: 'Small', hint: '33% width' },
  { value: 'medium', label: 'Medium', hint: '50% width' },
  { value: 'large', label: 'Large', hint: '75% width' },
  { value: 'full', label: 'Full', hint: '100% width' },
];

// Adds a display size, stored as data-size and styled in blog-content.css.
const BlogImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      size: {
        default: 'full',
        parseHTML: (element) => element.getAttribute('data-size') || 'full',
        renderHTML: (attributes) => ({ 'data-size': attributes.size }),
      },
    };
  },
});

const ToolButton = ({ label, active, disabled, onClick, children }) => (
  <button
    type='button'
    title={label}
    aria-label={label}
    aria-pressed={active === undefined ? undefined : active}
    disabled={disabled}
    // Keeps the text selection in place when a button is clicked.
    onMouseDown={(event) => event.preventDefault()}
    onClick={onClick}
    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-2 text-sm font-semibold transition disabled:opacity-40 ${
      active ? 'bg-nexa text-white' : 'text-gray-700 hover:bg-gray-200'
    }`}
  >
    {children}
  </button>
);

ToolButton.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Divider = () => <span className='w-px h-6 mx-1 bg-gray-300' aria-hidden />;

const RichEditor = forwardRef(function RichEditor(
  { initialContent, onChange, onAddImage },
  ref
) {
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  const editor = useEditor({
    // Tiptap 2: Tiptap 3 needs a newer React than this site uses. The toolbar relies
    // on re-rendering after every change to show which formatting is active.
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Underline,
      Link.configure({ openOnClick: false, autolink: true }),
      BlogImage,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Start writing your postâ€¦' }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'blog-content rich-editor-surface',
        'aria-label': 'Post text',
      },
    },
    onUpdate: ({ editor: current }) => onChange(current.getHTML()),
  });

  useImperativeHandle(
    ref,
    () => ({
      getHTML: () => (editor ? editor.getHTML() : initialContent),
      insertImage: ({ url, alt, size }) =>
        editor.chain().focus().setImage({ src: url, alt, size }).run(),
    }),
    [editor, initialContent]
  );

  if (!editor) return null;

  const chain = () => editor.chain().focus();

  const toggleLinkBar = () => {
    setLinkUrl(editor.getAttributes('link').href || '');
    setLinkOpen((open) => !open);
  };

  const applyLink = (event) => {
    event.preventDefault();
    const url = linkUrl.trim();
    if (url) {
      const href = /^(https?:|mailto:|tel:|\/)/i.test(url)
        ? url
        : `https://${url}`;
      chain().extendMarkRange('link').setLink({ href }).run();
    } else {
      chain().extendMarkRange('link').unsetLink().run();
    }
    setLinkOpen(false);
  };

  const imageSelected = editor.isActive('image');
  const selectedImage = imageSelected ? editor.getAttributes('image') : null;

  return (
    <div className='bg-white border border-gray-200 rounded-xl'>
      {/* Sits just below the editor's sticky save bar. */}
      <div
        role='toolbar'
        aria-label='Text formatting'
        className='z-10 flex flex-wrap items-center gap-0.5 p-2 border-b border-gray-200 rounded-t-xl bg-gray-50 xl:sticky xl:top-[72px]'
      >
        <ToolButton
          label='Heading'
          active={editor.isActive('heading', { level: 2 })}
          onClick={() => chain().toggleHeading({ level: 2 }).run()}
        >
          H2
        </ToolButton>
        <ToolButton
          label='Subheading'
          active={editor.isActive('heading', { level: 3 })}
          onClick={() => chain().toggleHeading({ level: 3 }).run()}
        >
          H3
        </ToolButton>
        <Divider />
        <ToolButton
          label='Bold'
          active={editor.isActive('bold')}
          onClick={() => chain().toggleBold().run()}
        >
          <MdFormatBold size={20} />
        </ToolButton>
        <ToolButton
          label='Italic'
          active={editor.isActive('italic')}
          onClick={() => chain().toggleItalic().run()}
        >
          <MdFormatItalic size={20} />
        </ToolButton>
        <ToolButton
          label='Underline'
          active={editor.isActive('underline')}
          onClick={() => chain().toggleUnderline().run()}
        >
          <MdFormatUnderlined size={20} />
        </ToolButton>
        <ToolButton
          label='Link'
          active={editor.isActive('link') || linkOpen}
          onClick={toggleLinkBar}
        >
          <MdLink size={20} />
        </ToolButton>
        <Divider />
        <ToolButton
          label='Bulleted list'
          active={editor.isActive('bulletList')}
          onClick={() => chain().toggleBulletList().run()}
        >
          <MdFormatListBulleted size={20} />
        </ToolButton>
        <ToolButton
          label='Numbered list'
          active={editor.isActive('orderedList')}
          onClick={() => chain().toggleOrderedList().run()}
        >
          <MdFormatListNumbered size={20} />
        </ToolButton>
        <ToolButton
          label='Quote'
          active={editor.isActive('blockquote')}
          onClick={() => chain().toggleBlockquote().run()}
        >
          <MdFormatQuote size={20} />
        </ToolButton>
        <ToolButton
          label='Divider line'
          onClick={() => chain().setHorizontalRule().run()}
        >
          <MdHorizontalRule size={20} />
        </ToolButton>
        <Divider />
        <ToolButton
          label='Align left'
          active={editor.isActive({ textAlign: 'left' })}
          onClick={() => chain().setTextAlign('left').run()}
        >
          <MdFormatAlignLeft size={20} />
        </ToolButton>
        <ToolButton
          label='Align center'
          active={editor.isActive({ textAlign: 'center' })}
          onClick={() => chain().setTextAlign('center').run()}
        >
          <MdFormatAlignCenter size={20} />
        </ToolButton>
        <ToolButton
          label='Align right'
          active={editor.isActive({ textAlign: 'right' })}
          onClick={() => chain().setTextAlign('right').run()}
        >
          <MdFormatAlignRight size={20} />
        </ToolButton>
        <Divider />
        <button
          type='button'
          onMouseDown={(event) => event.preventDefault()}
          onClick={onAddImage}
          className='flex items-center h-9 gap-1.5 px-3 text-sm font-semibold rounded-md text-nexa hover:bg-blue-50'
        >
          <MdImage size={20} aria-hidden />
          Add image
        </button>
        <span className='flex ml-auto'>
          <ToolButton
            label='Undo'
            disabled={!editor.can().undo()}
            onClick={() => chain().undo().run()}
          >
            <MdUndo size={20} />
          </ToolButton>
          <ToolButton
            label='Redo'
            disabled={!editor.can().redo()}
            onClick={() => chain().redo().run()}
          >
            <MdRedo size={20} />
          </ToolButton>
        </span>
      </div>

      {linkOpen && (
        <form
          onSubmit={applyLink}
          className='flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-blue-50'
        >
          <label htmlFor='editor-link' className='text-sm font-medium'>
            Link address
          </label>
          <input
            id='editor-link'
            autoFocus
            value={linkUrl}
            onChange={(event) => setLinkUrl(event.target.value)}
            placeholder='https://www.saboonexa.in/nexa-car-offers-in-hyderabad'
            className='flex-1 min-w-[200px] px-2 py-1.5 text-sm border border-gray-300 rounded-md'
          />
          <button
            type='submit'
            className='px-3 py-1.5 text-sm font-semibold text-white rounded-md bg-nexa'
          >
            {linkUrl.trim() ? 'Apply' : 'Remove link'}
          </button>
          <button
            type='button'
            onClick={() => setLinkOpen(false)}
            className='px-3 py-1.5 text-sm text-gray-600'
          >
            Cancel
          </button>
        </form>
      )}

      {imageSelected && (
        <div className='flex flex-wrap items-center gap-3 p-2 border-b border-gray-200 bg-blue-50'>
          <span className='text-sm font-medium'>Image size</span>
          <div className='flex gap-1'>
            {IMAGE_SIZES.map((option) => (
              <button
                key={option.value}
                type='button'
                title={option.hint}
                aria-pressed={selectedImage.size === option.value}
                onClick={() =>
                  chain().updateAttributes('image', { size: option.value }).run()
                }
                className={`px-2.5 py-1 text-sm font-medium rounded-md border ${
                  selectedImage.size === option.value
                    ? 'border-nexa bg-nexa text-white'
                    : 'border-gray-300 bg-white text-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <label className='flex items-center flex-1 gap-2 text-sm font-medium min-w-[220px]'>
            Description
            <input
              value={selectedImage.alt || ''}
              onChange={(event) =>
                editor
                  .chain()
                  .updateAttributes('image', { alt: event.target.value })
                  .run()
              }
              className='flex-1 px-2 py-1 font-normal border border-gray-300 rounded-md'
            />
          </label>
        </div>
      )}

      <EditorContent editor={editor} />
    </div>
  );
});

RichEditor.propTypes = {
  initialContent: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onAddImage: PropTypes.func.isRequired,
};

export default RichEditor;
