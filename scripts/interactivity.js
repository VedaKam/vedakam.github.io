// Filter tab functionality
$(document).ready(function() {
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');

        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        $('.card').each(function() {
            const category = $(this).data('category');
            if (filter === 'all' || category === filter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});