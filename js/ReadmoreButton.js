function toggleText(id, btn) {
    const text = document.getElementById(id);
    if (text.classList.contains('text-truncate-3')) {
        text.classList.remove('text-truncate-3');
        btn.innerText = 'اعرض اقل';
    } else {
        text.classList.add('text-truncate-3');
        btn.innerText = 'اقرأ المزيد';
    }
}
