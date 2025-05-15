function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    const content = box.querySelector('.box-content');
    const isVisible = content.style.display === 'flex';

    // Collapse all other boxes
    document.querySelectorAll('.box .box-content').forEach(c => c.style.display = 'none');

    // Expand clicked box if it wasn't already visible
    if (!isVisible) {
        content.style.display = 'flex';
    }
}