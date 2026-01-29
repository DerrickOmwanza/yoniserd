import React from 'react';

const StoryModal = ({ story, isOpen, onClose, categories }) => {
  if (!isOpen || !story) return null;

  const category = categories.find(c => c.value === story.category)?.label || story.category;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
        onClick={onClose}
        style={{ backdropFilter: 'blur(4px)' }}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="w-full max-w-3xl rounded-2xl shadow-2xl"
          style={{ backgroundColor: '#050F2A' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header with Icon */}
          <div className="h-64 flex items-center justify-center" style={{ backgroundColor: '#0A1F2E' }}>
            <span className="text-9xl">{story.image}</span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <span
                className="text-sm font-bold text-white px-4 py-2 rounded-full"
                style={{ backgroundColor: '#7EBBBF' }}
              >
                {category}
              </span>
              <span className="text-sm" style={{ color: '#B8A0FF' }}>
                {story.date}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              {story.title}
            </h1>

            {/* Divider */}
            <div className="h-1 w-16 mb-6" style={{ backgroundColor: '#7EBBBF' }} />

            {/* Excerpt */}
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#E8F4FF' }}
            >
              {story.excerpt}
            </p>

            {/* Full Content */}
            <div
              className="prose prose-invert max-w-none text-base leading-relaxed"
              style={{ color: '#E8F4FF' }}
            >
              <p>{story.content}</p>
            </div>

            {/* Footer Action */}
            <div className="mt-10 pt-6 border-t" style={{ borderColor: 'rgba(126, 187, 191, 0.2)' }}>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-white"
                style={{
                  backgroundColor: '#7EBBBF',
                }}
                onMouseEnter={e => e.target.style.opacity = '0.9'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryModal;
