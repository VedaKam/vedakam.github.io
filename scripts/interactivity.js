// Modal functionality
$(document).ready(function() {
    const modals = {
        'research': {
            btn: $('#learn-more-research'),
            modal: $('#modal-research'),
            close: $('#modal-research-close')
        },
        'debut': {
            btn: $('#learn-more-debut'),
            modal: $('#modal-debut'),
            close: $('#modal-debut-close')
        },
        'design': {
            btn: $('#learn-more-design'),
            modal: $('#modal-design'),
            close: $('#modal-design-close')
        },
        'glioma': {
            btn: $('#learn-more-glioma'),
            modal: $('#modal-glioma'),
            close: $('#modal-glioma-close')
        },
        'stealth': {
            btn: $('#learn-more-stealth'),
            modal: $('#modal-stealth'),
            close: $('#modal-stealth-close')
        },
        'independent': {
            btn: $('#learn-more-independent'),
            modal: $('#modal-independent'),
            close: $('#modal-independent-close')
        }
    };

    // Add event listeners for each modal
    Object.values(modals).forEach(m => {
        m.btn.on('click', function() {
            m.modal.removeClass('hidden');
        });

        m.close.on('click', function() {
            m.modal.addClass('hidden');
        });

        // Close on outside click
        m.modal.on('click', function(e) {
            if (e.target === m.modal[0]) {
                m.modal.addClass('hidden');
            }
        });
    });

    // Close modals on Escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            Object.values(modals).forEach(m => {
                m.modal.addClass('hidden');
            });
        }
    });
});